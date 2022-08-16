import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: 'filterRes',
})
export class FilterPipe2 implements PipeTransform {
  transform(res: { [x: string]: any; } ,field:string): string {console.log(res)
    let result:string=''
    if(res ){

       for(let key in res){
      if( key ==field ){
        result =JSON.stringify(res[key])}
    }
    }
return result
  }
}
