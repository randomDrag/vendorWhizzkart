import DocumentPicker from 'react-native-document-picker';

export default async ()=>{

    try{
    let res  = await DocumentPicker.pickSingle({
        type : [DocumentPicker.types.pdf, DocumentPicker.types.images]
    })

    console.log(res.name);
    return res

    }catch (e){
        if (DocumentPicker.isCancel(err)) {
            // User cancelled the picker, exit any dialogs or menus and move on
          } else {
            throw err
          }

    }


}