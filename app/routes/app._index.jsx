import {
  Page,
  Layout,
  Card,
  Banner,
  Text,
  Button,
  BlockStack,
  MediaCard,
  InlineStack,
  Link,
  Box
} from '@shopify/polaris';
import { TitleBar } from '@shopify/app-bridge-react';
import { useState, useEffect } from 'react';
import { useLoaderData, useFetcher } from '@remix-run/react';
import { json } from '@remix-run/node';
import { authenticate } from '../shopify.server';
import { isBannerDismissed, dismissBanner } from './utils/banner.server';

export const loader = async ({ request }) => {
  const { session } = await authenticate.admin(request);
  const dismissed = await isBannerDismissed(session.shop);
  return json({ dismissed });
};

export const action = async ({ request }) => {
  const { session } = await authenticate.admin(request);
  await dismissBanner(session.shop);
  return json({ success: true });
};

export default function Index() {
  const { dismissed } = useLoaderData();
  const [bannerVisible, setBannerVisible] = useState(false);

  useEffect(() => {
    setBannerVisible(!dismissed);
  }, [dismissed]);

  const fetcher = useFetcher();
  const handleDismiss = () => {
    setBannerVisible(false);
    fetcher.submit(null, {
      method: "post",
      action: ".",
    });
  };
  return (
    <Page title="Customer Accounts Blocks">
      <TitleBar title="Customer Accounts Blocks" />
      <BlockStack gap="400">
        {bannerVisible && (
          <Banner onDismiss={handleDismiss}status="info">
            <p>
              Your store must turn on customer accounts to use our app.{' '}
              <Link
                onClick={() =>
                  window.open(
                    "https://admin.shopify.com/store/m10-developer/settings/customer_accounts",
                    "_blank"
                  )
                }
              >Go to settings</Link>
            </p>
          </Banner>
          // <Banner
          //   title="Your store must turn on customer accounts to use our app."
          //   status="info"
          //   onDismiss={handleDismiss}
          // >
          //   <Button
          //     plain
          //     onClick={() =>
          //       window.open(
          //         "https://admin.shopify.com/store/m10-developer/settings/customer_accounts",
          //         "_blank"
          //       )
          //     }
          //   >
          //     Go to settings
          //   </Button>
          // </Banner>
        )}
        <Layout>
          <Layout.Section>
            <Card>
              <BlockStack gap="300">
                <Text variant="headingMd" as="h2">
                  Let’s get started with Customer Account Blocks
                </Text>
                <Text as="p" variant="bodyMd">
                  Go to your <strong>Online store settings</strong> and make sure <strong>Customer Accounts</strong> are enabled.
                  <br />
                  Then, navigate to <strong>Checkout → Customer Account</strong> and click Add Block to add your custom blocks from this app.
                </Text>
                <InlineStack>
                  <Button
                    variant="primary"
                    onClick={() =>
                      window.open(
                        "https://admin.shopify.com/store/m10-developer/settings/checkout",
                        "_blank"
                      )
                    }
                  >
                    Open Settings
                  </Button>
                </InlineStack>
              </BlockStack>
            </Card>
          </Layout.Section>

          <Layout.Section>
            <MediaCard
              title="Customize the customer experience"
              primaryAction={{
                content: 'See how it works',
                onAction: () => {}, // Replace with a handler or route
              }}
              description="Enhance the customer account area with additional fields or sections. Deliver a more personalized experience."
              size="small"
            >
              <img
                alt=""
                width="100%"
                height="100%"
                style={{
                  objectFit: 'cover',
                  objectPosition: 'center',
                }}
                src="https://burst.shopifycdn.com/photos/business-woman-smiling-in-office.jpg?width=1850"
              />
            </MediaCard>
          </Layout.Section>

          <Layout.Section>
            <Card>
              <BlockStack gap="200">
                <Text variant="headingSm" as="h3">Your review matters!</Text>
                <Text variant="bodyMd">
                  Help support us in making the Customer Accounts Blocks app even better.
                </Text>
                <InlineStack>
                  <Button variant="primary">Leave review</Button>
                </InlineStack>
              </BlockStack>
            </Card>
          </Layout.Section>

          <Layout.Section>
            <Card>
              <BlockStack gap="200">
                <Text variant="headingSm" as="h3">Need help or have a feature request?</Text>
                <Text variant="bodyMd">
                  Contact our support team. We’re ready to help!
                </Text>
                <InlineStack>
                  <Button variant="primary">Contact us</Button>
                </InlineStack>
              </BlockStack>
            </Card>
          </Layout.Section>
        </Layout>
      </BlockStack>
      <Box paddingBlockEnd="600" /> {/* Adds vertical padding at the bottom */}
    </Page>
  );
}
