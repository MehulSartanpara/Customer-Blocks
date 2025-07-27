import {
  Image,
  InlineLayout,
  TextBlock,
  View,
  reactExtension,
  SkeletonImage,
  SkeletonText,
  useSettings
} from '@shopify/ui-extensions-react/customer-account';

export default reactExtension(
  'customer-account.order-status.block.render',
  () => <Extension />,
);

function Extension() {
  const {image_one, title_one, image_two, title_two, image_three, title_three, image_width, title_size, title_color, title_emphasis } = useSettings();
  return (
    <InlineLayout columns={['33.33%', '33.33%', '33.33%']} inlineAlignment={"center"}>
      <View padding={["none","tight", "none", "tight"]} inlineAlignment={"center"}>
        <InlineLayout padding={["base", "none"]} columns={ image_width ? image_width : 90 }>
          { image_one ?
            <Image aspectRatio=" 1 / 1" source={`${image_one ? image_one : '' }`} fit="contain"/>
          :
            <SkeletonImage aspectRatio="1"/>
          }
        </InlineLayout>
        <TextBlock inlineAlignment="center" appearance={`${title_color ? title_color : "info"}`} size={ title_size ? title_size : 'base'} emphasis={ title_emphasis ? title_emphasis : 'bold' }>
          { title_one ?
            title_one ? title_one : ''
          :
            <><SkeletonText size="small" inlineSize="base" /><SkeletonText size="extraSmall" inlineSize="base" /></>
          }
        </TextBlock>
      </View>
      <View padding={["none","tight", "none", "tight"]} inlineAlignment={"center"}>
        <InlineLayout padding={["base", "none"]} columns={ image_width ? image_width : 90 }>
          { image_two ?
            <Image aspectRatio=" 1 / 1" source={`${image_two ? image_two : '' }`} fit="contain"/>
          :
            <SkeletonImage aspectRatio="1"/>
          }
        </InlineLayout>
        <TextBlock inlineAlignment="center" appearance={`${title_color ? title_color : "info"}`} size={ title_size ? title_size : 'base'} emphasis={ title_emphasis ? title_emphasis : 'bold' }>
          { title_two ?
            title_two ? title_two : ''
          :
            <><SkeletonText size="small" inlineSize="base" /><SkeletonText size="extraSmall" inlineSize="base" /></>
          }
        </TextBlock>
      </View>
      <View padding={["none","tight", "none", "tight"]} inlineAlignment={"center"}>
        <InlineLayout padding={["base", "none"]} columns={ image_width ? image_width : 90 }>
          { image_three ?
            <Image aspectRatio=" 1 / 1" source={`${image_three ? image_three : '' }`} fit="contain"/>
          :
            <SkeletonImage aspectRatio="1"/>
          }
        </InlineLayout>
        <TextBlock inlineAlignment="center" appearance={`${title_color ? title_color : "info"}`} size={ title_size ? title_size : 'base'} emphasis={ title_emphasis ? title_emphasis : 'bold' }>
          { title_three ?
            title_three ? title_three : ''
          :
            <><SkeletonText size="small" inlineSize="base" /><SkeletonText size="extraSmall" inlineSize="base" /></>
          }
        </TextBlock>
      </View>
    </InlineLayout>
  );
}