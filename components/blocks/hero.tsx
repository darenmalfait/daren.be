import { Container, Grid, H2 } from '@daren/ui-components'

import { motion } from 'framer-motion'
import type { RichTextType, Template } from 'tinacms'

import { imageSchema, portableTextSchema } from '../../.tina/schema/objects'
import { Image } from '../../components/common/image'
import type { Block, Image as ImageType } from '../../lib/types/cms'
import { buildSrc, getLowQualityUrlFor } from '../../lib/utils/cloudinary'
import { PortableText } from '../common/portable-text'

const childVariants = {
  initial: { opacity: 0, y: 25 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

const Hero = ({
  parentField = '',
  image,
  text,
  title,
}: Block & {
  image?: ImageType
  text?: RichTextType
  title?: string
}) => {
  return (
    <Grid as="header" className="items-start pt-24 h-auto lg:pb-12 lg:my-12">
      <Container size="medium">
        <div className="relative pt-6 pb-8 w-full text-center lg:py-8 lg:text-left">
          <motion.div
            className="flex flex-col flex-auto justify-start lg:w-1/2 xl:pr-16"
            initial="initial"
            animate="visible"
            variants={{
              initial: { opacity: 0 },
              visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
            }}
          >
            <motion.div variants={childVariants} className="space-y-6">
              <H2
                data-tinafield={`${parentField}.title`}
                className="font-black"
              >
                {title}
              </H2>
            </motion.div>

            {text && (
              <motion.div
                data-tinafield={`${parentField}.text`}
                variants={childVariants}
                className="mt-3 mb-12 prose prose-lg dark:prose-invert"
              >
                <PortableText content={text} />
              </motion.div>
            )}
          </motion.div>

          {image && (
            <motion.div
              data-tinafield={`${parentField}.image`}
              initial={{ scale: 1.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.75 }}
              className="flex relative items-center mx-auto w-full sm:w-72 md:h-96 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 lg:h-full"
            >
              <Image
                className="mb-12 rounded-xl"
                blurDataURL={getLowQualityUrlFor(image.src)}
                src={buildSrc(image.src, {
                  width: 500,
                })}
                loading="eager"
                alt={image.alt}
              />
            </motion.div>
          )}
        </div>
      </Container>
    </Grid>
  )
}

const heroBlockSchema: Template = {
  name: 'hero',
  label: 'Hero',
  ui: {
    previewSrc: '/blocks/hero.png',
    defaultItem: {
      title: 'Here is a title',
      text: 'Phasellus scelerisque, libero eu finibus rutrum, risus risus accumsan libero, nec molestie urna dui a leo.',
    },
  },
  fields: [
    {
      type: 'string',
      label: 'Title',
      name: 'title',
    },
    portableTextSchema,
    imageSchema,
  ],
}

export { Hero, heroBlockSchema }
