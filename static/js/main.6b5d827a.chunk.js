(this["webpackJsonpreact-shopping-cart"]=this["webpackJsonpreact-shopping-cart"]||[]).push([[0],{36:function(e,t,a){e.exports=a(62)},41:function(e,t,a){},62:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(16),c=a.n(l),i=(a(41),a(3)),o=a(4),u=a(6),s=a(5),m=a(20),d=a(33),p=a(14),E=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||m.c,h=Object(m.d)(Object(m.b)({products:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FILTER_PRODUCTS_BY_SIZE":return Object(p.a)(Object(p.a)({},e),{},{size:t.payload.size,filteredItems:t.payload.items});case"ORDER_PRODUCTS_BY_PRICE":return Object(p.a)(Object(p.a)({},e),{},{sort:t.payload.sort,filteredItems:t.payload.items});case"FETCH_PRODUCTS":return{items:t.payload,filteredItems:t.payload};case"CREATE_PRODUCT":return{items:t.payload};case"SAVE_PRODUCT":case"DELETE_PRODUCT":return{product:t.payload};case"CLEAR_PRODUCT":return{items:null};default:return e}},cart:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{cartItems:JSON.parse(localStorage.getItem("cartItems")||"[]")},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_TO_CART":case"REMOVE_FROM_CART":return{cartItems:t.payload.cartItems};default:return e}},order:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CREATE_ORDER":return{order:t.payload};case"CLEAR_ORDER":return{order:null};case"FETCH_ORDERS":case"FETCH_SUMMARY":return{orders:t.payload};default:return e}}}),{},E(Object(m.a)(d.a))),f=a(11),v=a(22),b=a(2),O=a(19),y=a.n(O),C=a(26),S=function(){return function(){var e=Object(C.a)(y.a.mark((function e(t){var a,n;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/api/products");case 2:return a=e.sent,e.next=5,a.json();case 5:n=e.sent,console.log(n),t({type:"FETCH_PRODUCTS",payload:n});case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},g=function(e){Object(u.a)(a,e);var t=Object(s.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){var e=this;return this.props.filteredProducts?r.a.createElement("div",{className:"filter"},r.a.createElement("div",{className:"filter-result"},this.props.filteredProducts.length," Products"),r.a.createElement("div",{className:"filter-sort"},"Order by"," ",r.a.createElement("select",{value:this.props.sort,onChange:function(t){return e.props.sortProducts(e.props.filteredProducts,t.target.value)}},r.a.createElement("option",{value:"latest"},"Latest"),r.a.createElement("option",{value:"lowest"},"Lowest"),r.a.createElement("option",{value:"highest"},"Highest"))),r.a.createElement("div",{className:"filter-size"},"Filter by Size"," ",r.a.createElement("select",{value:this.props.size,onChange:function(t){return e.props.filterProducts(e.props.products,t.target.value)}},r.a.createElement("option",{value:""},"ALL"),r.a.createElement("option",{value:"XS"},"XS"),r.a.createElement("option",{value:"S"},"S"),r.a.createElement("option",{value:"M"},"M"),r.a.createElement("option",{value:"L"},"L"),r.a.createElement("option",{value:"XL"},"XL"),r.a.createElement("option",{value:"ONESIZE"},"ONESIZE"),r.a.createElement("option",{value:"35"},"35"),r.a.createElement("option",{value:"36"},"36"),r.a.createElement("option",{value:"37"},"37"),r.a.createElement("option",{value:"38"},"38"),r.a.createElement("option",{value:"39"},"39"),r.a.createElement("option",{value:"40"},"40"),r.a.createElement("option",{value:"41"},"41"),r.a.createElement("option",{value:"42"},"42"),r.a.createElement("option",{value:"43"},"43"),r.a.createElement("option",{value:"44"},"44"),r.a.createElement("option",{value:"44"},"45")))):r.a.createElement("div",null,"Loading...")}}]),a}(n.Component),j=Object(f.b)((function(e){return{size:e.products.size,sort:e.products.sort,products:e.products.items,filteredProducts:e.products.filteredItems}}),{filterProducts:function(e,t){return function(a){a({type:"FILTER_PRODUCTS_BY_SIZE",payload:{size:t,items:""===t?e:e.filter((function(e){return e.availableSizes.indexOf(t)>=0}))}})}},sortProducts:function(e,t){return function(a){var n=e.slice();"latest"===t?n.sort((function(e,t){return e._id>t._id?1:-1})):n.sort((function(e,a){return"lowest"===t?e.price>a.price?1:-1:e.price>a.price?-1:1})),console.log(n),a({type:"ORDER_PRODUCTS_BY_PRICE",payload:{sort:t,items:n}})}}})(g);function I(e){return"$"+Number(e.toFixed(1)).toLocaleString()+" "}var N=a(18),_=a.n(N),T=a(15),k=a.n(T),R=a(21),P=a.n(R),D=function(e){Object(u.a)(a,e);var t=Object(s.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).openModal=function(e){n.setState({product:e})},n.closeModal=function(){n.setState({product:null})},n.state={product:null},n}return Object(o.a)(a,[{key:"componentDidMount",value:function(){this.props.fetchProducts()}},{key:"render",value:function(){var e=this,t=this.state.product;return r.a.createElement("div",null,r.a.createElement(_.a,{bottom:!0,cascade:!0},this.props.products?r.a.createElement("ul",{className:"products"},this.props.products.map((function(t){return r.a.createElement("li",{key:t._id},r.a.createElement("div",{className:"product"},r.a.createElement("a",{href:"#"+t._id,onClick:function(){return e.openModal(t)}},r.a.createElement("img",{src:t.image,alt:t.title}),r.a.createElement("p",null,t.title)),r.a.createElement("div",{className:"product-price"},r.a.createElement("div",null,I(t.price)),t.countInStock>0&&r.a.createElement("button",{onClick:function(){return e.props.addToCart(t)},className:"button primary"},"Add to Cart"))))}))):r.a.createElement("div",null,"Loading...")),t&&r.a.createElement(k.a,{isOpen:!0,onRequestClose:this.closeModal},r.a.createElement(P.a,null,r.a.createElement("button",{className:"close-modal",onClick:this.closeModal},"x"),r.a.createElement("div",{className:"product-details"},r.a.createElement("img",{src:t.image,alt:t.title}),r.a.createElement("div",{className:"product-details-description"},r.a.createElement("p",null,r.a.createElement("strong",null,t.title)),r.a.createElement("p",null,"Description:",r.a.createElement("li",null,t.description)),r.a.createElement("p",null,"In stock: ",t.countInStock>0?t.countInStock:"Currently unavailable"),r.a.createElement("p",null,"Avaiable Sizes:"," ",t.availableSizes.map((function(e){return r.a.createElement("span",null," ",r.a.createElement("button",{className:"button"},e))}))),r.a.createElement("div",{className:"product-price"},r.a.createElement("div",null,I(t.price)),t.countInStock>0&&r.a.createElement("button",{onClick:function(){e.props.addToCart(t),e.closeModal()},className:"button primary"},"Add to Cart")))))))}}]),a}(n.Component),A=Object(f.b)((function(e){return{products:e.products.filteredItems}}),{fetchProducts:S,addToCart:function(e){return function(t,a){var n=a().cart.cartItems.slice(),r=!1;n.forEach((function(t){t._id===e._id&&(r=!0,t.count<e.countInStock&&t.count++)})),r||n.push(Object(p.a)(Object(p.a)({},e),{},{count:1})),t({type:"ADD_TO_CART",payload:{cartItems:n}}),localStorage.setItem("cartItems",JSON.stringify(n))}}})(D),M=a(13),L=function(e){Object(u.a)(a,e);var t=Object(s.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).handleInput=function(e){n.setState(Object(M.a)({},e.target.name,e.target.value))},n.createOrder=function(e){e.preventDefault();var t={name:n.state.name,email:n.state.email,address:n.state.address,cartItems:n.props.cartItems,total:n.props.cartItems.reduce((function(e,t){return e+t.price*t.count}),0)};n.props.createOrder(t)},n.closeModal=function(){n.props.clearOrder()},n.state={name:"",email:"",address:"",showCheckout:!1},n}return Object(o.a)(a,[{key:"render",value:function(){var e=this,t=this.props,a=t.cartItems,n=t.order;return r.a.createElement("div",null,0===a.length?r.a.createElement("div",{className:"cart cart-header"},"Cart is empty"):r.a.createElement("div",{className:"cart cart-header"},"You have ",a.length," in the cart"," "),n&&r.a.createElement(k.a,{isOpen:!0,onRequestClose:this.closeModal},r.a.createElement(P.a,null,r.a.createElement("button",{className:"close-modal",onClick:this.closeModal},"x"),r.a.createElement("div",{className:"order-details"},r.a.createElement("h3",{className:"success-message"},"Your order has been placed."),r.a.createElement("h2",null,"Order ",n._id),r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("div",null,"Name:"),r.a.createElement("div",null,n.name)),r.a.createElement("li",null,r.a.createElement("div",null,"Email:"),r.a.createElement("div",null,n.email)),r.a.createElement("li",null,r.a.createElement("div",null,"Address:"),r.a.createElement("div",null,n.address)),r.a.createElement("li",null,r.a.createElement("div",null,"Date:"),r.a.createElement("div",null,n.createdAt)),r.a.createElement("li",null,r.a.createElement("div",null,"Total:"),r.a.createElement("div",null,I(n.total))),r.a.createElement("li",null,r.a.createElement("div",null,"Cart Items:"),r.a.createElement("div",null,n.cartItems.map((function(e){return r.a.createElement("div",null,e.count," "," x "," ",e.title)})))))))),r.a.createElement("div",null,r.a.createElement("div",{className:"cart"},r.a.createElement(_.a,{left:!0,cascade:!0},r.a.createElement("ul",{className:"cart-items"},a.map((function(t){return r.a.createElement("li",{key:t._id},r.a.createElement("div",null,r.a.createElement("img",{src:t.image,alt:t.title})),r.a.createElement("div",null,r.a.createElement("div",null,t.title),r.a.createElement("div",{className:"right"},I(t.price)," x ",t.count," ",r.a.createElement("button",{className:"button",onClick:function(){return e.props.removeFromCart(t)}},"Remove"))))}))))),0!==a.length&&r.a.createElement("div",null,r.a.createElement("div",{className:"cart"},r.a.createElement("div",{className:"total"},r.a.createElement("div",null,"Total:"," ",I(a.reduce((function(e,t){return e+t.price*t.count}),0))),r.a.createElement("button",{onClick:function(){e.setState({showCheckout:!0})},className:"button primary"},"Proceed"))),this.state.showCheckout&&r.a.createElement(_.a,{right:!0,cascade:!0},r.a.createElement("div",{className:"cart"},r.a.createElement("form",{onSubmit:this.createOrder},r.a.createElement("ul",{className:"form-container"},r.a.createElement("li",null,r.a.createElement("label",null,"Email"),r.a.createElement("input",{name:"email",type:"email",required:!0,onChange:this.handleInput})),r.a.createElement("li",null,r.a.createElement("label",null,"Name"),r.a.createElement("input",{name:"name",type:"text",required:!0,onChange:this.handleInput})),r.a.createElement("li",null,r.a.createElement("label",null,"Address"),r.a.createElement("input",{name:"address",type:"text",required:!0,onChange:this.handleInput})),r.a.createElement("li",null,r.a.createElement("button",{className:"button primary",type:"submit"},"Checkout")))))))))}}]),a}(n.Component),w=Object(f.b)((function(e){return{order:e.order.order,cartItems:e.cart.cartItems}}),{removeFromCart:function(e){return function(t,a){var n=a().cart.cartItems.slice().filter((function(t){return t._id!==e._id}));t({type:"REMOVE_FROM_CART",payload:{cartItems:n}}),localStorage.setItem("cartItems",JSON.stringify(n))}},createOrder:function(e){return function(t){fetch("/api/orders",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}).then((function(e){return e.json()})).then((function(e){t({type:"CREATE_ORDER",payload:e}),localStorage.clear("cartItems"),t({type:"CLEAR_CART"})}))}},clearOrder:function(){return function(e){e({type:"CLEAR_ORDER"})}}})(L),z=function(e){Object(u.a)(a,e);var t=Object(s.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",{className:"content"},r.a.createElement("div",{className:"main"},r.a.createElement(j,null),r.a.createElement(A,null)),r.a.createElement("div",{className:"sidebar"},r.a.createElement(w,null))))}}]),a}(n.Component),U=function(e){Object(u.a)(a,e);var t=Object(s.a)(a);function a(){var e;return Object(i.a)(this,a),(e=t.call(this)).handleInput=function(t){e.setState(Object(M.a)({},t.target.name,t.target.value))},e.state={orders:[],keyword:""},e}return Object(o.a)(a,[{key:"componentDidMount",value:function(){var e=this;this.props.fetchSummary((function(t){e.setState({orders:t})}))}},{key:"deleteClick",value:function(e){var t=this;this.props.deleteProduct(e,(function(a){alert(a.message);for(var n=[],r=0;r<t.state.orders.length;r++){var l=t.state.orders[r];l._id!=e&&n.push(l)}t.setState({orders:n})}))}},{key:"searchProduct",value:function(){var e=this;this.props.searchProduct(this.state.keyword,(function(t){e.setState({orders:t})}))}},{key:"render",value:function(){var e=this,t=this.state.orders;return t&&null!=t?r.a.createElement("div",{className:"orders"},r.a.createElement("h2",null,"Stock Summary"),r.a.createElement("div",null,r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("input",{type:"text",placeholder:"Enter item's title",name:"keyword",required:!0,onChange:this.handleInput})),r.a.createElement("li",null,r.a.createElement("a",{href:"javascript:;",className:"search",onClick:this.searchProduct.bind(this)},"Search")))),r.a.createElement("table",null,r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"ID"),r.a.createElement("th",null,"TITLE"),r.a.createElement("th",null,"PRICE"),r.a.createElement("th",null,"STOCK"),r.a.createElement("th",null,"DELETE"))),r.a.createElement("tbody",null,t.map((function(t){return r.a.createElement("tr",null,r.a.createElement("td",null,t._id),r.a.createElement("td",null,t.title),r.a.createElement("td",null," ",I(t.price)),r.a.createElement("td",null,t.countInStock),r.a.createElement("td",null,r.a.createElement("a",{href:"javascript:;",onClick:e.deleteClick.bind(e,t._id)},"DELETE")),r.a.createElement("td",null,r.a.createElement("a",{href:"/update/"+t._id,onClick:function(){return S()}},"UPDATE")))}))))):r.a.createElement("div",null,"Orders")}}]),a}(n.Component),x=Object(f.b)((function(e){return{}}),{fetchSummary:function(e){return function(t){fetch("/api/products").then((function(e){return e.json()})).then((function(a){e(a),t({type:"FETCH_SUMMARY",payload:a})}))}},deleteProduct:function(e,t){return function(a){fetch("/api/deleteProducts",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({id:e})}).then((function(e){return e.json()})).then((function(e){t(e)}))}},searchProduct:function(e,t){return function(a){fetch("/api/searchProduct",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({keyword:e})}).then((function(e){return e.json()})).then((function(e){t(e)}))}}})(U),F=function(e){Object(u.a)(a,e);var t=Object(s.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",{className:"summary"},r.a.createElement("a",{href:"/create"},"CREATE"),r.a.createElement("a",{href:"/"},"BACK TO MAINPAGE")),r.a.createElement("div",null,r.a.createElement(x,null)))}}]),a}(n.Component),q=function(e){Object(u.a)(a,e);var t=Object(s.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).handleInput=function(e){n.setState(Object(M.a)({},e.target.name,e.target.value))},n.createProduct=function(e){e.preventDefault();var t={_id:n.state._id,title:n.state.title,price:n.state.price,countInStock:n.state.countInStock,description:n.state.description,image:n.state.image,availableSizes:n.state.availableSizes};n.props.createProduct(t)},n.closeModal=function(){n.props.clearProduct()},n.state={_id:void 0==n.props.id?"":n.props.id,title:"",price:"",countInStock:"",description:"",image:"",availableSizes:""},""!=n.state._id&&n.props.getProducts(n.state._id,(function(e){n.setState({title:e.title,price:e.price,countInStock:e.countInStock,description:e.description,image:e.image,availableSizes:e.availableSizes})})),n}return Object(o.a)(a,[{key:"render",value:function(){var e=this.props.product;return r.a.createElement("div",null,e&&r.a.createElement(k.a,{isOpen:!0,onRequestClose:this.closeModal},r.a.createElement("div",{className:"summary"},r.a.createElement("a",{href:"/admin/create"},"CREATE MORE"),r.a.createElement("a",{href:"/admin"},"BACK TO ADMIN")),r.a.createElement("div",{className:"create"},r.a.createElement("h3",{className:"success-message"},"New product has been placed."),r.a.createElement("h2",null,"Product ID  ",e._d),r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("div",null,"Title: ",e.title)),r.a.createElement("li",null,r.a.createElement("div",null,"Price: $",e.price)),r.a.createElement("li",null,r.a.createElement("div",null,"Stock: ",e.countInStock)),r.a.createElement("li",null,r.a.createElement("div",null,"Description: ",e.description)),r.a.createElement("li",null,r.a.createElement("div",null,"Sizes: ",e.availableSizes))))),r.a.createElement("div",null,r.a.createElement("div",{className:"create"},r.a.createElement("form",{onSubmit:this.createProduct},r.a.createElement("ul",{className:"form-container"},r.a.createElement("li",null,r.a.createElement("label",null,"Title"),r.a.createElement("input",{defaultValue:this.state.title,name:"title",type:"title",required:!0,onChange:this.handleInput})),r.a.createElement("li",null,r.a.createElement("label",null,"Price"),r.a.createElement("input",{defaultValue:this.state.price,name:"price",type:"price",required:!0,onChange:this.handleInput})),r.a.createElement("li",null,r.a.createElement("label",null,"Stock"),r.a.createElement("input",{defaultValue:this.state.countInStock,name:"countInStock",type:"countInStock",required:!0,onChange:this.handleInput})),r.a.createElement("li",null,r.a.createElement("label",null,"Description"),r.a.createElement("input",{defaultValue:this.state.description,name:"description",type:"description",required:!0,onChange:this.handleInput})),r.a.createElement("li",null,r.a.createElement("label",null,"Sizes"),r.a.createElement("input",{defaultValue:this.state.availableSizes,name:"availableSizes",type:"availableSizes",required:!0,onChange:this.handleInput})),r.a.createElement("li",null,r.a.createElement("button",{className:"button primary",type:"submit"},"Submit")))))))}}]),a}(n.Component),J=Object(f.b)((function(e){return{product:e.products.items}}),{createProduct:function(e){return function(t){fetch("/api/products",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}).then((function(e){return e.json()})).then((function(e){t({type:"CREATE_PRODUCT",payload:e})}))}},clearProduct:function(){return function(e){e({type:"CLEAR_PRODUCT"})}},getProducts:function(e,t){return function(){var a=Object(C.a)(y.a.mark((function a(n){return y.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:fetch("/api/getProject",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({id:e})}).then((function(e){return e.json()})).then((function(e){t(e)}));case 1:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()}})(q),B=function(e){Object(u.a)(a,e);var t=Object(s.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",{className:"summary"},r.a.createElement("a",{href:"/admin"},"BACK TO ADMIN")),r.a.createElement("div",{className:"create"},r.a.createElement(J,null)))}}]),a}(n.Component),V=function(e){Object(u.a)(a,e);var t=Object(s.a)(a);function a(e){return Object(i.a)(this,a),t.call(this,e)}return Object(o.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",{className:"summary"},r.a.createElement("a",{href:"/admin"},"BACK TO ADMIN")),r.a.createElement("div",{className:"create"},r.a.createElement(J,{id:this.props.match.params.id})))}}]),a}(n.Component),Y=function(e){Object(u.a)(a,e);var t=Object(s.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return r.a.createElement(f.a,{store:h},r.a.createElement(v.a,null,r.a.createElement("div",{className:"grid-container"},r.a.createElement("header",null,r.a.createElement(v.b,{to:"/"},"Adidasss"),r.a.createElement(v.b,{to:"/admin"},"Admin")),r.a.createElement("main",null,r.a.createElement(b.a,{path:"/create",component:B}),r.a.createElement(b.a,{path:"/admin",component:F}),r.a.createElement(b.a,{path:"/update/:id",component:V}),r.a.createElement(b.a,{path:"/",component:z,exact:!0})),r.a.createElement("footer",null,"All right is reserved."))))}}]),a}(r.a.Component);c.a.render(r.a.createElement(r.a.Fragment,null,r.a.createElement(Y,null)),document.getElementById("root"))}},[[36,1,2]]]);
//# sourceMappingURL=main.6b5d827a.chunk.js.map