import HomeContent from '../pages/Home.svelte';
import Food from '../pages/Food.svelte';
import Drink from '../pages/Drink.svelte';
import Error404 from '../pages/Error404.svelte';


export const routes = {
  '/': HomeContent,
  '/food': Food,
  '/drink': Drink,
  '*': Error404
}