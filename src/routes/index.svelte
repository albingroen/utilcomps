<script lang="ts">
	import ComponentSection from '../components/ComponentSection.svelte';
	import {
		Button,
		ButtonGroup,
		Checkbox,
		Content,
		Error,
		Select,
		Spinner,
		Stack,
		Text,
		TextInput,
		tailwindConfig,
		Divider,
		Panel,
		PanelContent,
		Table,
		Modal,
		Tabs,
		Tab
	} from '$lib/index';
	import { setup, tw } from 'twind';
	import HoverCard from '$lib/HoverCard.svelte';
	import HoverCardTrigger from '../components/HoverCardTrigger.svelte';

	setup(tailwindConfig);

	let selectValue = undefined;
	let checkboxValue = false;
	let modalOpen = false;
	let activeTab = '1';
</script>

<svelte:head>
	<title>Utility Components</title>
</svelte:head>

<Content class={tw('flex items-center justify-center')}>
	<Stack class={tw('max-w-screen-sm')} align="start" spacing="large" direction="vertical">
		<ComponentSection header="Text">
			<Stack spacing="small" direction="vertical">
				<Text level="h1">The quick brown fox jumps over the lazy dog</Text>
				<Text level="h2">The quick brown fox jumps over the lazy dog</Text>
				<Text level="h3">The quick brown fox jumps over the lazy dog</Text>
				<Text level="h4">The quick brown fox jumps over the lazy dog</Text>
				<Text level="h5">The quick brown fox jumps over the lazy dog</Text>
				<Text>The quick brown fox jumps over the lazy dog</Text>
			</Stack>
		</ComponentSection>

		<ComponentSection header="HoverCard">
			<HoverCard trigger={HoverCardTrigger}>
				<Panel rounded>
					<PanelContent>
						<Button color="primary">Follow user</Button>
					</PanelContent>
				</Panel>
			</HoverCard>
		</ComponentSection>

		<ComponentSection header="Button">
			<Stack spacing="small">
				<Button>Default button</Button>
				<Button color="primary">Primary button</Button>
				<Button color="danger">Danger button</Button>
				<Button color="warning">Warning button</Button>
			</Stack>
		</ComponentSection>

		<ComponentSection header="ButtonGroup">
			<ButtonGroup>
				<Button>Start</Button>
				<Button>Center</Button>
				<Button>End</Button>
			</ButtonGroup>
		</ComponentSection>

		<ComponentSection header="Select">
			<Select
				block
				options={[
					{ value: undefined, label: 'Select an option' },
					{ value: '1', label: 'Option 1' },
					{ value: '2', label: 'Option 2' },
					{ value: '3', label: 'Option 3' }
				]}
				handleChange={(newValue) => {
					selectValue = newValue;
				}}
				value={selectValue}
			/>
		</ComponentSection>

		<ComponentSection header="TextInput">
			<TextInput
				handleChange={() => undefined}
				placeholder="john@doe.com"
				type="email"
				label="Email"
				required
			/>

			<TextInput handleChange={() => undefined} type="password" label="Password" required />
		</ComponentSection>

		<ComponentSection header="Checkbox">
			<Checkbox
				checked={checkboxValue}
				handleChange={(newValue) => {
					checkboxValue = newValue;
				}}
				label="Accept terms & conditions"
				id="checkbox"
			/>
		</ComponentSection>

		<ComponentSection header="Spinner">
			<Spinner />
		</ComponentSection>

		<ComponentSection header="Panel">
			<Panel rounded>
				<PanelContent>
					<Text>Panel content</Text>
				</PanelContent>
			</Panel>
		</ComponentSection>

		<ComponentSection header="Tabs">
			<Tabs
				{activeTab}
				handleChange={(newTab) => {
					activeTab = newTab;
				}}
				tabs={[
					{ header: 'Tab 1', key: '1' },
					{ header: 'Tab 2', key: '2' }
				]}
			>
				{#if activeTab === '1'}
					<Tab>
						<Panel rounded class={tw('!rounded-tr-none')}>
							<PanelContent>
								<Text>Panel content 1</Text>
							</PanelContent>
							<PanelContent>
								<Text>Panel content 2</Text>
							</PanelContent>
						</Panel>
					</Tab>
				{:else if activeTab === '2'}
					<Tab>
						<Panel rounded class={tw('!rounded-tr-none')}>
							<PanelContent>
								<Text>Panel content 3</Text>
							</PanelContent>
							<PanelContent>
								<Text>Panel content 4</Text>
							</PanelContent>
						</Panel>
					</Tab>
				{/if}
			</Tabs>
		</ComponentSection>

		<ComponentSection header="Divider">
			<Divider />
		</ComponentSection>

		<ComponentSection header="Table">
			<Table
				columns={[
					{ header: 'Name', dataIndex: 'name' },
					{ header: 'Email address', dataIndex: 'email' },
					{ header: 'Age', dataIndex: 'age' }
				]}
				rows={[
					{ name: 'John Doe', email: 'john@doe.com', age: 35 },
					{ name: 'Jane Doe', email: 'jane@doe.com', age: 34 }
				]}
			/>
		</ComponentSection>

		<ComponentSection header="Modal">
			<Button
				handleClick={() => {
					modalOpen = true;
				}}>Open modal</Button
			>

			{#if modalOpen}
				<Modal
					header="Modal header"
					description="This is the description of the modal"
					handleClose={() => {
						modalOpen = false;
					}}
				>
					<Button
						block
						handleClick={() => {
							modalOpen = false;
						}}>Close modal</Button
					>
				</Modal>
			{/if}
		</ComponentSection>

		<ComponentSection header="Error">
			<Error>Failed to fetch information from resource</Error>
		</ComponentSection>
	</Stack>
</Content>
