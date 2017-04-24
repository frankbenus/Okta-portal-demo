// This is a configuration file, branche this file for any POC or demo org
var oktaOrgUrl 			= 'https://dev-484122.oktapreview.com';						// Url of the org in Okta (full url)
var appUrl 				= 'http://example.okta-demo.nl';							// The url provide by frank.benus@okta.com (please provide Okta API token when you request a url) 
var apiProxyUrl 		= 'http://54.202.118.73/example-proxy.asp'					// The url for the API proxy, contact frank.benus@okta.com
var oidcOktaAppId 		= '0oaa89kffsPd8FFXK0h7';									// Okta app id for OIDC app
var oidcClientId 		= 'tFx9NRuwt7CbDX34D8KG';									// Client id for OIDC app
var debugLogging		= true														// float the logs with debug data

// BE AWARE: when set to true, this will cause changes in the Okta org
var setupOrgInPreFlight = false;													// Create attributes, groups and policies for use cases automaticly

// Use cases and features
	//Self service and preferences
	var usecaseEnableHighRiskFeatures 	= false;				//Allow users to enable high risk apps and enable mfa for them
	var usercaseEnablePreferMfa			= false;				//Allow users to manually add a elevated level of security via MFA

	//Registration flows (not yet supported)
	var openRegisteration = false; 								// All users can use a open registration with activation flow
	var adminApprovedRegistration = false;						// A user needs to be approved by an admin first

	//Authentication (not yet supported)
	var socialAuth = false;										// Authenticate with facebook, linkedin or google plus


// Customization options
	// Customization and theme
	// Logo (leave empty to hide)
	var	appLogo = '' 	

	//Colors within the app
	var useCustomColors = false;								// use the colors in the colors object, default is Okta theme (set param to false)
	var colors = {												// Set hex color codes and enable custom colors, do not change the keys
		'--background-color': 		'#FFFFFF',
		'--color-primary': 			'#D62027', 
		'--color-secundary': 		'#333333',
		'--color-tertiary': 		'#F5F5F5',
		'--text-color-content': 	'#333333',
		'--text-color-header': 		'#FFFFFF',
		'--message-error-bg': 		'#FF3900',
		'--message-error-text': 	'#FFFFFF',
		'--message-warning-bg': 	'#FFBA00',
		'--message-warning-text': 	'#FFFFFF',
		'--message-success-bg': 	'#4CBF9C',
		'--message-success-text': 	'#FFFFFF'	
	}
	var label = {
		'lbl_app_title': 				'Okta Example', 	// Page title
		'lbl_app_name': 				'Example app'	 	// Main name of the app
	};

// Settings for org
	// Group names for account related groups, these need to be available in Okta org
	var sGroupAccountsApproved 	= 'Portal: Approved accounts';				// Group for requested accounts that are approved
	var sGroupAccountsEveryOne 	= 'Portal: Everyone';						// Group for all registered portal users
	var sGroupAccountsFreeTier 	= 'Portal: Free tier accounts';				// Group with users with a free tier account
	var sGroupAccountsPaid 		= 'Portal: Paid accounts';					// Group for paying accounts
	var sGroupAccountsRequested = 'Portal: Requested accounts';				// Group with accounts not yet approved
	var sGroupAccountTrial 		= 'Portal: Trial accounts';					// Group with trial accounts
	var sGroupMfaPrefered		= 'Portal: Prefer MFA';						// Group with users that want MFA sign-on policy
	var sGroupHighRiskFeatures	= 'Portal: Enable high risk features';		// Group with users that enabled high risk features


// Todo on preflight:
// Check MFA policies for MFA options
// Check for group rules
