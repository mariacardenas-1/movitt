import Layout from "../components/layout"
import { Accordion } from "flowbite-react"

export default function Experiencia () {
    return (
        <Layout>
            <div className="my-12 mx-12 bg-neutral-50 rounded-lg md:mx-24">
                <Accordion flush={true}>
                    <Accordion.Panel>
                        <Accordion.Title>
                        Diseño e implementación de señalización vial
                        </Accordion.Title>
                        <Accordion.Content>
                        <p className="mb-2 text-gray-500 dark:text-gray-400">
                            Flowbite is an open-source library of interactive components built on top of Tailwind CSS including buttons, dropdowns, modals, navbars, and more.
                        </p>
                        <p className="text-gray-500 dark:text-gray-400">
                            Check out this guide to learn how to
                            <a
                            href="https://flowbite.com/docs/getting-started/introduction/"
                            className="text-blue-600 hover:underline dark:text-blue-500"
                            >
                            get started
                            </a>
                            and start developing websites even faster with components on top of Tailwind CSS.
                        </p>
                        </Accordion.Content>
                    </Accordion.Panel>
                    <Accordion.Panel>
                        <Accordion.Title>
                        Campañas de seguridad vial
                        </Accordion.Title>
                        <Accordion.Content>
                        <p className="mb-2 text-gray-500 dark:text-gray-400">
                            Flowbite is first conceptualized and designed using the Figma software so everything you see in the library has a design equivalent in our Figma file.
                        </p>
                        <p className="text-gray-500 dark:text-gray-400">
                            Check out the 
                            <a
                            href="https://flowbite.com/figma/"
                            className="text-blue-600 hover:underline dark:text-blue-500"
                            >
                            Figma design system
                            </a>
                            based on the utility classes from Tailwind CSS and components from Flowbite.
                        </p>
                        </Accordion.Content>
                    </Accordion.Panel>
                    <Accordion.Panel>
                        <Accordion.Title>
                        Estudios de tránsito
                        </Accordion.Title>
                        <Accordion.Content>
                        <p className="mb-2 text-gray-500 dark:text-gray-400">
                            The main difference is that the core components from Flowbite are open source under the MIT license, whereas Tailwind UI is a paid product. Another difference is that Flowbite relies on smaller and standalone components, whereas Tailwind UI offers sections of pages.
                        </p>
                        
                        </Accordion.Content>
                    </Accordion.Panel>
                    <Accordion.Panel>
                        <Accordion.Title>
                        Planes de Manejo de Tránsito - PMT
                        </Accordion.Title>
                        <Accordion.Content>
                        <p className="mb-2 text-gray-500 dark:text-gray-400">
                            The main difference is that the core components from Flowbite are open source under the MIT license, whereas Tailwind UI is a paid product. Another difference is that Flowbite relies on smaller and standalone components, whereas Tailwind UI offers sections of pages.
                        </p>
                        
                        </Accordion.Content>
                    </Accordion.Panel>
                    <Accordion.Panel>
                        <Accordion.Title>
                        Diseño geométrico y de pavimentos
                        </Accordion.Title>
                        <Accordion.Content>
                        <p className="mb-2 text-gray-500 dark:text-gray-400">
                            The main difference is that the core components from Flowbite are open source under the MIT license, whereas Tailwind UI is a paid product. Another difference is that Flowbite relies on smaller and standalone components, whereas Tailwind UI offers sections of pages.
                        </p>
                        
                        </Accordion.Content>
                    </Accordion.Panel>
                    <Accordion.Panel>
                        <Accordion.Title>
                        Fotogrametría con Dron
                        </Accordion.Title>
                        <Accordion.Content>
                        <p className="mb-2 text-gray-500 dark:text-gray-400">
                            The main difference is that the core components from Flowbite are open source under the MIT license, whereas Tailwind UI is a paid product. Another difference is that Flowbite relies on smaller and standalone components, whereas Tailwind UI offers sections of pages.
                        </p>
                        
                        </Accordion.Content>
                    </Accordion.Panel>
                    <Accordion.Panel>
                        <Accordion.Title>
                        Modelación con software especializado
                        </Accordion.Title>
                        <Accordion.Content>
                        <p className="mb-2 text-gray-500 dark:text-gray-400">
                            The main difference is that the core components from Flowbite are open source under the MIT license, whereas Tailwind UI is a paid product. Another difference is that Flowbite relies on smaller and standalone components, whereas Tailwind UI offers sections of pages.
                        </p>
                        
                        </Accordion.Content>
                    </Accordion.Panel>
                </Accordion>
            </div>
           
        </Layout>
    )
}