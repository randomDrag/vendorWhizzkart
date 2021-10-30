import React from "react";
import { StyleSheet , FlatList , SafeAreaView , View} from 'react-native';
import { connect } from "react-redux";
import ProductComponent from "../components/ProductCard";
import {GetALLProductList} from "../actions"
class PendingProduct extends React.Component {

    componentDidMount(){
        this.props.GetALLProductList();
        }
        
        render(){
        
                const {productdata} = this.props
            const data = productdata.filter(i => i.status == "Pending");
        
            return <SafeAreaView style={{backgroundColor : "#FFF", height : '100%'}}>
               
               <FlatList data ={data} keyExtractor={data.id} renderItem={ (item) => {
               
               return <ProductComponent title={item.item.product_details.name} time="12" date ="12" status={item.item.status} price={item.item.product_price} imageUrl={item.item.product_details.primaryimages.imagePath}/>
        
               } }/>
        
            </SafeAreaView>
        }
        
        

}

const mapStateToProps = (state) =>{
    return {productdata : Object.values(state.GetAllProduct)}
}


export default connect(mapStateToProps,{GetALLProductList})(PendingProduct);