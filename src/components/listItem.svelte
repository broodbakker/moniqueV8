<script context="module" lang="ts">
	export const prerender = true;
	import image1 from '../static/fakeNews.png';
	import image2 from '../static/image1.png';
</script>

<div class="w-full">
	<div class="flex h-20 border-b border-almostWhite">
		<div class="relative flex-none h-full w-32">
			<img
				src={image1}
				alt="title van artikel"
				class="absolute inset-0 w-full h-full object-cover"
			/>
		</div>
		<div class="relative px-2">
			<h4 class="text-sm">
				Buitenaards leven treffen we eerder aan op planeten met ondergronds water.
			</h4>
			<div class="absolute bottom-1 text-xs text-grey">11-05-1990</div>
		</div>
	</div>
</div>
