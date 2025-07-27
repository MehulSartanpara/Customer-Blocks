import {
  reactExtension,
  Image,
  Text,
  Tag,
  Button,
  useSettings,
  InlineLayout,
  View,
  BlockStack,
  InlineStack,
} from "@shopify/ui-extensions-react/customer-account";

export default reactExtension(
  "customer-account.profile.block.render",
  () => <PromotionBanner />
);

function PromotionBanner() {
  const {
    image_column_width,
    image_url,
    heading,
    tag_1,
    tag_2,
    tag_3,
    multiline_content,
    button_1_label,
    button_1_url,
    button_2_label,
    button_2_url,
  } = useSettings();

  // const image_column_width = 40;
  // const image_url =
  //   "https://burst.shopifycdn.com/photos/business-woman-smiling-in-office.jpg?width=1850";
  // const heading = "Demo Image with text";
  // const tag_1 = "Demo";
  // const tag_2 = "New";
  // const tag_3 = "Sale";
  // const multiline_content = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.";
  // const button_1_label = "Button";
  // const button_1_url = "/start";
  // const button_2_label = "Secondary button";
  // const button_2_url = "/learn-more";

  return (
    <InlineLayout columns={[`${image_column_width}%`, "fill"]} spacing="loose">
      {/* Image (Left) */}
      <View>
        <Image
          source={image_url}
          description="Promo image"
          border="base"
          borderRadius="base"
          fit="cover"
        />
      </View>

      {/* Content (Right) */}
      <View>
        <BlockStack spacing="base">
          {/* Tags */}
          <InlineStack spacing="tight">
            {tag_1 && <Tag>{tag_1}</Tag>}
            {tag_2 && <Tag>{tag_2}</Tag>}
            {tag_3 && <Tag>{tag_3}</Tag>}
          </InlineStack>

          {/* Heading */}
          {heading && (
            <Text size="large" emphasis="bold">
              {heading}
            </Text>
          )}

          {/* Bullet List */}
          <InlineStack spacing="base">
            {multiline_content && <Text>{multiline_content}</Text>}
          </InlineStack>

          {/* Buttons */}
          <InlineStack spacing="base">
            {button_1_label && button_1_url && (
              <Button to={button_1_url} appearance="primary">
                {button_1_label}
              </Button>
            )}
            {button_2_label && button_2_url && (
              <Button to={button_2_url} appearance="secondary">
                {button_2_label}
              </Button>
            )}
          </InlineStack>
        </BlockStack>
      </View>
    </InlineLayout>
  );
}
