"use client"
import React from 'react';
import Heading from "@radui/ui/Heading";
import Text from "@radui/ui/Text";
import Seperator from "@radui/ui/Separator";
import Card from "@/components/Card"
import Image from "next/image";

function page(props) {
    return (
       <div className="flex flex-col items-center bg-gray-100 justify-center min-h-screen text-gray-1000">
      <div className="bg-[var(--rad-ui-color-gray-300)] h-full justify-center items-center flex flex-col lg:w-[90vw] w-screen border border-l-gray-600 border-r-gray-600 lg:p-16 p-4 space-y-8">
        
            <section className='lg:max-w-3xl space-y-8 mb-16'>
                <div className='space-x-4 flex lg:flex-row flex-col'>
                    <div style={{ borderRadius: "100%" }} className='bg-gray-500 w-12 h-12 flex items-center justify-center border border-gray-600 lg:left-[8vw] lg:absolute'>b</div>
                    <div className='flex flex-row'>
                    <span className="h-6 w-0.5 rounded-full bg-slate-500 p-0.5 mt-3"></span>
                    <span className='text-slate-800 mt-3 ml-3'>September 5, 2022</span>
                    </div>
                </div>
            <Heading as="h1">Crafting a design system for a multiplanetary future</Heading>
            <Text className="text-slate-900 !text-lg">
                Most companies try to stay ahead of the curve when it comes to visual design, but for Planetaria we needed to create a brand that would still inspire us 100 years from now when humanity has spread across our entire solar system.
            </Text>

            <Image src="/images/article.webp" width={800} height={800} alt="article" className='rounded-3xl'/>
            <Text className="text-slate-900 !text-lg">
                I knew that to get it right I was going to have to replicate the viewing conditions of someone from the future, so I grabbed my space helmet from the closet, created a new Figma document, and got to work.
            </Text>
        </section>
           <section className='lg:max-w-3xl space-y-8 mb-16'>
                
            <Heading as="h3">Sermone fata</Heading>
            <Text className="text-slate-900 !text-lg">
                Lorem markdownum, bracchia in redibam! Terque unda puppi nec, linguae posterior in utraque respicere candidus Mimasque formae; quae conantem cervice. Parcite variatus, redolentia adeunt. Tyrioque dies, naufraga sua adit partibus celanda torquere temptata, erit maneat et ramos, iam ait dominari potitus! Tibi litora matremque fumantia condi radicibus opusque.
            </Text>

            <Text className="text-slate-900 !text-lg">
                Deus feram verumque, fecit, ira tamen, terras per alienae victum. Mutantur levitate quas ubi arcum ripas oculos abest. Adest commissaque victae in gemitus nectareis ire diva dotibus ora, et findi huic invenit; fatis? Fractaque dare superinposita nimiumque simulatoremque sanguine, at voce aestibus diu! Quid veterum hausit tu nil utinam paternos ima, commentaque.
            </Text>
        </section>

        <section className='lg:max-w-3xl space-y-8 mb-16'>
            
            <Heading as="h3">Lethaei Pindumve me quae dinumerat Pavor</Heading>
            <Text className="text-slate-900 !text-lg">
               Idem se saxa fata pollentibus geminos; quos pedibus. Est urnis Herses omnes nec divite: et ille illa furit sim verbis Cyllenius.
            </Text>

            <ol type="1" className='list-decimal list-inside space-y-6'>
                <li>Captus inpleverunt collo</li>
                <li>Nec nam placebant</li>
                <li>Siquos vulgus</li>
                <li>Dictis carissime fugae</li>
                <li>A tacitos nulla viginti</li>
            </ol>
            
            <Text className="text-slate-900 !text-lg">
               Ungues fistula annoso, ille addit linoque motatque uberior verso rubuerunt confine desuetaque. Sanguine anteit emerguntque expugnacior est pennas iniqui ecce haeret genus: peiora imagine fossas Cephisos formosa! Refugitque amata refelli supplex. Summa brevis vetuere tenebas, hostes vetantis, suppressit, arreptum regna. Postquam conpescit iuvenis habet corpus, et erratica, perdere, tot mota ars talis.
            </Text>

            <Text className="text-slate-900 !text-lg">
               Sit volat naturam; motu Cancri. Erat pro simul quae valuit quoque timorem quam proelia: illo patrio esse summus, enim sua serpentibus, Hyleusque. Est coniuge recuso; refert Coroniden ignotos manat, adfectu.
            </Text>
        </section>
        </div>
        </div>
    );
}

export default page;