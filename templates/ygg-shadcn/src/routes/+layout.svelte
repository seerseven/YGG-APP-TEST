<script lang="ts">
	import '../app.scss';
	import Aos from '$lib/utils/Aos.svelte';
	import { ModeWatcher } from 'mode-watcher';
	import Darkmode from '$lib/utils/Darkmode.svelte';
	import * as Menubar from '$lib/components/ui/menubar';
	let { children } = $props();
</script>

<Aos />
<ModeWatcher />

<Menubar.Root>
	<nav class="w-full">
		<div class="mt-2 flex px-4">
			<!-- Left Section: Logo -->
			<div class="w-44 flex-none">
				<div class="flex items-center space-x-4">
					<img src="/Satori_Icon.png" alt="Logo" class="h-8 w-8" />
					<div class="text-lg text-black dark:text-white">Satori Digital</div>
				</div>
			</div>
			<div class="h-8 w-px bg-gray-800"></div>

			<div class="flex-auto"></div>

			<div class="flex-initial items-end">
				<Darkmode />
			</div>
		</div>
	</nav>
</Menubar.Root>

{@render children()}
