<script context="module" lang="ts">
	export const prerender = true;
	import image1 from '../static/fakeNews.png';
	import image2 from '../static/image1.png';
	import ListItem from '../components/listItem.svelte';
</script>

<svelte:head>
	<title>Home</title>
</svelte:head>

<main>
	<div>
		<div>
			<div class="relative w-full h-48">
				<div class="absolute z-10 bottom-0 m-4">
					<h2 class="text-white">Mensen met hoog EQ beter in het herkennen van fake news?</h2>
				</div>
				>
				<img
					src={image1}
					alt="title van artikel"
					class="absolute inset-0 w-full h-full object-cover"
				/>
			</div>

			<div>
				<div class="sticky top-24 z-20 border-b-2 border-yellow p-3 bg-white">
					<h3 class="text-center">Laatste Nieuws</h3>
				</div>

				<div class="flex flex-wrap overflow-hidden gap-y-2 my-4">
					<ListItem />
					<ListItem />
					<ListItem />
					<ListItem />
					<ListItem />
					<ListItem />
					<ListItem />
					<ListItem />
					<ListItem />
					<ListItem />
					<ListItem />
					<ListItem />
				</div>
			</div>
		</div>
	</div>
</main>
