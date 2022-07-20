<template>
	<Side v-motion-slide-bottom :delay="1000" layout="left">
		<Me />
		<!-- <Projects /> -->
		<Experience />
		<Education />
		<Certifications />
		<PDF />
	</Side>

	<Side v-motion-slide-right :delay="250" layout="right">
		<About />
		<Skills />
		<Languages />
		<!-- <Doing /> -->
		<MadeWithTailwind />
	</Side>
</template>
