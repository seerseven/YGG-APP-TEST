<script lang="ts">
	import AOS from 'aos';
	import 'aos/dist/aos.css';

	import { onMount } from 'svelte';
	import { browser } from '$app/environment'; // Check if in browser

	onMount(() => {
		if (browser) {
			AOS.init({
				duration: 1000, // Animation duration
				once: true // Run only once on scroll
			});
		}
	});
</script>
