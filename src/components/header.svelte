<script>
	import Nav from './nav.svelte';
	import Icon from 'svelte-awesome';
	import { search, bars } from 'svelte-awesome/icons';
</script>

<header class="sticky top-0 z-20">
	<div class="flex justify-between px-4 bg-purple h-12">
		<h1 class="text-3xl text-white my-auto">Cog<strong class="text-yellow">novi</strong></h1>
		<div class="flex justify-between my-auto">
			<div class="flex mr-4">
				<!-- <Icon data={bars} scale="1.5" style="color:white;" class="mx-2" /> -->
				<div class="text-white">Menu</div>
			</div>
			<!-- <Icon data={search} scale="1.5" style="color:white" /> -->
		</div>
	</div>
	<Nav />
</header>
