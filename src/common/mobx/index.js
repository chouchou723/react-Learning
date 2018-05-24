import {observable,computed} from 'mobx';

 class Astore {
	// @observable tolist = [{
	// 	title:'aa',
	// 	done:false
	// },{
	// 	title:'bb',
	// 	done:false
	// }]
	 @observable title = "123";
	 @computed get getList(){

	 }
	 addList(){
	 	
	 }
}
const astore = new Astore()
export  {astore}