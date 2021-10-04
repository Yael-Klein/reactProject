import { useGridControlState } from "@material-ui/data-grid";

var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

var raw = "\r\n\r\n";

var getRequestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};
var requestOptions = {
  method: 'PUT',
  headers: myHeaders,
  redirect: 'follow'
};
const requestOptionsPost =(body) =>{  
  return {
  method: 'POST',
  redirect: 'follow',
  headers:myHeaders,
  body:JSON.stringify(body) ,

}};
export function Get1(route){
let src =  fetch("http://localhost:58233/api/"+route, getRequestOptions)
  .then(response => response.text())
  .then(result =>JSON.parse(result))
  .catch(error => console.log('error', error));
  return src;
}
export function Post1(route,body){
return fetch("http://localhost:58233/api/"+route, requestOptionsPost(body))
    .then(response => response.text())
    .then(result =>JSON.parse(result))
    .catch(error => console.log('error', error));
  //console.log(src)
  //return src;

  
}
export function Put1(){
  debugger;
  fetch("http://localhost:58233/api/Teacher/Put", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
  console.log()
}



