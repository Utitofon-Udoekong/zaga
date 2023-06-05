<script setup lang="ts">
const packages = [
    {
        title: "Mini",
        price: "$450",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl nec ultricies lacinia, nunc est ultricies nisl, eget ultricies lorem nunc eget nunc.",
        includedFeatures: [
            "1 location",
            "30min (up to 5 people)",
            "15 Detailed edits in high resolution.",
            "Print release for personal use"
        ],
        image: {
            src: "/img/hire-me/package1.webp",
            alt: "Mini"
        }
    },
    {
        title: "Standard",
        price: "$550",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl nec ultricies lacinia, nunc est ultricies nisl, eget ultricies lorem nunc eget nunc.",
        includedFeatures: [
            "1 location",
            "Outfit change",
            "45min",
            "25 Detailed edits in high resolution.",
            "Print release for personal use"
        ],
        image: {
            src: "/img/hire-me/package2.webp",
            alt: "Standard"
        }
    },
    {
        title: "Ultimate",
        price: "$650",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl nec ultricies lacinia, nunc est ultricies nisl, eget ultricies lorem nunc eget nunc.",
        includedFeatures: [
            "2 locations",
            "Outfit change",
            "60min",
            "35 Detailed edits in high resolution.",
            "Print release for personal use"
        ],
        image: {
            src: "/img/hire-me/package3.webp",
            alt: "Standard"
        }
    },

]
const testimonials = [
    {
        quote: "Working with David was an absolute pleasure. His attention to detail and creative eye for photography made our project truly stand out. He took the time to understand our vision and brought it to life in a way that exceeded our expectations. David is not only a skilled photographer but also a professional who is easy to work with and goes above and beyond to deliver outstanding results. We couldn't be happier with the final product and highly recommend David for any photography needs. Thank you, David, for your exceptional work!",
        name: "Sarah Johnson",
        image: {
            src: "/img/me/2.webp",
            alt: "Sarah Johnson"
        }
    },
    {
        quote: "I had the pleasure of working with Zaga on a photoshoot for my business and I couldn't be happier with the results. Her professionalism, creativity, and attention to detail were top-notch. She captured the essence of my brand and brought it to life in a way that was beyond my expectations. I highly recommend Zaga for any photography needs, she is a true talent.",
        name: "Davido",
        image: {
            src: "/img/me/2.webp",
            alt: "Davido"
        }
    },
    {
        quote: "I've had the pleasure of working with David on several photography projects, and I have to say, he never ceases to amaze me with his talent and creativity. His eye for detail and ability to capture the essence of a moment is truly impressive. Not only that, but he's also a pleasure to work with - always professional, punctual, and collaborative. I highly recommend David for any photography needs - you won't be disappointed!",
        name: "Jenny Asuquo",
        image: {
            src: "/img/me/2.webp",
            alt: "Jenny Asuquo"
        }
    },
    {
        quote: "I have had the privilege of working with David on multiple projects and I am consistently blown away by his work. His ability to capture the emotion and essence of his subjects is truly impressive. He has a gift for making people feel comfortable and bringing out their best selves in front of the camera. I highly recommend David for any photography needs, he is a true professional.",
        name: "Miah",
        image: {
            src: "/img/me/2.webp",
            alt: "Miah"
        }
    },
    {
        quote: "I recently worked with Sarah on a family photoshoot and I was blown away by her talent and professionalism. She made us feel comfortable in front of the camera and captured the most beautiful moments that we will cherish forever. Her attention to detail and ability to tell a story through her photography is truly remarkable. I highly recommend Sarah for any photography needs, she is a true gem.",
        name: "Nenghema",
        image: {
            src: "/img/me/2.webp",
            alt: "Nenghema"
        }
    },
    {
        quote: "I recently worked with David on a photoshoot for my business and I was extremely impressed with his work. He has a keen eye for detail and knows how to bring out the best in his subjects. His creativity and professionalism were second to none.",
        name: "My Boss",
        image: {
            src: "/img/me/2.webp",
            alt: "My Boss"
        }
    },
]
const faqs = [
    {
        q: "What kind of photography services do you offer?",
        a: "We offer a wide range of photography services including portrait photography, event photography, product photography, and more. Please visit our services page for more information."
    },
    {
        q: "What is your pricing structure for photography services?",
        a: "Our pricing structure varies based on the type of photography service and the specific needs of our clients. We offer competitive and transparent pricing and provide a detailed quote for each project."
    },
    {
        q: "Do you offer both indoor and outdoor photography services?",
        a: "Yes, we offer both indoor and outdoor photography services depending on the specific needs of our clients. We are flexible and can work with you to determine the best location for your shoot."
    },
    {
        q: "How long does it take to receive the final photographs?",
        a: "Our turnaround time varies based on the scope of the project, but we typically deliver the final photographs within 2-3 weeks after the photoshoot. Rush orders may be accommodated for an additional fee."
    },
    {
        q: "Can I request specific editing or retouching for my photographs?",
        a: "Yes, we welcome any specific requests for editing or retouching to ensure that the final product meets your expectations. We work closely with our clients to achieve their desired results."
    },
]
const speed = () => Math.floor(Math.random() * 3)
</script>
<template>
    <div>
        <PageHeader title="Hire Me"
            description="Explore my photography portfolio and see the world through my creative lens. Contact me if you would like to hire me." />
        <SectionPackages>
            <PackagePrice v-for="pricing, index in packages" :title="pricing.title"
            :included-features="pricing.includedFeatures" 
            :price="pricing.price"
            :image="pricing.image"
            :description="pricing.description"
            :key="index"/>
        </SectionPackages>
        <SectionTestimonials class="max-w-2xl mx-auto">
            <template #title>
                <p class="font-display font-thin text-4xl text-zinc-900 dark:text-gradient">What My clients are saying about me</p>
            </template>
            <template #items>
                <Testimonial v-for="testimony,index in testimonials" :quote="testimony.quote"
                :name="testimony.name" :image="testimony.image" :key="index"/>
            </template>
        </SectionTestimonials>
        <SectionFaq class="max-w-2xl mx-auto">
            <template #items>
                <QaItem v-for="faq in faqs">
                    <template #question>{{ faq.q }}</template>
                    <template #answer>{{ faq.a }}</template>
                </QaItem>
            </template>
        </SectionFaq>
        <SectionCta class="mt-32" />
    </div>
</template>
<style></style>