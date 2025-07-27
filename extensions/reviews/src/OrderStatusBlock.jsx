import {
  Image,
  InlineLayout,
  Text,
  TextBlock,
  View,
  reactExtension,
  useSettings
} from '@shopify/ui-extensions-react/customer-account';

export default reactExtension(
  'customer-account.order-status.block.render',
  () => <Extension />,
);

function Extension() {

  const {reviewer_img_1, reviewer_name_1, reviewer_subtitle_1, review_title_1, review_star_img_1, review_description_1,
        reviewer_img_2, reviewer_name_2, reviewer_subtitle_2, review_title_2, review_star_img_2, review_description_2,
        reviewer_img_3, reviewer_name_3, reviewer_subtitle_3, review_title_3, review_star_img_3, review_description_3} = useSettings();

  return (
    <>
      {
        reviewer_img_1 && reviewer_name_1 && review_title_1 && review_star_img_1 && review_description_1 ? 
        <>
          <InlineLayout columns={[80, 'fill']} padding="loose" border={'base'} cornerRadius={'base'}>
            <View>
              {
                reviewer_img_1 ?
                  <View padding={["none", "none", "extraTight", "none"]} border={'base'} cornerRadius={'base'}>
                    <Image source={reviewer_img_1} cornerRadius={'base'} fit="cover" aspectRatio={'1/1'} />
                  </View>
                  : ''
              }
              
              {
                reviewer_name_1 ?
                  <View padding={["none", "none", "none", "none"]} inlineAlignment="center">
                    <Text appearance="base" size='base' emphasis="bold">{reviewer_name_1}</Text>
                  </View>
                  : ''
              }
              
              {
                reviewer_subtitle_1 ?
                  <View inlineAlignment="center">
                    <Text appearance="subdued" size="small">{reviewer_subtitle_1}</Text>
                  </View>
                  : ''
              }
              
            </View>
            <View padding={["none","none","none", "base"]}>
              {
                review_title_1 ?
                  <View padding={["none","none","extraTight","none"]}>
                    <Text appearance="base" size="large" emphasis='bold'>{review_title_1}</Text>
                  </View>
                  : ''
              }
              
              {
                review_star_img_1 ?
                  <View padding={["none","none","base","none"]}>
                    <Image source={review_star_img_1} fit="cover" />
                  </View>
                  : ''
              }
              {
                review_description_1 ? 
                  <View>
                    <TextBlock appearance="subdued" size="base">{review_description_1}</TextBlock>
                  </View>
                  : ''
              }
            </View>
          </InlineLayout>
          <View padding="base"></View>
        </>
        : ''
      }

      {
        reviewer_img_2 && reviewer_name_2 && review_title_2 && review_star_img_2 && review_description_2 ? 
        <>
          <InlineLayout columns={[80, 'fill']} padding="loose" border={'base'} cornerRadius={'base'}>
            <View>
              {
                reviewer_img_2 ?
                  <View padding={["none", "none", "extraTight", "none"]} border={'base'} cornerRadius={'base'}>
                    <Image source={reviewer_img_2} cornerRadius={'base'} fit="cover" aspectRatio={'1/1'} />
                  </View>
                  : ''
              }
              
              {
                reviewer_name_2 ?
                  <View padding={["none", "none", "none", "none"]} inlineAlignment="center">
                    <Text appearance="base" size='base' emphasis="bold">{reviewer_name_2}</Text>
                  </View>
                  : ''
              }
              
              {
                reviewer_subtitle_2 ?
                  <View inlineAlignment="center">
                    <Text appearance="subdued" size="small">{reviewer_subtitle_2}</Text>
                  </View>
                  : ''
              }
              
            </View>
            <View padding={["none","none","none", "base"]}>
              {
                review_title_2 ?
                  <View padding={["none","none","extraTight","none"]}>
                    <Text appearance="base" size="large" emphasis='bold'>{review_title_2}</Text>
                  </View>
                  : ''
              }
              
              {
                review_star_img_2 ?
                  <View  padding={["none","none","base","none"]}>
                    <Image source={review_star_img_2} fit="cover" />
                  </View>
                  : ''
              }
              {
                review_description_2 ? 
                  <View>
                    <TextBlock appearance="subdued" size="base">{review_description_2}</TextBlock>
                  </View>
                  : ''
              }
            </View>
          </InlineLayout>
          <View padding="base"></View>
        </>
        : ''
      }

      {
        reviewer_img_3 && reviewer_name_3 && review_title_3 && review_star_img_3 && review_description_3 ? 
        <>
          <InlineLayout columns={[80, 'fill']} padding="loose" border={'base'} cornerRadius={'base'}>
            <View>
              {
                reviewer_img_3 ?
                  <View padding={["none", "none", "extraTight", "none"]} border={'base'} cornerRadius={'base'}>
                    <Image source={reviewer_img_3} cornerRadius={'base'} fit="cover" aspectRatio={'1/1'} />
                  </View>
                  : ''
              }
              
              {
                reviewer_name_3 ?
                  <View padding={["none", "none", "none", "none"]} inlineAlignment="center">
                    <Text appearance="base" size='base' emphasis="bold">{reviewer_name_3}</Text>
                  </View>
                  : ''
              }
              
              {
                reviewer_subtitle_3 ?
                  <View inlineAlignment="center">
                    <Text appearance="subdued" size="small">{reviewer_subtitle_3}</Text>
                  </View>
                  : ''
              }
              
            </View>
            <View padding={["none","none","none", "base"]}>
              {
                review_title_3 ?
                  <View padding={["none","none","extraTight","none"]}>
                    <Text appearance="base" size="large" emphasis='bold'>{review_title_3}</Text>
                  </View>
                  : ''
              }
              
              {
                review_star_img_3 ?
                  <View  padding={["none","none","base","none"]}>
                    <Image source={review_star_img_3} fit="cover" />
                  </View>
                  : ''
              }
              {
                review_description_3 ? 
                  <View>
                    <TextBlock appearance="subdued" size="base">{review_description_3}</TextBlock>
                  </View>
                  : ''
              }
            </View>
          </InlineLayout>
          <View padding="base"></View>
        </>
        : ''
      }
    </>
  );
}