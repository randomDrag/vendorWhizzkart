import React from "react";
import { StyleSheet , FlatList , SafeAreaView , View} from 'react-native';
import ProductComponent from "../components/ProductCard";

class RejectedProduct extends React.Component {



render(){

    let data =[

        {
            id : '1515',
            status : 'Rejected',
            price : '150.00',
            title : 'chicken wings',
            date : '25 oct 2021',
            time : '1 pm',
            image : 'https://cdn.pngsumo.com/millions-of-png-images-backgrounds-and-vectors-for-free-download-healthy-meal-png-538_534.jpg'
        },
        {
            id : '151465465',
            status : 'Rejected',
            price : '150.00',
            title : 'chicken wings',
            date : '25 oct 2021',
            time : '1 pm',
            image : 'https://cdn.pngsumo.com/millions-of-png-images-backgrounds-and-vectors-for-free-download-healthy-meal-png-538_534.jpg'
        },
        {
            id : '15021215',
            status : 'Rejected',
            price : '150.00',
            title : 'chicken wings',
            date : '25 oct 2021',
            time : '1 pm',
            image : 'https://www.pngplay.com/wp-content/uploads/1/Beef-PNG.png'
        }

    ]


    return <SafeAreaView style={{backgroundColor : "#FFF", height : '100%'}}>
       
       <FlatList data ={data} keyExtractor={data.id} renderItem={ (item) => 
       <ProductComponent title={item.item.title} time={item.item.time} date ={item.item.date} status={item.item.status} price={item.item.price} imageUrl={item.item.image}/>

       } />

    </SafeAreaView>
}



}


export default RejectedProduct;