const routes = [
  { path: '/', component: note },
  { path: '/bin', component: recycleBin },
  { path: '*', component: NotFound }
];


const router = new VueRouter({
  mode: 'history',  
  routes
});