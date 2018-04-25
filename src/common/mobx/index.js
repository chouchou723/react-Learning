import {observable} from 'mobx';

 class Astore {
	// @observable tolist = [{
	// 	title:'aa',
	// 	done:false
	// },{
	// 	title:'bb',
	// 	done:false
	// }]
	 @observable title = "123";
}
const astore = new Astore()
export  {astore}