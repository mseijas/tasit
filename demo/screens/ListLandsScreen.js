import React from "react";
import { ListView } from "react-native";
import ListLands from "@presentational/ListLands";
import LandRow from "@presentational/LandRow";
import ContractsABIs from "@constants/ContractsABIs";
import ContractsAddresses from "@constants/ContractsAddresses";
import { Action } from "tasit-sdk";
const { estateABI, marketplaceABI } = ContractsABIs;
const { estateAddress, marketplaceAddress } = ContractsAddresses;
const { Contract } = Action;

export default class ListLandsScreen extends React.Component {
  // TODO: Switch to new DecentralandEstate() once the SDK includes that
  estateContract = new Contract(estateAddress, estateABI);
  marketplaceContract = new Contract(marketplaceAddress, marketplaceABI);
  state = {
    dataSource: ds.cloneWithRows(rows),
  };

  async componentDidMount() {
    const rows = await this.getSellOrders();
    this.setState({ rows });
  }

  // Note: This function is assuing that:
  // - All estates have a sell order
  // - The total supply of estates is small
  // TODO: Rewrite this function when we move to testnet
  async getSellOrders() {
    const orders = [];
    const totalSupply = await this.estateContract.totalSupply();

    for (let estateId = 1; estateId <= Number(totalSupply); estateId++) {
      const order = this.getSellOrder(estateId);
      orders.push(order);
    }

    return await Promise.all(orders);
  }

  async getSellOrder(estateId) {
    const estateName = await this.estateContract.getMetadata(estateId);
    const [
      orderId,
      seller,
      price,
      expiresAt,
    ] = await this.marketplaceContract.auctionByAssetId(estateId);

    const hasOrder = parseInt(orderId, 16) !== 0;
    if (!hasOrder) throw Error(`Estate (id:${estateId}) has no sell order.`);

    const priceMana = Number(price.toString()) / 1e18;
    const manaPerUsd = 30;
    const priceUsd = priceMana * manaPerUsd;
    const imgUrl = `https://api.decentraland.org/v1/estates/${estateId}/map.png`;

    return {
      id: estateId,
      name: estateName,
      priceMana,
      priceUsd,
      img: imgUrl,
      orderId,
      seller,
      expiresAt,
    };
  }

  renderRow = row => {
    const { item: land } = row;
    const handlePress = () =>
      this.props.navigation.navigate("LandClaimScreen", { land });

    return <LandRow id={land.id} land={land} onPress={handlePress} />;
  };

  render() {
    return (
      <ListLands
        dataSource={this.state.dataSource}
        renderRow={this.renderRow}
      />
    );
  }
}
