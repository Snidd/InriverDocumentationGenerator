export class ExampleXml {
    
    get():string {
        return `<Model>
	<Languages>
		<Language masterLanguage="1">en</Language>
		<Language>nl</Language>
		<Language>fr</Language>
		<Language>de</Language>
		<Language>sv</Language>
	</Languages>
	<ServerSettings>
		<ServerSetting>
			<Key>MASTER_LANGUAGE</Key>
			<Value>
				<![CDATA[en]]>
			</Value>
		</ServerSetting>
		<ServerSetting>
			<Key>PRINT_PLUGIN_MODEL_LANGUAGE</Key>
			<Value>
				<![CDATA[en]]>
			</Value>
		</ServerSetting>
		<ServerSetting>
			<Key>SERVER_NAME</Key>
			<Value>
				<![CDATA[inRiver Demo Server v2]]>
			</Value>
		</ServerSetting>
		<ServerSetting>
			<Key>INTEGRATION_ENABLED</Key>
			<Value>
				<![CDATA[true]]>
			</Value>
		</ServerSetting>
		<ServerSetting>
			<Key>INTEGRATION_QUEUE_NAME</Key>
			<Value>
				<![CDATA[inriver_outbound_integration_queue]]>
			</Value>
		</ServerSetting>
		<ServerSetting>
			<Key>DEMO_VERSION</Key>
			<Value>
				<![CDATA[6.3.11]]>
			</Value>
		</ServerSetting>
		<ServerSetting>
			<Key>DEFAULT_CREATE_ENTITIES</Key>
			<Value>
				<![CDATA[Product,Item,Resource,Assortment,Channel,Specification,ChannelNode,Publication,Section,Bundle,Task,Application,Celebrity,Activity,Milestone,MediaChannel,Promotion,Staff,Budget]]>
			</Value>
		</ServerSetting>
		<ServerSetting>
			<Key>ASSORTMENT_STRUCTURE_ROOTS</Key>
			<Value>
				<![CDATA[2744,2745,2822]]>
			</Value>
		</ServerSetting>
		<ServerSetting>
			<Key>LIGHTBOARD_IMAGE_CONFIGURATION</Key>
			<Value>
				<![CDATA[Thumbnail]]>
			</Value>
		</ServerSetting>
		<ServerSetting>
			<Key>ADMINISTRATION_ROOT_URL</Key>
			<Value>
				<![CDATA[http://localhost/admin/]]>
			</Value>
		</ServerSetting>
		<ServerSetting>
			<Key>PRINT_AVAILABLE_ENTITYTYPES</Key>
			<Value>
				<![CDATA[Product,Item,Resource,Bundle]]>
			</Value>
		</ServerSetting>
		<ServerSetting>
			<Key>SPECIFICATION_ADDITIONAL_DATA_CVL</Key>
			<Value>
				<![CDATA[]]>
			</Value>
		</ServerSetting>
		<ServerSetting>
			<Key>SPECIFICATION_ADDITIONAL_DATA_MULTIVALUE</Key>
			<Value>
				<![CDATA[false]]>
			</Value>
		</ServerSetting>
		<ServerSetting>
			<Key>SPECIFICATION_ADDITIONAL_DATA_IN_HTML</Key>
			<Value>
				<![CDATA[false]]>
			</Value>
		</ServerSetting>
		<ServerSetting>
			<Key>PRINT_AUTHENTICATION_ENABLED</Key>
			<Value>
				<![CDATA[false]]>
			</Value>
		</ServerSetting>
		<ServerSetting>
			<Key>AUTHENTICATION_TYPE</Key>
			<Value>
				<![CDATA[Forms]]>
			</Value>
		</ServerSetting>
		<ServerSetting>
			<Key>SMTP_SERVER</Key>
			<Value>
				<![CDATA[relay.inside.inriver.com]]>
			</Value>
		</ServerSetting>
		<ServerSetting>
			<Key>SMTP_PORT</Key>
			<Value>
				<![CDATA[25]]>
			</Value>
		</ServerSetting>
		<ServerSetting>
			<Key>SMTP_SEND_USER</Key>
			<Value>
				<![CDATA[demoserver@inriver.com]]>
			</Value>
		</ServerSetting>
		<ServerSetting>
			<Key>SMTP_PASSWORD</Key>
			<Value>
				<![CDATA[]]>
			</Value>
		</ServerSetting>
		<ServerSetting>
			<Key>SMTP_SEND_USER_NAME</Key>
			<Value>
				<![CDATA[inRiver Notification]]>
			</Value>
		</ServerSetting>
		<ServerSetting>
			<Key>SEARCH_SUGGESTION_FIELDS</Key>
			<Value>
				<![CDATA[ResourceFilename]]>
			</Value>
		</ServerSetting>
		<ServerSetting>
			<Key>SEARCH_SUGGESTION_COUNT</Key>
			<Value>
				<![CDATA[5]]>
			</Value>
		</ServerSetting>
		<ServerSetting>
			<Key>SEARCH_SUGGESTION_MAX_LENGTH</Key>
			<Value>
				<![CDATA[50]]>
			</Value>
		</ServerSetting>
		<ServerSetting>
			<Key>CHANNEL_FILTER</Key>
			<Value>
				<![CDATA[]]>
			</Value>
		</ServerSetting>
		<ServerSetting>
			<Key>QUICK_SEARCH_MAX_RESULT</Key>
			<Value>
				<![CDATA[100]]>
			</Value>
		</ServerSetting>
		<ServerSetting>
			<Key>MERCHANDISING_ENTITIES</Key>
			<Value>
				<![CDATA[Activity,Bundle]]>
			</Value>
		</ServerSetting>
		<ServerSetting>
			<Key>MAX_NUMBER_OF_INLINE_CVL_VALUES</Key>
			<Value>
				<![CDATA[8]]>
			</Value>
		</ServerSetting>
		<ServerSetting>
			<Key>PLANNER_ENTITYTYPES</Key>
			<Value>
				<![CDATA[Activity,Milestone,MediaChannel,Staff,Budget,Promotion]]>
			</Value>
		</ServerSetting>
		<ServerSetting>
			<Key>PLANNER_MILESTONE_ENTITYTYPES</Key>
			<Value>
				<![CDATA[Milestone,MediaChannel]]>
			</Value>
		</ServerSetting>
		<ServerSetting>
			<Key>PLANNER_TOOLTIPS_ENABLED</Key>
			<Value>
				<![CDATA[true]]>
			</Value>
		</ServerSetting>
		<ServerSetting>
			<Key>PLANNER_INTERACTIVE_EDITING_ENABLED</Key>
			<Value>
				<![CDATA[true]]>
			</Value>
		</ServerSetting>
		<ServerSetting>
			<Key>PLANNER_COLORS</Key>
			<Value>
				<![CDATA[]]>
			</Value>
		</ServerSetting>
		<ServerSetting>
			<Key>SHOW_WEEKS_IN_DATE_PICKER</Key>
			<Value>
				<![CDATA[true]]>
			</Value>
		</ServerSetting>
		<ServerSetting>
			<Key>PROTECT_CORE</Key>
			<Value>
				<![CDATA[]]>
			</Value>
		</ServerSetting>
		<ServerSetting>
			<Key>SMTP_USERNAME</Key>
			<Value>
				<![CDATA[]]>
			</Value>
		</ServerSetting>
	</ServerSettings>
	<CVLs>
		<CVL>
			<Id>ActivityBusinessArea</Id>
			<DataType>String</DataType>
			<ParentId />
			<CustomValueList>False</CustomValueList>
		</CVL>
		<CVL>
			<Id>ActivityObjective</Id>
			<DataType>String</DataType>
			<ParentId />
			<CustomValueList>False</CustomValueList>
		</CVL>
		<CVL>
			<Id>ActivityResponsibleRole</Id>
			<DataType>String</DataType>
			<ParentId />
			<CustomValueList>False</CustomValueList>
		</CVL>
		<CVL>
			<Id>ActivitySize</Id>
			<DataType>String</DataType>
			<ParentId />
			<CustomValueList>False</CustomValueList>
		</CVL>
		<CVL>
			<Id>ActivityStatus</Id>
			<DataType>String</DataType>
			<ParentId />
			<CustomValueList>False</CustomValueList>
		</CVL>
		<CVL>
			<Id>ActivitySubBusinessArea</Id>
			<DataType>String</DataType>
			<ParentId />
			<CustomValueList>False</CustomValueList>
		</CVL>
		<CVL>
			<Id>ActivityType</Id>
			<DataType>String</DataType>
			<ParentId />
			<CustomValueList>False</CustomValueList>
		</CVL>
		<CVL>
			<Id>BudgetArea</Id>
			<DataType>String</DataType>
			<ParentId />
			<CustomValueList>False</CustomValueList>
		</CVL>
		<CVL>
			<Id>CampaignType</Id>
			<DataType>LocaleString</DataType>
			<ParentId />
			<CustomValueList>False</CustomValueList>
		</CVL>
		<CVL>
			<Id>Condition</Id>
			<DataType>LocaleString</DataType>
			<ParentId />
			<CustomValueList>False</CustomValueList>
		</CVL>
		<CVL>
			<Id>CuttingWidthin</Id>
			<DataType>String</DataType>
			<ParentId />
			<CustomValueList>False</CustomValueList>
		</CVL>
		<CVL>
			<Id>DAMClass</Id>
			<DataType>String</DataType>
			<ParentId />
			<CustomValueList>False</CustomValueList>
		</CVL>
		<CVL>
			<Id>DIYProductType</Id>
			<DataType>LocaleString</DataType>
			<ParentId />
			<CustomValueList>False</CustomValueList>
		</CVL>
		<CVL>
			<Id>FashionCare</Id>
			<DataType>LocaleString</DataType>
			<ParentId />
			<CustomValueList>False</CustomValueList>
		</CVL>
		<CVL>
			<Id>FashionIncludedBrand</Id>
			<DataType>String</DataType>
			<ParentId />
			<CustomValueList>False</CustomValueList>
		</CVL>
		<CVL>
			<Id>FashionMaterial</Id>
			<DataType>LocaleString</DataType>
			<ParentId />
			<CustomValueList>False</CustomValueList>
		</CVL>
		<CVL>
			<Id>FoodAllergens</Id>
			<DataType>LocaleString</DataType>
			<ParentId />
			<CustomValueList>False</CustomValueList>
		</CVL>
		<CVL>
			<Id>FoodMarks</Id>
			<DataType>LocaleString</DataType>
			<ParentId />
			<CustomValueList>False</CustomValueList>
		</CVL>
		<CVL>
			<Id>Gender</Id>
			<DataType>LocaleString</DataType>
			<ParentId />
			<CustomValueList>False</CustomValueList>
		</CVL>
		<CVL>
			<Id>GroupTask</Id>
			<DataType>String</DataType>
			<ParentId />
			<CustomValueList>True</CustomValueList>
		</CVL>
		<CVL>
			<Id>Industry</Id>
			<DataType>LocaleString</DataType>
			<ParentId />
			<CustomValueList>False</CustomValueList>
		</CVL>
		<CVL>
			<Id>ItemCapacity</Id>
			<DataType>String</DataType>
			<ParentId />
			<CustomValueList>False</CustomValueList>
		</CVL>
		<CVL>
			<Id>ItemSeason</Id>
			<DataType>LocaleString</DataType>
			<ParentId />
			<CustomValueList>False</CustomValueList>
		</CVL>
		<CVL>
			<Id>ItemStatus</Id>
			<DataType>LocaleString</DataType>
			<ParentId />
			<CustomValueList>False</CustomValueList>
		</CVL>
		<CVL>
			<Id>ItemType</Id>
			<DataType>String</DataType>
			<ParentId />
			<CustomValueList>False</CustomValueList>
		</CVL>
		<CVL>
			<Id>LawnMowerType</Id>
			<DataType>String</DataType>
			<ParentId />
			<CustomValueList>False</CustomValueList>
		</CVL>
		<CVL>
			<Id>ManufacturingProductType</Id>
			<DataType>LocaleString</DataType>
			<ParentId />
			<CustomValueList>False</CustomValueList>
		</CVL>
		<CVL>
			<Id>Market</Id>
			<DataType>LocaleString</DataType>
			<ParentId />
			<CustomValueList>False</CustomValueList>
		</CVL>
		<CVL>
			<Id>Media</Id>
			<DataType>LocaleString</DataType>
			<ParentId />
			<CustomValueList>False</CustomValueList>
		</CVL>
		<CVL>
			<Id>MediaChannel</Id>
			<DataType>String</DataType>
			<ParentId />
			<CustomValueList>False</CustomValueList>
		</CVL>
		<CVL>
			<Id>MediaChannelStatus</Id>
			<DataType>String</DataType>
			<ParentId />
			<CustomValueList>False</CustomValueList>
		</CVL>
		<CVL>
			<Id>MediaChannelTargetGroup</Id>
			<DataType>String</DataType>
			<ParentId />
			<CustomValueList>False</CustomValueList>
		</CVL>
		<CVL>
			<Id>MediaType</Id>
			<DataType>LocaleString</DataType>
			<ParentId />
			<CustomValueList>False</CustomValueList>
		</CVL>
		<CVL>
			<Id>Milestone</Id>
			<DataType>String</DataType>
			<ParentId />
			<CustomValueList>False</CustomValueList>
		</CVL>
		<CVL>
			<Id>MilestoneResponsibleRole</Id>
			<DataType>String</DataType>
			<ParentId />
			<CustomValueList>False</CustomValueList>
		</CVL>
		<CVL>
			<Id>MilestoneStatus</Id>
			<DataType>String</DataType>
			<ParentId />
			<CustomValueList>False</CustomValueList>
		</CVL>
		<CVL>
			<Id>MilestoneType</Id>
			<DataType>String</DataType>
			<ParentId />
			<CustomValueList>False</CustomValueList>
		</CVL>
		<CVL>
			<Id>Month</Id>
			<DataType>String</DataType>
			<ParentId />
			<CustomValueList>False</CustomValueList>
		</CVL>
		<CVL>
			<Id>ProductStatus</Id>
			<DataType>LocaleString</DataType>
			<ParentId />
			<CustomValueList>False</CustomValueList>
		</CVL>
		<CVL>
			<Id>PromotionOffer</Id>
			<DataType>String</DataType>
			<ParentId />
			<CustomValueList>False</CustomValueList>
		</CVL>
		<CVL>
			<Id>PromotionRestriction</Id>
			<DataType>String</DataType>
			<ParentId />
			<CustomValueList>False</CustomValueList>
		</CVL>
		<CVL>
			<Id>PromotionStatus</Id>
			<DataType>String</DataType>
			<ParentId />
			<CustomValueList>False</CustomValueList>
		</CVL>
		<CVL>
			<Id>Quarter</Id>
			<DataType>String</DataType>
			<ParentId />
			<CustomValueList>False</CustomValueList>
		</CVL>
		<CVL>
			<Id>RegionUsage</Id>
			<DataType>String</DataType>
			<ParentId />
			<CustomValueList>False</CustomValueList>
		</CVL>
		<CVL>
			<Id>ResourceApproval</Id>
			<DataType>String</DataType>
			<ParentId />
			<CustomValueList>False</CustomValueList>
		</CVL>
		<CVL>
			<Id>SourceMedia</Id>
			<DataType>String</DataType>
			<ParentId />
			<CustomValueList>False</CustomValueList>
		</CVL>
		<CVL>
			<Id>SourceMediaType</Id>
			<DataType>String</DataType>
			<ParentId />
			<CustomValueList>False</CustomValueList>
		</CVL>
		<CVL>
			<Id>SpecificationType</Id>
			<DataType>String</DataType>
			<ParentId />
			<CustomValueList>False</CustomValueList>
		</CVL>
		<CVL>
			<Id>StaffName</Id>
			<DataType>String</DataType>
			<ParentId />
			<CustomValueList>False</CustomValueList>
		</CVL>
		<CVL>
			<Id>StaffRole</Id>
			<DataType>String</DataType>
			<ParentId />
			<CustomValueList>False</CustomValueList>
		</CVL>
		<CVL>
			<Id>TaskStatus</Id>
			<DataType>String</DataType>
			<ParentId />
			<CustomValueList>False</CustomValueList>
		</CVL>
		<CVL>
			<Id>Territory</Id>
			<DataType>String</DataType>
			<ParentId />
			<CustomValueList>False</CustomValueList>
		</CVL>
		<CVL>
			<Id>Unit</Id>
			<DataType>String</DataType>
			<ParentId />
			<CustomValueList>False</CustomValueList>
		</CVL>
		<CVL>
			<Id>UsageRightsByChannel</Id>
			<DataType>String</DataType>
			<ParentId />
			<CustomValueList>False</CustomValueList>
		</CVL>
		<CVL>
			<Id>Users</Id>
			<DataType>String</DataType>
			<ParentId />
			<CustomValueList>True</CustomValueList>
		</CVL>
		<CVL>
			<Id>Weeks</Id>
			<DataType>String</DataType>
			<ParentId />
			<CustomValueList>False</CustomValueList>
		</CVL>
		<CVL>
			<Id>Year</Id>
			<DataType>String</DataType>
			<ParentId />
			<CustomValueList>False</CustomValueList>
		</CVL>
		<CVL>
			<Id>YesNo</Id>
			<DataType>String</DataType>
			<ParentId />
			<CustomValueList>False</CustomValueList>
		</CVL>
		<CVL>
			<Id>Brand</Id>
			<DataType>String</DataType>
			<ParentId>Industry</ParentId>
			<CustomValueList>False</CustomValueList>
		</CVL>
		<CVL>
			<Id>FoodAllergensDetailed</Id>
			<DataType>LocaleString</DataType>
			<ParentId>FoodAllergens</ParentId>
			<CustomValueList>False</CustomValueList>
		</CVL>
		<CVL>
			<Id>ImageAngle</Id>
			<DataType>LocaleString</DataType>
			<ParentId>Media</ParentId>
			<CustomValueList>False</CustomValueList>
		</CVL>
		<CVL>
			<Id>ImageOrientation</Id>
			<DataType>LocaleString</DataType>
			<ParentId>Media</ParentId>
			<CustomValueList>False</CustomValueList>
		</CVL>
		<CVL>
			<Id>ImageRes</Id>
			<DataType>LocaleString</DataType>
			<ParentId>Media</ParentId>
			<CustomValueList>False</CustomValueList>
		</CVL>
		<CVL>
			<Id>ItemVariant</Id>
			<DataType>LocaleString</DataType>
			<ParentId>Industry</ParentId>
			<CustomValueList>False</CustomValueList>
		</CVL>
		<CVL>
			<Id>MainCategory</Id>
			<DataType>LocaleString</DataType>
			<ParentId>Industry</ParentId>
			<CustomValueList>False</CustomValueList>
		</CVL>
		<CVL>
			<Id>TypeOfConfigurationPart</Id>
			<DataType>LocaleString</DataType>
			<ParentId>Industry</ParentId>
			<CustomValueList>False</CustomValueList>
		</CVL>
		<CVL>
			<Id>SubCategory</Id>
			<DataType>LocaleString</DataType>
			<ParentId>MainCategory</ParentId>
			<CustomValueList>False</CustomValueList>
		</CVL>
	</CVLs>
	<Categories>
		<Category>
			<Id>DigitalRightsInformation</Id>
			<Name>
				<string>
					<value language="en">
						<![CDATA[Digital Rights Information]]>
					</value>
				</string>
			</Name>
			<Index>10</Index>
		</Category>
		<Category>
			<Id>ERPInformation</Id>
			<Name>
				<string>
					<value language="en">
						<![CDATA[ERP/Source Information]]>
					</value>
				</string>
			</Name>
			<Index>0</Index>
		</Category>
		<Category>
			<Id>FileInformation</Id>
			<Name>
				<string>
					<value language="en">
						<![CDATA[File information]]>
					</value>
					<value language="nl">
						<![CDATA[Informatie over bestanden]]>
					</value>
					<value language="fr">
						<![CDATA[Informations sur le fichier]]>
					</value>
					<value language="de">
						<![CDATA[Datei-information]]>
					</value>
					<value language="sv">
						<![CDATA[Filinformation]]>
					</value>
				</string>
			</Name>
			<Index>1</Index>
		</Category>
		<Category>
			<Id>General</Id>
			<Name>
				<string>
					<value language="en">
						<![CDATA[General]]>
					</value>
					<value language="nl">
						<![CDATA[Algemeen]]>
					</value>
					<value language="fr">
						<![CDATA[Général]]>
					</value>
					<value language="de">
						<![CDATA[General]]>
					</value>
					<value language="sv">
						<![CDATA[Allmän]]>
					</value>
				</string>
			</Name>
			<Index>1</Index>
		</Category>
		<Category>
			<Id>PricingInformation</Id>
			<Name>
				<string>
					<value language="en">
						<![CDATA[Pricing Information]]>
					</value>
				</string>
			</Name>
			<Index>6</Index>
		</Category>
		<Category>
			<Id>ProductFeatures</Id>
			<Name>
				<string>
					<value language="en">
						<![CDATA[Product Features]]>
					</value>
				</string>
			</Name>
			<Index>4</Index>
		</Category>
		<Category>
			<Id>ProductInformation</Id>
			<Name>
				<string>
					<value language="en">
						<![CDATA[Product Information]]>
					</value>
				</string>
			</Name>
			<Index>3</Index>
		</Category>
		<Category>
			<Id>Statusinformation</Id>
			<Name>
				<string>
					<value language="en">
						<![CDATA[Statusinformation]]>
					</value>
					<value language="nl">
						<![CDATA[Statusinformatie]]>
					</value>
					<value language="fr">
						<![CDATA[Statusinformation]]>
					</value>
					<value language="de">
						<![CDATA[Statusinformationen]]>
					</value>
					<value language="sv">
						<![CDATA[Statusinformation]]>
					</value>
				</string>
			</Name>
			<Index>99</Index>
		</Category>
		<Category>
			<Id>WarrantyInformation</Id>
			<Name>
				<string>
					<value language="en">
						<![CDATA[Warranty Information]]>
					</value>
				</string>
			</Name>
			<Index>5</Index>
		</Category>
	</Categories>
	<EntityTypes>
		<EntityType>
			<Id>Activity</Id>
			<Name>
				<string>
					<value language="en">
						Activity
					</value>
					<value language="nl">
						Activiteit
					</value>
					<value language="fr">
						Activité
					</value>
					<value language="de">
						Aktivität
					</value>
					<value language="sv">
						Aktivitet
					</value>
				</string>
			</Name>
			<IsLinkEntityType>False</IsLinkEntityType>
			<FieldTypes>
				<FieldType>
					<Id>ActivityBusinessArea</Id>
					<DataType>CVL</DataType>
					<CVLId>ActivityBusinessArea</CVLId>
					<Name>
						<string>
							<value language="en">
								<![CDATA[Business Area]]>
							</value>
						</string>
					</Name>
					<Description>
						<string />
					</Description>
					<CategoryId>General</CategoryId>
					<DefaultValue />
					<Index>4</Index>
					<Hidden>False</Hidden>
					<ExcludeFromDefaultView>False</ExcludeFromDefaultView>
					<IsDisplayDescription>False</IsDisplayDescription>
					<IsDisplayName>False</IsDisplayName>
					<Mandatory>False</Mandatory>
					<Multivalue>False</Multivalue>
					<ReadOnly>False</ReadOnly>
					<Unique>False</Unique>
					<TrackChanges>True</TrackChanges>
					<Settings />
				</FieldType>
				<FieldType>
					<Id>ActivityDemo</Id>
					<DataType>Integer</DataType>
					<CVLId />
					<Name>
						<string />
					</Name>
					<Description>
						<string />
					</Description>
					<CategoryId>General</CategoryId>
					<DefaultValue />
					<Index>18</Index>
					<Hidden>True</Hidden>
					<ExcludeFromDefaultView>False</ExcludeFromDefaultView>
					<IsDisplayDescription>False</IsDisplayDescription>
					<IsDisplayName>False</IsDisplayName>
					<Mandatory>False</Mandatory>
					<Multivalue>False</Multivalue>
					<ReadOnly>False</ReadOnly>
					<Unique>False</Unique>
					<TrackChanges>True</TrackChanges>
					<Settings />
				</FieldType>
				<FieldType>
					<Id>ActivityEndDate</Id>
					<DataType>DateTime</DataType>
					<CVLId />
					<Name>
						<string>
							<value language="en">
								<![CDATA[End Date]]>
							</value>
							<value language="nl">
								<![CDATA[Einddatum]]>
							</value>
							<value language="fr">
								<![CDATA[Date de fin]]>
							</value>
							<value language="de">
								<![CDATA[Enddatum]]>
							</value>
							<value language="sv">
								<![CDATA[Slutdatum]]>
							</value>
						</string>
					</Name>
					<Description>
						<string />
					</Description>
					<CategoryId>General</CategoryId>
					<DefaultValue />
					<Index>9</Index>
					<Hidden>False</Hidden>
					<ExcludeFromDefaultView>False</ExcludeFromDefaultView>
					<IsDisplayDescription>False</IsDisplayDescription>
					<IsDisplayName>False</IsDisplayName>
					<Mandatory>False</Mandatory>
					<Multivalue>False</Multivalue>
					<ReadOnly>False</ReadOnly>
					<Unique>False</Unique>
					<TrackChanges>True</TrackChanges>
					<Settings />
				</FieldType>
				<FieldType>
					<Id>ActivityId</Id>
					<DataType>String</DataType>
					<CVLId />
					<Name>
						<string>
							<value language="en">
								<![CDATA[Id]]>
							</value>
						</string>
					</Name>
					<Description>
						<string />
					</Description>
					<CategoryId>General</CategoryId>
					<DefaultValue />
					<Index>16</Index>
					<Hidden>False</Hidden>
					<ExcludeFromDefaultView>False</ExcludeFromDefaultView>
					<IsDisplayDescription>False</IsDisplayDescription>
					<IsDisplayName>False</IsDisplayName>
					<Mandatory>False</Mandatory>
					<Multivalue>False</Multivalue>
					<ReadOnly>False</ReadOnly>
					<Unique>True</Unique>
					<TrackChanges>True</TrackChanges>
					<Settings />
				</FieldType>
				<FieldType>
					<Id>ActivityMarket</Id>
					<DataType>CVL</DataType>
					<CVLId>Market</CVLId>
					<Name>
						<string>
							<value language="en">
								<![CDATA[Market]]>
							</value>
						</string>
					</Name>
					<Description>
						<string />
					</Description>
					<CategoryId>General</CategoryId>
					<DefaultValue />
					<Index>7</Index>
					<Hidden>False</Hidden>
					<ExcludeFromDefaultView>False</ExcludeFromDefaultView>
					<IsDisplayDescription>False</IsDisplayDescription>
					<IsDisplayName>False</IsDisplayName>
					<Mandatory>False</Mandatory>
					<Multivalue>True</Multivalue>
					<ReadOnly>False</ReadOnly>
					<Unique>False</Unique>
					<TrackChanges>True</TrackChanges>
					<Settings>
						<Setting>
							<SettingsKey>IncludedInPlannerTooltip</SettingsKey>
							<SettingsValue>
								<![CDATA[true]]>
							</SettingsValue>
						</Setting>
					</Settings>
				</FieldType>
				<FieldType>
					<Id>ActivityMonth</Id>
					<DataType>CVL</DataType>
					<CVLId>Month</CVLId>
					<Name>
						<string>
							<value language="en">
								<![CDATA[Month]]>
							</value>
						</string>
					</Name>
					<Description>
						<string />
					</Description>
					<CategoryId>General</CategoryId>
					<DefaultValue />
					<Index>11</Index>
					<Hidden>False</Hidden>
					<ExcludeFromDefaultView>False</ExcludeFromDefaultView>
					<IsDisplayDescription>False</IsDisplayDescription>
					<IsDisplayName>False</IsDisplayName>
					<Mandatory>False</Mandatory>
					<Multivalue>True</Multivalue>
					<ReadOnly>True</ReadOnly>
					<Unique>False</Unique>
					<TrackChanges>True</TrackChanges>
					<Settings />
				</FieldType>
				<FieldType>
					<Id>ActivityName</Id>
					<DataType>String</DataType>
					<CVLId />
					<Name>
						<string>
							<value language="en">
								<![CDATA[Name]]>
							</value>
							<value language="nl">
								<![CDATA[Naam]]>
							</value>
							<value language="fr">
								<![CDATA[Nom]]>
							</value>
							<value language="de">
								<![CDATA[Name]]>
							</value>
							<value language="sv">
								<![CDATA[Namn]]>
							</value>
						</string>
					</Name>
					<Description>
						<string />
					</Description>
					<CategoryId>General</CategoryId>
					<DefaultValue />
					<Index>1</Index>
					<Hidden>False</Hidden>
					<ExcludeFromDefaultView>False</ExcludeFromDefaultView>
					<IsDisplayDescription>False</IsDisplayDescription>
					<IsDisplayName>True</IsDisplayName>
					<Mandatory>True</Mandatory>
					<Multivalue>False</Multivalue>
					<ReadOnly>False</ReadOnly>
					<Unique>False</Unique>
					<TrackChanges>True</TrackChanges>
					<Settings>
						<Setting>
							<SettingsKey>IncludedInPlannerTooltip</SettingsKey>
							<SettingsValue>
								<![CDATA[true]]>
							</SettingsValue>
						</Setting>
					</Settings>
				</FieldType>
				<FieldType>
					<Id>ActivityObjective</Id>
					<DataType>CVL</DataType>
					<CVLId>ActivityObjective</CVLId>
					<Name>
						<string>
							<value language="en">
								<![CDATA[Objective]]>
							</value>
						</string>
					</Name>
					<Description>
						<string />
					</Description>
					<CategoryId>General</CategoryId>
					<DefaultValue />
					<Index>6</Index>
					<Hidden>False</Hidden>
					<ExcludeFromDefaultView>False</ExcludeFromDefaultView>
					<IsDisplayDescription>False</IsDisplayDescription>
					<IsDisplayName>False</IsDisplayName>
					<Mandatory>False</Mandatory>
					<Multivalue>True</Multivalue>
					<ReadOnly>False</ReadOnly>
					<Unique>False</Unique>
					<TrackChanges>True</TrackChanges>
					<Settings />
				</FieldType>
				<FieldType>
					<Id>ActivityQuarter</Id>
					<DataType>CVL</DataType>
					<CVLId>Quarter</CVLId>
					<Name>
						<string>
							<value language="en">
								<![CDATA[Quarter]]>
							</value>
						</string>
					</Name>
					<Description>
						<string />
					</Description>
					<CategoryId>General</CategoryId>
					<DefaultValue />
					<Index>12</Index>
					<Hidden>False</Hidden>
					<ExcludeFromDefaultView>False</ExcludeFromDefaultView>
					<IsDisplayDescription>False</IsDisplayDescription>
					<IsDisplayName>False</IsDisplayName>
					<Mandatory>False</Mandatory>
					<Multivalue>True</Multivalue>
					<ReadOnly>True</ReadOnly>
					<Unique>False</Unique>
					<TrackChanges>True</TrackChanges>
					<Settings />
				</FieldType>
				<FieldType>
					<Id>ActivityResponsibleRole</Id>
					<DataType>CVL</DataType>
					<CVLId>ActivityResponsibleRole</CVLId>
					<Name>
						<string>
							<value language="en">
								<![CDATA[Responsible Role]]>
							</value>
						</string>
					</Name>
					<Description>
						<string />
					</Description>
					<CategoryId>General</CategoryId>
					<DefaultValue />
					<Index>14</Index>
					<Hidden>False</Hidden>
					<ExcludeFromDefaultView>False</ExcludeFromDefaultView>
					<IsDisplayDescription>False</IsDisplayDescription>
					<IsDisplayName>False</IsDisplayName>
					<Mandatory>False</Mandatory>
					<Multivalue>False</Multivalue>
					<ReadOnly>False</ReadOnly>
					<Unique>False</Unique>
					<TrackChanges>True</TrackChanges>
					<Settings />
				</FieldType>
				<FieldType>
					<Id>ActivitySize</Id>
					<DataType>CVL</DataType>
					<CVLId>ActivitySize</CVLId>
					<Name>
						<string>
							<value language="en">
								<![CDATA[Size]]>
							</value>
						</string>
					</Name>
					<Description>
						<string />
					</Description>
					<CategoryId>General</CategoryId>
					<DefaultValue />
					<Index>2</Index>
					<Hidden>False</Hidden>
					<ExcludeFromDefaultView>False</ExcludeFromDefaultView>
					<IsDisplayDescription>False</IsDisplayDescription>
					<IsDisplayName>False</IsDisplayName>
					<Mandatory>False</Mandatory>
					<Multivalue>False</Multivalue>
					<ReadOnly>False</ReadOnly>
					<Unique>False</Unique>
					<TrackChanges>True</TrackChanges>
					<Settings>
						<Setting>
							<SettingsKey>IncludedInPlannerTooltip</SettingsKey>
							<SettingsValue>
								<![CDATA[true]]>
							</SettingsValue>
						</Setting>
					</Settings>
				</FieldType>
				<FieldType>
					<Id>ActivityStartDate</Id>
					<DataType>DateTime</DataType>
					<CVLId />
					<Name>
						<string>
							<value language="en">
								<![CDATA[Start Date]]>
							</value>
							<value language="nl">
								<![CDATA[Begin datum]]>
							</value>
							<value language="fr">
								<![CDATA[Date de début]]>
							</value>
							<value language="de">
								<![CDATA[Anfangsdatum]]>
							</value>
							<value language="sv">
								<![CDATA[Start datum]]>
							</value>
						</string>
					</Name>
					<Description>
						<string />
					</Description>
					<CategoryId>General</CategoryId>
					<DefaultValue />
					<Index>8</Index>
					<Hidden>False</Hidden>
					<ExcludeFromDefaultView>False</ExcludeFromDefaultView>
					<IsDisplayDescription>False</IsDisplayDescription>
					<IsDisplayName>False</IsDisplayName>
					<Mandatory>False</Mandatory>
					<Multivalue>False</Multivalue>
					<ReadOnly>False</ReadOnly>
					<Unique>False</Unique>
					<TrackChanges>True</TrackChanges>
					<Settings />
				</FieldType>
				<FieldType>
					<Id>ActivityStatus</Id>
					<DataType>CVL</DataType>
					<CVLId>ActivityStatus</CVLId>
					<Name>
						<string>
							<value language="en">
								<![CDATA[Status]]>
							</value>
						</string>
					</Name>
					<Description>
						<string />
					</Description>
					<CategoryId>General</CategoryId>
					<DefaultValue />
					<Index>15</Index>
					<Hidden>False</Hidden>
					<ExcludeFromDefaultView>False</ExcludeFromDefaultView>
					<IsDisplayDescription>False</IsDisplayDescription>
					<IsDisplayName>False</IsDisplayName>
					<Mandatory>False</Mandatory>
					<Multivalue>False</Multivalue>
					<ReadOnly>False</ReadOnly>
					<Unique>False</Unique>
					<TrackChanges>True</TrackChanges>
					<Settings>
						<Setting>
							<SettingsKey>IncludedInPlannerTooltip</SettingsKey>
							<SettingsValue>
								<![CDATA[true]]>
							</SettingsValue>
						</Setting>
					</Settings>
				</FieldType>
				<FieldType>
					<Id>ActivitySubBusinessArea</Id>
					<DataType>CVL</DataType>
					<CVLId>ActivitySubBusinessArea</CVLId>
					<Name>
						<string>
							<value language="en">
								<![CDATA[Sub Business area]]>
							</value>
						</string>
					</Name>
					<Description>
						<string />
					</Description>
					<CategoryId>General</CategoryId>
					<DefaultValue />
					<Index>5</Index>
					<Hidden>False</Hidden>
					<ExcludeFromDefaultView>False</ExcludeFromDefaultView>
					<IsDisplayDescription>False</IsDisplayDescription>
					<IsDisplayName>False</IsDisplayName>
					<Mandatory>False</Mandatory>
					<Multivalue>False</Multivalue>
					<ReadOnly>False</ReadOnly>
					<Unique>False</Unique>
					<TrackChanges>True</TrackChanges>
					<Settings />
				</FieldType>
				<FieldType>
					<Id>ActivityTemplate</Id>
					<DataType>CVL</DataType>
					<CVLId>YesNo</CVLId>
					<Name>
						<string>
							<value language="en">
								<![CDATA[Template]]>
							</value>
						</string>
					</Name>
					<Description>
						<string />
					</Description>
					<CategoryId>General</CategoryId>
					<DefaultValue />
					<Index>17</Index>
					<Hidden>False</Hidden>
					<ExcludeFromDefaultView>False</ExcludeFromDefaultView>
					<IsDisplayDescription>False</IsDisplayDescription>
					<IsDisplayName>False</IsDisplayName>
					<Mandatory>False</Mandatory>
					<Multivalue>False</Multivalue>
					<ReadOnly>False</ReadOnly>
					<Unique>False</Unique>
					<TrackChanges>True</TrackChanges>
					<Settings />
				</FieldType>
				<FieldType>
					<Id>ActivityType</Id>
					<DataType>CVL</DataType>
					<CVLId>ActivityType</CVLId>
					<Name>
						<string>
							<value language="en">
								<![CDATA[Type]]>
							</value>
						</string>
					</Name>
					<Description>
						<string />
					</Description>
					<CategoryId>General</CategoryId>
					<DefaultValue />
					<Index>3</Index>
					<Hidden>False</Hidden>
					<ExcludeFromDefaultView>False</ExcludeFromDefaultView>
					<IsDisplayDescription>False</IsDisplayDescription>
					<IsDisplayName>False</IsDisplayName>
					<Mandatory>False</Mandatory>
					<Multivalue>True</Multivalue>
					<ReadOnly>False</ReadOnly>
					<Unique>False</Unique>
					<TrackChanges>True</TrackChanges>
					<Settings>
						<Setting>
							<SettingsKey>IncludedInPlannerTooltip</SettingsKey>
							<SettingsValue>
								<![CDATA[true]]>
							</SettingsValue>
						</Setting>
					</Settings>
				</FieldType>
				<FieldType>
					<Id>ActivityWeeks</Id>
					<DataType>CVL</DataType>
					<CVLId>Weeks</CVLId>
					<Name>
						<string>
							<value language="en">
								<![CDATA[Weeks]]>
							</value>
						</string>
					</Name>
					<Description>
						<string />
					</Description>
					<CategoryId>General</CategoryId>
					<DefaultValue />
					<Index>10</Index>
					<Hidden>False</Hidden>
					<ExcludeFromDefaultView>False</ExcludeFromDefaultView>
					<IsDisplayDescription>False</IsDisplayDescription>
					<IsDisplayName>False</IsDisplayName>
					<Mandatory>False</Mandatory>
					<Multivalue>True</Multivalue>
					<ReadOnly>True</ReadOnly>
					<Unique>False</Unique>
					<TrackChanges>True</TrackChanges>
					<Settings>
						<Setting>
							<SettingsKey>IncludedInPlannerTooltip</SettingsKey>
							<SettingsValue>
								<![CDATA[true]]>
							</SettingsValue>
						</Setting>
					</Settings>
				</FieldType>
				<FieldType>
					<Id>ActivityYear</Id>
					<DataType>CVL</DataType>
					<CVLId>Year</CVLId>
					<Name>
						<string>
							<value language="en">
								<![CDATA[Year]]>
							</value>
						</string>
					</Name>
					<Description>
						<string />
					</Description>
					<CategoryId>General</CategoryId>
					<DefaultValue />
					<Index>13</Index>
					<Hidden>False</Hidden>
					<ExcludeFromDefaultView>False</ExcludeFromDefaultView>
					<IsDisplayDescription>False</IsDisplayDescription>
					<IsDisplayName>False</IsDisplayName>
					<Mandatory>False</Mandatory>
					<Multivalue>True</Multivalue>
					<ReadOnly>True</ReadOnly>
					<Unique>False</Unique>
					<TrackChanges>True</TrackChanges>
					<Settings />
				</FieldType>
			</FieldTypes>
		</EntityType>
		<EntityType>
			<Id>Application</Id>
			<Name>
				<string>
					<value language="en">
						<![CDATA[Application]]>
					</value>
				</string>
			</Name>
			<IsLinkEntityType>False</IsLinkEntityType>
			<FieldTypes>
				<FieldType>
					<Id>ApplicationDescription</Id>
					<DataType>LocaleString</DataType>
					<CVLId />
					<Name>
						<string>
							<value language="en">
								<![CDATA[Description]]>
							</value>
						</string>
					</Name>
					<Description>
						<string />
					</Description>
					<CategoryId>General</CategoryId>
					<DefaultValue />
					<Index>2</Index>
					<Hidden>False</Hidden>
					<ExcludeFromDefaultView>False</ExcludeFromDefaultView>
					<IsDisplayDescription>False</IsDisplayDescription>
					<IsDisplayName>False</IsDisplayName>
					<Mandatory>False</Mandatory>
					<Multivalue>False</Multivalue>
					<ReadOnly>False</ReadOnly>
					<Unique>False</Unique>
					<TrackChanges>True</TrackChanges>
					<Settings />
				</FieldType>
				<FieldType>
					<Id>ApplicationName</Id>
					<DataType>String</DataType>
					<CVLId />
					<Name>
						<string>
							<value language="en">
								<![CDATA[Name]]>
							</value>
						</string>
					</Name>
					<Description>
						<string />
					</Description>
					<CategoryId>General</CategoryId>
					<DefaultValue />
					<Index>1</Index>
					<Hidden>False</Hidden>
					<ExcludeFromDefaultView>False</ExcludeFromDefaultView>
					<IsDisplayDescription>False</IsDisplayDescription>
					<IsDisplayName>True</IsDisplayName>
					<Mandatory>True</Mandatory>
					<Multivalue>False</Multivalue>
					<ReadOnly>False</ReadOnly>
					<Unique>False</Unique>
					<TrackChanges>True</TrackChanges>
					<Settings />
				</FieldType>
			</FieldTypes>
		</EntityType>
		<EntityType>
			<Id>Assortment</Id>
			<Name>
				<string>
					<value language="en">
						<![CDATA[Assortment]]>
					</value>
					<value language="nl">
						<![CDATA[Assortiment]]>
					</value>
					<value language="fr">
						<![CDATA[Assortiment]]>
					</value>
					<value language="de">
						<![CDATA[Kollektion]]>
					</value>
					<value language="sv">
						<![CDATA[Sortiment]]>
					</value>
				</string>
			</Name>
			<IsLinkEntityType>False</IsLinkEntityType>
			<FieldTypes>
				<FieldType>
					<Id>AssortmentName</Id>
					<DataType>String</DataType>
					<CVLId />
					<Name>
						<string>
							<value language="en">
								<![CDATA[Name]]>
							</value>
							<value language="nl">
								<![CDATA[Naam]]>
							</value>
							<value language="fr">
								<![CDATA[Nom]]>
							</value>
							<value language="de">
								<![CDATA[Name]]>
							</value>
							<value language="sv">
								<![CDATA[Namn]]>
							</value>
						</string>
					</Name>
					<Description>
						<string />
					</Description>
					<CategoryId>General</CategoryId>
					<DefaultValue />
					<Index>1</Index>
					<Hidden>False</Hidden>
					<ExcludeFromDefaultView>False</ExcludeFromDefaultView>
					<IsDisplayDescription>False</IsDisplayDescription>
					<IsDisplayName>True</IsDisplayName>
					<Mandatory>False</Mandatory>
					<Multivalue>False</Multivalue>
					<ReadOnly>False</ReadOnly>
					<Unique>False</Unique>
					<TrackChanges>True</TrackChanges>
					<Settings />
				</FieldType>
			</FieldTypes>
		</EntityType>
		<EntityType>
			<Id>Budget</Id>
			<Name>
				<string>
					<value language="en">
						<![CDATA[Budget]]>
					</value>
					<value language="sv">
						<![CDATA[Budget]]>
					</value>
				</string>
			</Name>
			<IsLinkEntityType>False</IsLinkEntityType>
			<FieldTypes>
				<FieldType>
					<Id>Budget</Id>
					<DataType>Double</DataType>
					<CVLId />
					<Name>
						<string>
							<value language="en">
								<![CDATA[Budget]]>
							</value>
							<value language="sv">
								<![CDATA[Budget]]>
							</value>
						</string>
					</Name>
					<Description>
						<string />
					</Description>
					<CategoryId>General</CategoryId>
					<DefaultValue />
					<Index>4</Index>
					<Hidden>False</Hidden>
					<ExcludeFromDefaultView>False</ExcludeFromDefaultView>
					<IsDisplayDescription>True</IsDisplayDescription>
					<IsDisplayName>False</IsDisplayName>
					<Mandatory>False</Mandatory>
					<Multivalue>False</Multivalue>
					<ReadOnly>False</ReadOnly>
					<Unique>False</Unique>
					<TrackChanges>True</TrackChanges>
					<Settings>
						<Setting>
							<SettingsKey>IncludedInPlannerTooltip</SettingsKey>
							<SettingsValue>
								<![CDATA[true]]>
							</SettingsValue>
						</Setting>
					</Settings>
				</FieldType>
				<FieldType>
					<Id>BudgetArea</Id>
					<DataType>CVL</DataType>
					<CVLId>BudgetArea</CVLId>
					<Name>
						<string>
							<value language="en">
								<![CDATA[Area]]>
							</value>
						</string>
					</Name>
					<Description>
						<string />
					</Description>
					<CategoryId>General</CategoryId>
					<DefaultValue />
					<Index>3</Index>
					<Hidden>False</Hidden>
					<ExcludeFromDefaultView>False</ExcludeFromDefaultView>
					<IsDisplayDescription>False</IsDisplayDescription>
					<IsDisplayName>False</IsDisplayName>
					<Mandatory>False</Mandatory>
					<Multivalue>False</Multivalue>
					<ReadOnly>False</ReadOnly>
					<Unique>False</Unique>
					<TrackChanges>True</TrackChanges>
					<Settings>
						<Setting>
							<SettingsKey>IncludedInPlannerTooltip</SettingsKey>
							<SettingsValue>
								<![CDATA[true]]>
							</SettingsValue>
						</Setting>
					</Settings>
				</FieldType>
				<FieldType>
					<Id>BudgetId</Id>
					<DataType>String</DataType>
					<CVLId />
					<Name>
						<string>
							<value language="en">
								<![CDATA[Id]]>
							</value>
						</string>
					</Name>
					<Description>
						<string />
					</Description>
					<CategoryId>General</CategoryId>
					<DefaultValue />
					<Index>5</Index>
					<Hidden>False</Hidden>
					<ExcludeFromDefaultView>False</ExcludeFromDefaultView>
					<IsDisplayDescription>False</IsDisplayDescription>
					<IsDisplayName>False</IsDisplayName>
					<Mandatory>False</Mandatory>
					<Multivalue>False</Multivalue>
					<ReadOnly>False</ReadOnly>
					<Unique>True</Unique>
					<TrackChanges>True</TrackChanges>
					<Settings />
				</FieldType>
				<FieldType>
					<Id>BudgetMarket</Id>
					<DataType>CVL</DataType>
					<CVLId>Market</CVLId>
					<Name>
						<string>
							<value language="en">
								<![CDATA[Market]]>
							</value>
						</string>
					</Name>
					<Description>
						<string />
					</Description>
					<CategoryId>General</CategoryId>
					<DefaultValue />
					<Index>2</Index>
					<Hidden>False</Hidden>
					<ExcludeFromDefaultView>False</ExcludeFromDefaultView>
					<IsDisplayDescription>False</IsDisplayDescription>
					<IsDisplayName>False</IsDisplayName>
					<Mandatory>False</Mandatory>
					<Multivalue>True</Multivalue>
					<ReadOnly>False</ReadOnly>
					<Unique>False</Unique>
					<TrackChanges>True</TrackChanges>
					<Settings>
						<Setting>
							<SettingsKey>IncludedInPlannerTooltip</SettingsKey>
							<SettingsValue>
								<![CDATA[true]]>
							</SettingsValue>
						</Setting>
					</Settings>
				</FieldType>
				<FieldType>
					<Id>BudgetName</Id>
					<DataType>String</DataType>
					<CVLId />
					<Name>
						<string>
							<value language="en">
								<![CDATA[Name]]>
							</value>
						</string>
					</Name>
					<Description>
						<string />
					</Description>
					<CategoryId>General</CategoryId>
					<DefaultValue />
					<Index>1</Index>
					<Hidden>False</Hidden>
					<ExcludeFromDefaultView>False</ExcludeFromDefaultView>
					<IsDisplayDescription>False</IsDisplayDescription>
					<IsDisplayName>True</IsDisplayName>
					<Mandatory>False</Mandatory>
					<Multivalue>False</Multivalue>
					<ReadOnly>False</ReadOnly>
					<Unique>False</Unique>
					<TrackChanges>True</TrackChanges>
					<Settings>
						<Setting>
							<SettingsKey>IncludedInPlannerTooltip</SettingsKey>
							<SettingsValue>
								<![CDATA[true]]>
							</SettingsValue>
						</Setting>
					</Settings>
				</FieldType>
			</FieldTypes>
		</EntityType>
		<EntityType>
			<Id>Bundle</Id>
			<Name>
				<string>
					<value language="en">
						<![CDATA[Bundle]]>
					</value>
					<value language="nl">
						<![CDATA[Bundel]]>
					</value>
					<value language="fr">
						<![CDATA[Offre groupée]]>
					</value>
					<value language="de">
						<![CDATA[Bündel]]>
					</value>
					<value language="sv">
						<![CDATA[Paket]]>
					</value>
				</string>
			</Name>
			<IsLinkEntityType>False</IsLinkEntityType>
			<FieldTypes>
				<FieldType>
					<Id>BundleApproved</Id>
					<DataType>Boolean</DataType>
					<CVLId />
					<Name>
						<string>
							<value language="en">
								<![CDATA[Approved]]>
							</value>
							<value language="nl">
								<![CDATA[Goedgekeurd]]>
							</value>
							<value language="fr">
								<![CDATA[A approuvé]]>
							</value>
							<value language="de">
								<![CDATA[Genehmigt]]>
							</value>
							<value language="sv">
								<![CDATA[Godkänd]]>
							</value>
						</string>
					</Name>
					<Description>
						<string />
					</Description>
					<CategoryId>Statusinformation</CategoryId>
					<DefaultValue />
					<Index>7</Index>
					<Hidden>False</Hidden>
					<ExcludeFromDefaultView>True</ExcludeFromDefaultView>
					<IsDisplayDescription>False</IsDisplayDescription>
					<IsDisplayName>False</IsDisplayName>
					<Mandatory>False</Mandatory>
					<Multivalue>False</Multivalue>
					<ReadOnly>False</ReadOnly>
					<Unique>False</Unique>
					<TrackChanges>True</TrackChanges>
					<Settings />
				</FieldType>
				<FieldType>
					<Id>BundleDescription</Id>
					<DataType>LocaleString</DataType>
					<CVLId />
					<Name>
						<string>
							<value language="en">
								<![CDATA[Description]]>
							</value>
							<value language="nl">
								<![CDATA[Beschrijving]]>
							</value>
							<value language="fr">
								<![CDATA[Description]]>
							</value>
							<value language="de">
								<![CDATA[Beschreibung]]>
							</value>
							<value language="sv">
								<![CDATA[Beskrivning]]>
							</value>
						</string>
					</Name>
					<Description>
						<string />
					</Description>
					<CategoryId>General</CategoryId>
					<DefaultValue />
					<Index>2</Index>
					<Hidden>False</Hidden>
					<ExcludeFromDefaultView>False</ExcludeFromDefaultView>
					<IsDisplayDescription>True</IsDisplayDescription>
					<IsDisplayName>False</IsDisplayName>
					<Mandatory>False</Mandatory>
					<Multivalue>False</Multivalue>
					<ReadOnly>False</ReadOnly>
					<Unique>False</Unique>
					<TrackChanges>True</TrackChanges>
					<Settings />
				</FieldType>
				<FieldType>
					<Id>BundleLongDescription</Id>
					<DataType>LocaleString</DataType>
					<CVLId />
					<Name>
						<string>
							<value language="en">
								<![CDATA[Long Description]]>
							</value>
							<value language="nl">
								<![CDATA[Lange beschrijving]]>
							</value>
							<value language="fr">
								<![CDATA[Longue description]]>
							</value>
							<value language="de">
								<![CDATA[Ausführliche Beschreibung]]>
							</value>
							<value language="sv">
								<![CDATA[Lång beskrivning]]>
							</value>
						</string>
					</Name>
					<Description>
						<string />
					</Description>
					<CategoryId>ProductInformation</CategoryId>
					<DefaultValue />
					<Index>3</Index>
					<Hidden>False</Hidden>
					<ExcludeFromDefaultView>True</ExcludeFromDefaultView>
					<IsDisplayDescription>False</IsDisplayDescription>
					<IsDisplayName>False</IsDisplayName>
					<Mandatory>False</Mandatory>
					<Multivalue>False</Multivalue>
					<ReadOnly>False</ReadOnly>
					<Unique>False</Unique>
					<TrackChanges>True</TrackChanges>
					<Settings />
				</FieldType>
				<FieldType>
					<Id>BundleName</Id>
					<DataType>String</DataType>
					<CVLId />
					<Name>
						<string>
							<value language="en">
								<![CDATA[Name]]>
							</value>
							<value language="nl">
								<![CDATA[Naam]]>
							</value>
							<value language="fr">
								<![CDATA[Nom]]>
							</value>
							<value language="de">
								<![CDATA[Name]]>
							</value>
							<value language="sv">
								<![CDATA[Namn]]>
							</value>
						</string>
					</Name>
					<Description>
						<string />
					</Description>
					<CategoryId>General</CategoryId>
					<DefaultValue />
					<Index>1</Index>
					<Hidden>False</Hidden>
					<ExcludeFromDefaultView>False</ExcludeFromDefaultView>
					<IsDisplayDescription>False</IsDisplayDescription>
					<IsDisplayName>True</IsDisplayName>
					<Mandatory>True</Mandatory>
					<Multivalue>False</Multivalue>
					<ReadOnly>False</ReadOnly>
					<Unique>False</Unique>
					<TrackChanges>True</TrackChanges>
					<Settings />
				</FieldType>
				<FieldType>
					<Id>BundleProductNumber</Id>
					<DataType>String</DataType>
					<CVLId />
					<Name>
						<string>
							<value language="en">
								<![CDATA[Product Number]]>
							</value>
							<value language="nl">
								<![CDATA[Productnummer]]>
							</value>
							<value language="fr">
								<![CDATA[Numéro de produit]]>
							</value>
							<value language="de">
								<![CDATA[Produktnummer]]>
							</value>
							<value language="sv">
								<![CDATA[Produktnummer]]>
							</value>
						</string>
					</Name>
					<Description>
						<string />
					</Description>
					<CategoryId>ProductInformation</CategoryId>
					<DefaultValue />
					<Index>4</Index>
					<Hidden>False</Hidden>
					<ExcludeFromDefaultView>True</ExcludeFromDefaultView>
					<IsDisplayDescription>False</IsDisplayDescription>
					<IsDisplayName>False</IsDisplayName>
					<Mandatory>False</Mandatory>
					<Multivalue>False</Multivalue>
					<ReadOnly>False</ReadOnly>
					<Unique>False</Unique>
					<TrackChanges>True</TrackChanges>
					<Settings />
				</FieldType>
				<FieldType>
					<Id>BundleProductType</Id>
					<DataType>CVL</DataType>
					<CVLId>ManufacturingProductType</CVLId>
					<Name>
						<string>
							<value language="en">
								<![CDATA[Product Type]]>
							</value>
							<value language="nl">
								<![CDATA[Product type]]>
							</value>
							<value language="fr">
								<![CDATA[Type de produit]]>
							</value>
							<value language="de">
								<![CDATA[Produktart]]>
							</value>
							<value language="sv">
								<![CDATA[Produkttyp]]>
							</value>
						</string>
					</Name>
					<Description>
						<string />
					</Description>
					<CategoryId>ProductInformation</CategoryId>
					<DefaultValue />
					<Index>5</Index>
					<Hidden>False</Hidden>
					<ExcludeFromDefaultView>True</ExcludeFromDefaultView>
					<IsDisplayDescription>False</IsDisplayDescription>
					<IsDisplayName>False</IsDisplayName>
					<Mandatory>False</Mandatory>
					<Multivalue>False</Multivalue>
					<ReadOnly>False</ReadOnly>
					<Unique>False</Unique>
					<TrackChanges>True</TrackChanges>
					<Settings />
				</FieldType>
				<FieldType>
					<Id>BundleStatus</Id>
					<DataType>CVL</DataType>
					<CVLId>ProductStatus</CVLId>
					<Name>
						<string>
							<value language="en">
								<![CDATA[Status]]>
							</value>
							<value language="nl">
								<![CDATA[Status]]>
							</value>
							<value language="fr">
								<![CDATA[État]]>
							</value>
							<value language="de">
								<![CDATA[Status]]>
							</value>
							<value language="sv">
								<![CDATA[Status]]>
							</value>
						</string>
					</Name>
					<Description>
						<string />
					</Description>
					<CategoryId>Statusinformation</CategoryId>
					<DefaultValue />
					<Index>6</Index>
					<Hidden>False</Hidden>
					<ExcludeFromDefaultView>False</ExcludeFromDefaultView>
					<IsDisplayDescription>False</IsDisplayDescription>
					<IsDisplayName>False</IsDisplayName>
					<Mandatory>False</Mandatory>
					<Multivalue>False</Multivalue>
					<ReadOnly>False</ReadOnly>
					<Unique>False</Unique>
					<TrackChanges>True</TrackChanges>
					<Settings />
				</FieldType>
			</FieldTypes>
		</EntityType>
		<EntityType>
			<Id>Celebrity</Id>
			<Name>
				<string>
					<value language="en">
						<![CDATA[Celebrity]]>
					</value>
					<value language="nl">
						<![CDATA[Beroemdheid]]>
					</value>
					<value language="fr">
						<![CDATA[Célébrité]]>
					</value>
					<value language="de">
						<![CDATA[Berühmtheit]]>
					</value>
					<value language="sv">
						<![CDATA[Kändis]]>
					</value>
				</string>
			</Name>
			<IsLinkEntityType>False</IsLinkEntityType>
			<FieldTypes>
				<FieldType>
					<Id>CelebrityLongDescription</Id>
					<DataType>LocaleString</DataType>
					<CVLId />
					<Name>
						<string>
							<value language="en">
								<![CDATA[Long Description]]>
							</value>
							<value language="nl">
								<![CDATA[Lange beschrijving]]>
							</value>
							<value language="fr">
								<![CDATA[Longue description]]>
							</value>
							<value language="de">
								<![CDATA[Lange Beschreibung]]>
							</value>
							<value language="sv">
								<![CDATA[Lång beskrivning]]>
							</value>
						</string>
					</Name>
					<Description>
						<string />
					</Description>
					<CategoryId>General</CategoryId>
					<DefaultValue />
					<Index>3</Index>
					<Hidden>False</Hidden>
					<ExcludeFromDefaultView>False</ExcludeFromDefaultView>
					<IsDisplayDescription>False</IsDisplayDescription>
					<IsDisplayName>False</IsDisplayName>
					<Mandatory>False</Mandatory>
					<Multivalue>False</Multivalue>
					<ReadOnly>False</ReadOnly>
					<Unique>False</Unique>
					<TrackChanges>True</TrackChanges>
					<Settings />
				</FieldType>
				<FieldType>
					<Id>CelebrityName</Id>
					<DataType>String</DataType>
					<CVLId />
					<Name>
						<string>
							<value language="en">
								<![CDATA[Name]]>
							</value>
							<value language="nl">
								<![CDATA[Naam]]>
							</value>
							<value language="fr">
								<![CDATA[Prénom]]>
							</value>
							<value language="de">
								<![CDATA[Name]]>
							</value>
							<value language="sv">
								<![CDATA[Namn]]>
							</value>
						</string>
					</Name>
					<Description>
						<string />
					</Description>
					<CategoryId>General</CategoryId>
					<DefaultValue />
					<Index>1</Index>
					<Hidden>False</Hidden>
					<ExcludeFromDefaultView>False</ExcludeFromDefaultView>
					<IsDisplayDescription>False</IsDisplayDescription>
					<IsDisplayName>True</IsDisplayName>
					<Mandatory>True</Mandatory>
					<Multivalue>False</Multivalue>
					<ReadOnly>False</ReadOnly>
					<Unique>True</Unique>
					<TrackChanges>True</TrackChanges>
					<Settings />
				</FieldType>
				<FieldType>
					<Id>CelebrityShortDescription</Id>
					<DataType>LocaleString</DataType>
					<CVLId />
					<Name>
						<string>
							<value language="en">
								<![CDATA[Short Description]]>
							</value>
							<value language="nl">
								<![CDATA[Korte beschrijving]]>
							</value>
							<value language="fr">
								<![CDATA[Brève description]]>
							</value>
							<value language="de">
								<![CDATA[Kurze Beschreibung]]>
							</value>
							<value language="sv">
								<![CDATA[Kort beskrivning]]>
							</value>
						</string>
					</Name>
					<Description>
						<string />
					</Description>
					<CategoryId>General</CategoryId>
					<DefaultValue />
					<Index>2</Index>
					<Hidden>False</Hidden>
					<ExcludeFromDefaultView>False</ExcludeFromDefaultView>
					<IsDisplayDescription>True</IsDisplayDescription>
					<IsDisplayName>False</IsDisplayName>
					<Mandatory>False</Mandatory>
					<Multivalue>False</Multivalue>
					<ReadOnly>False</ReadOnly>
					<Unique>False</Unique>
					<TrackChanges>True</TrackChanges>
					<Settings />
				</FieldType>
			</FieldTypes>
		</EntityType>
		<EntityType>
			<Id>Channel</Id>
			<Name>
				<string>
					<value language="en">
						<![CDATA[Channel]]>
					</value>
					<value language="nl">
						<![CDATA[Kanaal]]>
					</value>
					<value language="fr">
						<![CDATA[Canal]]>
					</value>
					<value language="de">
						<![CDATA[Kanal]]>
					</value>
					<value language="sv">
						<![CDATA[Kanal]]>
					</value>
				</string>
			</Name>
			<IsLinkEntityType>False</IsLinkEntityType>
			<FieldTypes>
				<FieldType>
					<Id>ChannelIndustry</Id>
					<DataType>CVL</DataType>
					<CVLId>Industry</CVLId>
					<Name>
						<string>
							<value language="en">
								<![CDATA[Industry]]>
							</value>
							<value language="nl">
								<![CDATA[Industrie]]>
							</value>
							<value language="fr">
								<![CDATA[Secteur]]>
							</value>
							<value language="de">
								<![CDATA[Branche]]>
							</value>
							<value language="sv">
								<![CDATA[Industri]]>
							</value>
						</string>
					</Name>
					<Description>
						<string />
					</Description>
					<CategoryId>General</CategoryId>
					<DefaultValue />
					<Index>3</Index>
					<Hidden>False</Hidden>
					<ExcludeFromDefaultView>False</ExcludeFromDefaultView>
					<IsDisplayDescription>False</IsDisplayDescription>
					<IsDisplayName>False</IsDisplayName>
					<Mandatory>False</Mandatory>
					<Multivalue>False</Multivalue>
					<ReadOnly>False</ReadOnly>
					<Unique>False</Unique>
					<TrackChanges>True</TrackChanges>
					<Settings />
				</FieldType>
				<FieldType>
					<Id>ChannelName</Id>
					<DataType>String</DataType>
					<CVLId />
					<Name>
						<string>
							<value language="en">
								<![CDATA[Name]]>
							</value>
							<value language="nl">
								<![CDATA[Naam]]>
							</value>
							<value language="fr">
								<![CDATA[Nom]]>
							</value>
							<value language="de">
								<![CDATA[Name]]>
							</value>
							<value language="sv">
								<![CDATA[Namn]]>
							</value>
						</string>
					</Name>
					<Description>
						<string />
					</Description>
					<CategoryId>General</CategoryId>
					<DefaultValue />
					<Index>0</Index>
					<Hidden>False</Hidden>
					<ExcludeFromDefaultView>False</ExcludeFromDefaultView>
					<IsDisplayDescription>False</IsDisplayDescription>
					<IsDisplayName>True</IsDisplayName>
					<Mandatory>False</Mandatory>
					<Multivalue>False</Multivalue>
					<ReadOnly>False</ReadOnly>
					<Unique>False</Unique>
					<TrackChanges>True</TrackChanges>
					<Settings />
				</FieldType>
				<FieldType>
					<Id>ChannelPublished</Id>
					<DataType>Boolean</DataType>
					<CVLId />
					<Name>
						<string>
							<value language="en">
								<![CDATA[Published]]>
							</value>
							<value language="nl">
								<![CDATA[Gepubliceerd]]>
							</value>
							<value language="fr">
								<![CDATA[Publié]]>
							</value>
							<value language="de">
								<![CDATA[Veröffentlicht]]>
							</value>
							<value language="sv">
								<![CDATA[Publicerad]]>
							</value>
						</string>
					</Name>
					<Description>
						<string />
					</Description>
					<CategoryId>General</CategoryId>
					<DefaultValue>False</DefaultValue>
					<Index>1</Index>
					<Hidden>False</Hidden>
					<ExcludeFromDefaultView>False</ExcludeFromDefaultView>
					<IsDisplayDescription>False</IsDisplayDescription>
					<IsDisplayName>False</IsDisplayName>
					<Mandatory>False</Mandatory>
					<Multivalue>False</Multivalue>
					<ReadOnly>True</ReadOnly>
					<Unique>False</Unique>
					<TrackChanges>True</TrackChanges>
					<Settings />
				</FieldType>
			</FieldTypes>
		</EntityType>
		<EntityType>
			<Id>ChannelNode</Id>
			<Name>
				<string>
					<value language="en">
						<![CDATA[Node]]>
					</value>
					<value language="nl">
						<![CDATA[Knooppunt]]>
					</value>
					<value language="fr">
						<![CDATA[Nœud]]>
					</value>
					<value language="de">
						<![CDATA[Knoten]]>
					</value>
					<value language="sv">
						<![CDATA[Nod]]>
					</value>
				</string>
			</Name>
			<IsLinkEntityType>False</IsLinkEntityType>
			<FieldTypes>
				<FieldType>
					<Id>ChannelNodeName</Id>
					<DataType>String</DataType>
					<CVLId />
					<Name>
						<string>
							<value language="en">
								<![CDATA[Name]]>
							</value>
							<value language="nl">
								<![CDATA[Naam]]>
							</value>
							<value language="fr">
								<![CDATA[Nom]]>
							</value>
							<value language="de">
								<![CDATA[Name]]>
							</value>
							<value language="sv">
								<![CDATA[Namn]]>
							</value>
						</string>
					</Name>
					<Description>
						<string />
					</Description>
					<CategoryId>General</CategoryId>
					<DefaultValue />
					<Index>0</Index>
					<Hidden>False</Hidden>
					<ExcludeFromDefaultView>False</ExcludeFromDefaultView>
					<IsDisplayDescription>False</IsDisplayDescription>
					<IsDisplayName>True</IsDisplayName>
					<Mandatory>False</Mandatory>
					<Multivalue>False</Multivalue>
					<ReadOnly>False</ReadOnly>
					<Unique>False</Unique>
					<TrackChanges>True</TrackChanges>
					<Settings />
				</FieldType>
			</FieldTypes>
		</EntityType>
		<EntityType>
			<Id>Configuration</Id>
			<Name>
				<string>
					<value language="en">
						<![CDATA[Configuration]]>
					</value>
					<value language="nl">
						<![CDATA[Configuratie]]>
					</value>
					<value language="fr">
						<![CDATA[Configuration]]>
					</value>
					<value language="de">
						<![CDATA[Konfiguration]]>
					</value>
					<value language="sv">
						<![CDATA[Konfiguration]]>
					</value>
				</string>
			</Name>
			<IsLinkEntityType>True</IsLinkEntityType>
			<FieldTypes>
				<FieldType>
					<Id>ConfigurationAmount</Id>
					<DataType>String</DataType>
					<CVLId />
					<Name>
						<string>
							<value language="en">
								<![CDATA[Amount]]>
							</value>
						</string>
					</Name>
					<Description>
						<string />
					</Description>
					<CategoryId>General</CategoryId>
					<DefaultValue />
					<Index>1</Index>
					<Hidden>False</Hidden>
					<ExcludeFromDefaultView>False</ExcludeFromDefaultView>
					<IsDisplayDescription>False</IsDisplayDescription>
					<IsDisplayName>True</IsDisplayName>
					<Mandatory>False</Mandatory>
					<Multivalue>False</Multivalue>
					<ReadOnly>False</ReadOnly>
					<Unique>False</Unique>
					<TrackChanges>True</TrackChanges>
					<Settings />
				</FieldType>
				<FieldType>
					<Id>ConfigurationIndustry</Id>
					<DataType>CVL</DataType>
					<CVLId>Industry</CVLId>
					<Name>
						<string>
							<value language="en">
								<![CDATA[Industry]]>
							</value>
						</string>
					</Name>
					<Description>
						<string />
					</Description>
					<CategoryId>General</CategoryId>
					<DefaultValue />
					<Index>2</Index>
					<Hidden>False</Hidden>
					<ExcludeFromDefaultView>False</ExcludeFromDefaultView>
					<IsDisplayDescription>False</IsDisplayDescription>
					<IsDisplayName>False</IsDisplayName>
					<Mandatory>True</Mandatory>
					<Multivalue>False</Multivalue>
					<ReadOnly>False</ReadOnly>
					<Unique>False</Unique>
					<TrackChanges>True</TrackChanges>
					<Settings />
				</FieldType>
				<FieldType>
					<Id>ConfigurationPart</Id>
					<DataType>CVL</DataType>
					<CVLId>TypeOfConfigurationPart</CVLId>
					<Name>
						<string>
							<value language="en">
								<![CDATA[Type]]>
							</value>
						</string>
					</Name>
					<Description>
						<string />
					</Description>
					<CategoryId>General</CategoryId>
					<DefaultValue />
					<Index>3</Index>
					<Hidden>False</Hidden>
					<ExcludeFromDefaultView>False</ExcludeFromDefaultView>
					<IsDisplayDescription>True</IsDisplayDescription>
					<IsDisplayName>False</IsDisplayName>
					<Mandatory>False</Mandatory>
					<Multivalue>False</Multivalue>
					<ReadOnly>False</ReadOnly>
					<Unique>False</Unique>
					<TrackChanges>True</TrackChanges>
					<Settings />
				</FieldType>
				<FieldType>
					<Id>ConfigurationRestriction</Id>
					<DataType>String</DataType>
					<CVLId />
					<Name>
						<string>
							<value language="en">
								<![CDATA[Restriction]]>
							</value>
						</string>
					</Name>
					<Description>
						<string />
					</Description>
					<CategoryId>General</CategoryId>
					<DefaultValue />
					<Index>4</Index>
					<Hidden>False</Hidden>
					<ExcludeFromDefaultView>False</ExcludeFromDefaultView>
					<IsDisplayDescription>False</IsDisplayDescription>
					<IsDisplayName>False</IsDisplayName>
					<Mandatory>False</Mandatory>
					<Multivalue>False</Multivalue>
					<ReadOnly>False</ReadOnly>
					<Unique>False</Unique>
					<TrackChanges>True</TrackChanges>
					<Settings />
				</FieldType>
			</FieldTypes>
		</EntityType>
		<EntityType>
			<Id>Endorsement</Id>
			<Name>
				<string>
					<value language="en">
						<![CDATA[Endorsement]]>
					</value>
					<value language="nl">
						<![CDATA[Bekrachtiging]]>
					</value>
					<value language="fr">
						<![CDATA[Approbation]]>
					</value>
					<value language="de">
						<![CDATA[Billigung]]>
					</value>
					<value language="sv">
						<![CDATA[Rekommendation]]>
					</value>
				</string>
			</Name>
			<IsLinkEntityType>True</IsLinkEntityType>
			<FieldTypes>
				<FieldType>
					<Id>EndorsementExpirationDate</Id>
					<DataType>DateTime</DataType>
					<CVLId />
					<Name>
						<string>
							<value language="en">
								<![CDATA[Valid to]]>
							</value>
							<value language="nl">
								<![CDATA[Geldig tot]]>
							</value>
							<value language="fr">
								<![CDATA[Valide jusqu’au]]>
							</value>
							<value language="de">
								<![CDATA[Gültig bis]]>
							</value>
							<value language="sv">
								<![CDATA[Giltigt till]]>
							</value>
						</string>
					</Name>
					<Description>
						<string />
					</Description>
					<CategoryId>General</CategoryId>
					<DefaultValue />
					<Index>3</Index>
					<Hidden>False</Hidden>
					<ExcludeFromDefaultView>False</ExcludeFromDefaultView>
					<IsDisplayDescription>False</IsDisplayDescription>
					<IsDisplayName>False</IsDisplayName>
					<Mandatory>False</Mandatory>
					<Multivalue>False</Multivalue>
					<ReadOnly>False</ReadOnly>
					<Unique>False</Unique>
					<TrackChanges>True</TrackChanges>
					<Settings />
				</FieldType>
				<FieldType>
					<Id>EndorsementQuote</Id>
					<DataType>LocaleString</DataType>
					<CVLId />
					<Name>
						<string>
							<value language="en">
								<![CDATA[Quote]]>
							</value>
							<value language="nl">
								<![CDATA[Citaat]]>
							</value>
							<value language="fr">
								<![CDATA[Citation]]>
							</value>
							<value language="de">
								<![CDATA[Zitat]]>
							</value>
							<value language="sv">
								<![CDATA[Citat]]>
							</value>
						</string>
					</Name>
					<Description>
						<string />
					</Description>
					<CategoryId>General</CategoryId>
					<DefaultValue />
					<Index>1</Index>
					<Hidden>False</Hidden>
					<ExcludeFromDefaultView>False</ExcludeFromDefaultView>
					<IsDisplayDescription>False</IsDisplayDescription>
					<IsDisplayName>False</IsDisplayName>
					<Mandatory>False</Mandatory>
					<Multivalue>False</Multivalue>
					<ReadOnly>False</ReadOnly>
					<Unique>False</Unique>
					<TrackChanges>True</TrackChanges>
					<Settings />
				</FieldType>
				<FieldType>
					<Id>EndorsementStartDate</Id>
					<DataType>DateTime</DataType>
					<CVLId />
					<Name>
						<string>
							<value language="en">
								<![CDATA[Valid from]]>
							</value>
							<value language="nl">
								<![CDATA[Geldig vanaf]]>
							</value>
							<value language="fr">
								<![CDATA[Valable à partir de]]>
							</value>
							<value language="de">
								<![CDATA[Gültig ab]]>
							</value>
							<value language="sv">
								<![CDATA[Giltigt från]]>
							</value>
						</string>
					</Name>
					<Description>
						<string />
					</Description>
					<CategoryId>General</CategoryId>
					<DefaultValue />
					<Index>2</Index>
					<Hidden>False</Hidden>
					<ExcludeFromDefaultView>False</ExcludeFromDefaultView>
					<IsDisplayDescription>False</IsDisplayDescription>
					<IsDisplayName>False</IsDisplayName>
					<Mandatory>False</Mandatory>
					<Multivalue>False</Multivalue>
					<ReadOnly>False</ReadOnly>
					<Unique>False</Unique>
					<TrackChanges>True</TrackChanges>
					<Settings />
				</FieldType>
			</FieldTypes>
		</EntityType>
		<EntityType>
			<Id>Instruction</Id>
			<Name>
				<string>
					<value language="en">
						<![CDATA[Instruction]]>
					</value>
					<value language="nl">
						<![CDATA[Instructie]]>
					</value>
					<value language="fr">
						<![CDATA[Instruction]]>
					</value>
					<value language="de">
						<![CDATA[Anleitung]]>
					</value>
					<value language="sv">
						<![CDATA[Instruktion]]>
					</value>
				</string>
			</Name>
			<IsLinkEntityType>False</IsLinkEntityType>
			<FieldTypes>
				<FieldType>
					<Id>InstructionName</Id>
					<DataType>LocaleString</DataType>
					<CVLId />
					<Name>
						<string>
							<value language="en">
								<![CDATA[Name]]>
							</value>
							<value language="nl">
								<![CDATA[Naam]]>
							</value>
							<value language="fr">
								<![CDATA[Nom]]>
							</value>
							<value language="de">
								<![CDATA[Name]]>
							</value>
							<value language="sv">
								<![CDATA[Namn]]>
							</value>
						</string>
					</Name>
					<Description>
						<string />
					</Description>
					<CategoryId>General</CategoryId>
					<DefaultValue />
					<Index>1</Index>
					<Hidden>False</Hidden>
					<ExcludeFromDefaultView>False</ExcludeFromDefaultView>
					<IsDisplayDescription>False</IsDisplayDescription>
					<IsDisplayName>True</IsDisplayName>
					<Mandatory>True</Mandatory>
					<Multivalue>False</Multivalue>
					<ReadOnly>False</ReadOnly>
					<Unique>False</Unique>
					<TrackChanges>True</TrackChanges>
					<Settings />
				</FieldType>
				<FieldType>
					<Id>InstructionPart1</Id>
					<DataType>LocaleString</DataType>
					<CVLId />
					<Name>
						<string>
							<value language="en">
								<![CDATA[Part 1]]>
							</value>
							<value language="nl">
								<![CDATA[Deel 1]]>
							</value>
							<value language="fr">
								<![CDATA[Partie 1]]>
							</value>
							<value language="de">
								<![CDATA[Teil 1]]>
							</value>
							<value language="sv">
								<![CDATA[Del 1]]>
							</value>
						</string>
					</Name>
					<Description>
						<string />
					</Description>
					<CategoryId>General</CategoryId>
					<DefaultValue />
					<Index>2</Index>
					<Hidden>False</Hidden>
					<ExcludeFromDefaultView>False</ExcludeFromDefaultView>
					<IsDisplayDescription>False</IsDisplayDescription>
					<IsDisplayName>False</IsDisplayName>
					<Mandatory>False</Mandatory>
					<Multivalue>False</Multivalue>
					<ReadOnly>False</ReadOnly>
					<Unique>False</Unique>
					<TrackChanges>True</TrackChanges>
					<Settings />
				</FieldType>
				<FieldType>
					<Id>InstructionPart2</Id>
					<DataType>LocaleString</DataType>
					<CVLId />
					<Name>
						<string>
							<value language="en">
								<![CDATA[Part 2]]>
							</value>
							<value language="nl">
								<![CDATA[Deel 2]]>
							</value>
							<value language="fr">
								<![CDATA[Partie 2]]>
							</value>
							<value language="de">
								<![CDATA[Teil 2]]>
							</value>
							<value language="sv">
								<![CDATA[Del 2]]>
							</value>
						</string>
					</Name>
					<Description>
						<string />
					</Description>
					<CategoryId>General</CategoryId>
					<DefaultValue />
					<Index>3</Index>
					<Hidden>False</Hidden>
					<ExcludeFromDefaultView>False</ExcludeFromDefaultView>
					<IsDisplayDescription>False</IsDisplayDescription>
					<IsDisplayName>False</IsDisplayName>
					<Mandatory>False</Mandatory>
					<Multivalue>False</Multivalue>
					<ReadOnly>False</ReadOnly>
					<Unique>False</Unique>
					<TrackChanges>True</TrackChanges>
					<Settings />
				</FieldType>
				<FieldType>
					<Id>InstructionWashingInstruction</Id>
					<DataType>CVL</DataType>
					<CVLId>FashionCare</CVLId>
					<Name>
						<string>
							<value language="en">
								<![CDATA[Washing Instructions]]>
							</value>
							<value language="nl">
								<![CDATA[Wasinstructies]]>
							</value>
							<value language="fr">
								<![CDATA[Instructions de lavage]]>
							</value>
							<value language="de">
								<![CDATA[Waschanleitung]]>
							</value>
							<value language="sv">
								<![CDATA[Tvättråd]]>
							</value>
						</string>
					</Name>
					<Description>
						<string />
					</Description>
					<CategoryId>General</CategoryId>
					<DefaultValue />
					<Index>4</Index>
					<Hidden>False</Hidden>
					<ExcludeFromDefaultView>True</ExcludeFromDefaultView>
					<IsDisplayDescription>False</IsDisplayDescription>
					<IsDisplayName>False</IsDisplayName>
					<Mandatory>False</Mandatory>
					<Multivalue>True</Multivalue>
					<ReadOnly>False</ReadOnly>
					<Unique>False</Unique>
					<TrackChanges>True</TrackChanges>
					<Settings />
				</FieldType>
			</FieldTypes>
		</EntityType>
		<EntityType>
			<Id>Item</Id>
			<Name>
				<string>
					<value language="en">
						<![CDATA[Item]]>
					</value>
					<value language="nl">
						<![CDATA[Item]]>
					</value>
					<value language="fr">
						<![CDATA[Élément]]>
					</value>
					<value language="de">
						<![CDATA[Artikel]]>
					</value>
					<value language="sv">
						<![CDATA[Artikel]]>
					</value>
				</string>
			</Name>
			<IsLinkEntityType>False</IsLinkEntityType>
			<FieldTypes>
				<FieldType>
					<Id>itemDIYCapacity</Id>
					<DataType>Double</DataType>
					<CVLId />
					<Name>
						<string>
							<value language="en">
								<![CDATA[Battery capacity]]>
							</value>
							<value language="nl">
								<![CDATA[Batterijcapaciteit]]>
							</value>
							<value language="fr">
								<![CDATA[Capacité de la batterie]]>
							</value>
							<value language="de">
								<![CDATA[Batteriekapazität]]>
							</value>
							<value language="sv">
								<![CDATA[Batterikapacitet]]>
							</value>
						</string>
					</Name>
					<Description>
						<string />
					</Description>
					<CategoryId>ProductInformation</CategoryId>
					<DefaultValue />
					<Index>12</Index>
					<Hidden>False</Hidden>
					<ExcludeFromDefaultView>True</ExcludeFromDefaultView>
					<IsDisplayDescription>False</IsDisplayDescription>
					<IsDisplayName>False</IsDisplayName>
					<Mandatory>False</Mandatory>
					<Multivalue>False</Multivalue>
					<ReadOnly>False</ReadOnly>
					<Unique>False</Unique>
					<TrackChanges>True</TrackChanges>
					<Settings />
				</FieldType>
				<FieldType>
					<Id>ItemDIYCuttingWidth</Id>
					<DataType>CVL</DataType>
					<CVLId>CuttingWidthin</CVLId>
					<Name>
						<string>
							<value language="en">
								<![CDATA[Cutting Width]]>
							</value>
							<value language="nl">
								<![CDATA[snijbreedte]]>
							</value>
							<value language="fr">
								<![CDATA[largeur de coupe]]>
							</value>
							<value language="de">
								<![CDATA[Schnittbreite]]>
							</value>
							<value language="sv">
								<![CDATA[klippbredd]]>
							</value>
						</string>
					</Name>
					<Description>
						<string />
					</Description>
					<CategoryId>ProductInformation</CategoryId>
					<DefaultValue />
					<Index>26</Index>
					<Hidden>False</Hidden>
					<ExcludeFromDefaultView>True</ExcludeFromDefaultView>
					<IsDisplayDescription>False</IsDisplayDescription>
					<IsDisplayName>False</IsDisplayName>
					<Mandatory>False</Mandatory>
					<Multivalue>False</Multivalue>
					<ReadOnly>False</ReadOnly>
					<Unique>False</Unique>
					<TrackChanges>True</TrackChanges>
					<Settings />
				</FieldType>
				<FieldType>
					<Id>ItemDIYDesc</Id>
					<DataType>String</DataType>
					<CVLId />
					<Name>
						<string>
							<value language="en">
								<![CDATA[Description]]>
							</value>
							<value language="nl">
								<![CDATA[Beschrijving]]>
							</value>
							<value language="fr">
								<![CDATA[Description]]>
							</value>
							<value language="de">
								<![CDATA[Beschreibung]]>
							</value>
							<value language="sv">
								<![CDATA[Beskrivning]]>
							</value>
						</string>
					</Name>
					<Description>
						<string />
					</Description>
					<CategoryId>ProductInformation</CategoryId>
					<DefaultValue />
					<Index>23</Index>
					<Hidden>False</Hidden>
					<ExcludeFromDefaultView>True</ExcludeFromDefaultView>
					<IsDisplayDescription>False</IsDisplayDescription>
					<IsDisplayName>False</IsDisplayName>
					<Mandatory>False</Mandatory>
					<Multivalue>False</Multivalue>
					<ReadOnly>False</ReadOnly>
					<Unique>False</Unique>
					<TrackChanges>True</TrackChanges>
					<Settings />
				</FieldType>
				<FieldType>
					<Id>ItemDIYHeight</Id>
					<DataType>String</DataType>
					<CVLId />
					<Name>
						<string>
							<value language="en">
								<![CDATA[Height]]>
							</value>
							<value language="nl">
								<![CDATA[Hoogte]]>
							</value>
							<value language="fr">
								<![CDATA[Hauteur]]>
							</value>
							<value language="de">
								<![CDATA[Höhe]]>
							</value>
							<value language="sv">
								<![CDATA[Höjd]]>
							</value>
						</string>
					</Name>
					<Description>
						<string />
					</Description>
					<CategoryId>ProductInformation</CategoryId>
					<DefaultValue />
					<Index>13</Index>
					<Hidden>False</Hidden>
					<ExcludeFromDefaultView>True</ExcludeFromDefaultView>
					<IsDisplayDescription>False</IsDisplayDescription>
					<IsDisplayName>False</IsDisplayName>
					<Mandatory>False</Mandatory>
					<Multivalue>False</Multivalue>
					<ReadOnly>False</ReadOnly>
					<Unique>False</Unique>
					<TrackChanges>True</TrackChanges>
					<Settings />
				</FieldType>
				<FieldType>
					<Id>ItemDIYLawnMowerType</Id>
					<DataType>CVL</DataType>
					<CVLId>LawnMowerType</CVLId>
					<Name>
						<string>
							<value language="en">
								<![CDATA[Lawn Mower Type]]>
							</value>
							<value language="nl">
								<![CDATA[Grasmaaier Type]]>
							</value>
							<value language="fr">
								<![CDATA[Type de tondeuse à gazon]]>
							</value>
							<value language="de">
								<![CDATA[Rasenmäher Typ]]>
							</value>
							<value language="sv">
								<![CDATA[Lawn Mower Typ]]>
							</value>
						</string>
					</Name>
					<Description>
						<string />
					</Description>
					<CategoryId>ProductInformation</CategoryId>
					<DefaultValue />
					<Index>25</Index>
					<Hidden>False</Hidden>
					<ExcludeFromDefaultView>True</ExcludeFromDefaultView>
					<IsDisplayDescription>False</IsDisplayDescription>
					<IsDisplayName>False</IsDisplayName>
					<Mandatory>False</Mandatory>
					<Multivalue>False</Multivalue>
					<ReadOnly>False</ReadOnly>
					<Unique>False</Unique>
					<TrackChanges>True</TrackChanges>
					<Settings />
				</FieldType>
				<FieldType>
					<Id>ItemDIYLength</Id>
					<DataType>String</DataType>
					<CVLId />
					<Name>
						<string>
							<value language="en">
								<![CDATA[Length]]>
							</value>
							<value language="nl">
								<![CDATA[Lengte]]>
							</value>
							<value language="fr">
								<![CDATA[Longueur]]>
							</value>
							<value language="de">
								<![CDATA[Länge]]>
							</value>
							<value language="sv">
								<![CDATA[Längd]]>
							</value>
						</string>
					</Name>
					<Description>
						<string />
					</Description>
					<CategoryId>ProductInformation</CategoryId>
					<DefaultValue />
					<Index>15</Index>
					<Hidden>False</Hidden>
					<ExcludeFromDefaultView>True</ExcludeFromDefaultView>
					<IsDisplayDescription>False</IsDisplayDescription>
					<IsDisplayName>False</IsDisplayName>
					<Mandatory>False</Mandatory>
					<Multivalue>False</Multivalue>
					<ReadOnly>False</ReadOnly>
					<Unique>False</Unique>
					<TrackChanges>True</TrackChanges>
					<Settings />
				</FieldType>
				<FieldType>
					<Id>ItemDIYMarket</Id>
					<DataType>CVL</DataType>
					<CVLId>Market</CVLId>
					<Name>
						<string>
							<value language="en">
								<![CDATA[Market]]>
							</value>
							<value language="nl">
								<![CDATA[Markt]]>
							</value>
							<value language="fr">
								<![CDATA[Marché]]>
							</value>
							<value language="de">
								<![CDATA[Markt]]>
							</value>
							<value language="sv">
								<![CDATA[Marknadsföra]]>
							</value>
						</string>
					</Name>
					<Description>
						<string />
					</Description>
					<CategoryId>General</CategoryId>
					<DefaultValue>de;dk;fi;gb;nl;no;se;us</DefaultValue>
					<Index>10</Index>
					<Hidden>False</Hidden>
					<ExcludeFromDefaultView>True</ExcludeFromDefaultView>
					<IsDisplayDescription>False</IsDisplayDescription>
					<IsDisplayName>False</IsDisplayName>
					<Mandatory>False</Mandatory>
					<Multivalue>True</Multivalue>
					<ReadOnly>False</ReadOnly>
					<Unique>False</Unique>
					<TrackChanges>True</TrackChanges>
					<Settings />
				</FieldType>
				<FieldType>
					<Id>ItemDIYVoltage</Id>
					<DataType>String</DataType>
					<CVLId />
					<Name>
						<string>
							<value language="en">
								<![CDATA[Voltage]]>
							</value>
							<value language="nl">
								<![CDATA[voltage]]>
							</value>
							<value language="fr">
								<![CDATA[Tension]]>
							</value>
							<value language="de">
								<![CDATA[Spannung]]>
							</value>
							<value language="sv">
								<![CDATA[Spänning]]>
							</value>
						</string>
					</Name>
					<Description>
						<string />
					</Description>
					<CategoryId>ProductInformation</CategoryId>
					<DefaultValue />
					<Index>11</Index>
					<Hidden>False</Hidden>
					<ExcludeFromDefaultView>True</ExcludeFromDefaultView>
					<IsDisplayDescription>False</IsDisplayDescription>
					<IsDisplayName>False</IsDisplayName>
					<Mandatory>False</Mandatory>
					<Multivalue>False</Multivalue>
					<ReadOnly>False</ReadOnly>
					<Unique>False</Unique>
					<TrackChanges>True</TrackChanges>
					<Settings />
				</FieldType>
				<FieldType>
					<Id>ItemDIYWeight</Id>
					<DataType>Double</DataType>
					<CVLId />
					<Name>
						<string>
							<value language="en">
								<![CDATA[Weight]]>
							</value>
							<value language="nl">
								<![CDATA[Gewicht]]>
							</value>
							<value language="fr">
								<![CDATA[Poids]]>
							</value>
							<value language="de">
								<![CDATA[Gewicht]]>
							</value>
							<value language="sv">
								<![CDATA[Vikt]]>
							</value>
						</string>
					</Name>
					<Description>
						<string />
					</Description>
					<CategoryId>ProductInformation</CategoryId>
					<DefaultValue />
					<Index>16</Index>
					<Hidden>False</Hidden>
					<ExcludeFromDefaultView>True</ExcludeFromDefaultView>
					<IsDisplayDescription>False</IsDisplayDescription>
					<IsDisplayName>False</IsDisplayName>
					<Mandatory>False</Mandatory>
					<Multivalue>False</Multivalue>
					<ReadOnly>False</ReadOnly>
					<Unique>False</Unique>
					<TrackChanges>True</TrackChanges>
					<Settings />
				</FieldType>
				<FieldType>
					<Id>ItemDIYWidth</Id>
					<DataType>String</DataType>
					<CVLId />
					<Name>
						<string>
							<value language="en">
								<![CDATA[Width]]>
							</value>
							<value language="nl">
								<![CDATA[Breedte]]>
							</value>
							<value language="fr">
								<![CDATA[Largeur]]>
							</value>
							<value language="de">
								<![CDATA[Breite]]>
							</value>
							<value language="sv">
								<![CDATA[Bredd]]>
							</value>
						</string>
					</Name>
					<Description>
						<string />
					</Description>
					<CategoryId>ProductInformation</CategoryId>
					<DefaultValue />
					<Index>14</Index>
					<Hidden>False</Hidden>
					<ExcludeFromDefaultView>True</ExcludeFromDefaultView>
					<IsDisplayDescription>False</IsDisplayDescription>
					<IsDisplayName>False</IsDisplayName>
					<Mandatory>False</Mandatory>
					<Multivalue>False</Multivalue>
					<ReadOnly>False</ReadOnly>
					<Unique>False</Unique>
					<TrackChanges>True</TrackChanges>
					<Settings />
				</FieldType>
				<FieldType>
					<Id>ItemFashionSeason</Id>
					<DataType>CVL</DataType>
					<CVLId>ItemSeason</CVLId>
					<Name>
						<string>
							<value language="en">
								<![CDATA[Season]]>
							</value>
							<value language="nl">
								<![CDATA[Seizoen]]>
							</value>
							<value language="fr">
								<![CDATA[Saison]]>
							</value>
							<value language="de">
								<![CDATA[Saison]]>
							</value>
							<value language="sv">
								<![CDATA[Säsong]]>
							</value>
						</string>
					</Name>
					<Description>
						<string />
					</Description>
					<CategoryId>ProductInformation</CategoryId>
					<DefaultValue />
					<Index>7</Index>
					<Hidden>False</Hidden>
					<ExcludeFromDefaultView>True</ExcludeFromDefaultView>
					<IsDisplayDescription>False</IsDisplayDescription>
					<IsDisplayName>False</IsDisplayName>
					<Mandatory>False</Mandatory>
					<Multivalue>True</Multivalue>
					<ReadOnly>False</ReadOnly>
					<Unique>False</Unique>
					<TrackChanges>False</TrackChanges>
					<Settings />
				</FieldType>
				<FieldType>
					<Id>ItemFashionSize</Id>
					<DataType>String</DataType>
					<CVLId />
					<Name>
						<string>
							<value language="en">
								<![CDATA[Size]]>
							</value>
							<value language="nl">
								<![CDATA[Grootte]]>
							</value>
							<value language="fr">
								<![CDATA[Taille]]>
							</value>
							<value language="de">
								<![CDATA[Größe]]>
							</value>
							<value language="sv">
								<![CDATA[Storlek]]>
							</value>
						</string>
					</Name>
					<Description>
						<string />
					</Description>
					<CategoryId>ProductInformation</CategoryId>
					<DefaultValue />
					<Index>6</Index>
					<Hidden>False</Hidden>
					<ExcludeFromDefaultView>True</ExcludeFromDefaultView>
					<IsDisplayDescription>False</IsDisplayDescription>
					<IsDisplayName>False</IsDisplayName>
					<Mandatory>False</Mandatory>
					<Multivalue>False</Multivalue>
					<ReadOnly>False</ReadOnly>
					<Unique>False</Unique>
					<TrackChanges>True</TrackChanges>
					<Settings />
				</FieldType>
				<FieldType>
					<Id>ItemFashionSizeXML</Id>
					<DataType>Xml</DataType>
					<CVLId />
					<Name>
						<string>
							<value language="en">
								<![CDATA[Size XML]]>
							</value>
							<value language="nl">
								<![CDATA[Grootte XML]]>
							</value>
							<value language="fr">
								<![CDATA[Taille XML]]>
							</value>
							<value language="de">
								<![CDATA[Größe XML]]>
							</value>
							<value language="sv">
								<![CDATA[Storlek XML]]>
							</value>
						</string>
					</Name>
					<Description>
						<string />
					</Description>
					<CategoryId>ProductInformation</CategoryId>
					<DefaultValue />
					<Index>9</Index>
					<Hidden>False</Hidden>
					<ExcludeFromDefaultView>True</ExcludeFromDefaultView>
					<IsDisplayDescription>False</IsDisplayDescription>
					<IsDisplayName>False</IsDisplayName>
					<Mandatory>False</Mandatory>
					<Multivalue>False</Multivalue>
					<ReadOnly>False</ReadOnly>
					<Unique>False</Unique>
					<TrackChanges>False</TrackChanges>
					<Settings />
				</FieldType>
				<FieldType>
					<Id>ItemFashionTrendColor</Id>
					<DataType>LocaleString</DataType>
					<CVLId />
					<Name>
						<string>
							<value language="en">
								<![CDATA[Trend Color]]>
							</value>
							<value language="nl">
								<![CDATA[Trend kleur]]>
							</value>
							<value language="fr">
								<![CDATA[Couleur tendance]]>
							</value>
							<value language="de">
								<![CDATA[Trendfarbe]]>
							</value>
							<value language="sv">
								<![CDATA[Trendfärg]]>
							</value>
						</string>
					</Name>
					<Description>
						<string />
					</Description>
					<CategoryId>ProductInformation</CategoryId>
					<DefaultValue />
					<Index>22</Index>
					<Hidden>False</Hidden>
					<ExcludeFromDefaultView>True</ExcludeFromDefaultView>
					<IsDisplayDescription>False</IsDisplayDescription>
					<IsDisplayName>False</IsDisplayName>
					<Mandatory>False</Mandatory>
					<Multivalue>False</Multivalue>
					<ReadOnly>False</ReadOnly>
					<Unique>False</Unique>
					<TrackChanges>True</TrackChanges>
					<Settings />
				</FieldType>
				<FieldType>
					<Id>ItemFashionWeight</Id>
					<DataType>Double</DataType>
					<CVLId />
					<Name>
						<string>
							<value language="en">
								<![CDATA[Weight]]>
							</value>
							<value language="nl">
								<![CDATA[Gewicht]]>
							</value>
							<value language="fr">
								<![CDATA[Poids]]>
							</value>
							<value language="de">
								<![CDATA[Gewicht]]>
							</value>
							<value language="sv">
								<![CDATA[Vikt]]>
							</value>
						</string>
					</Name>
					<Description>
						<string />
					</Description>
					<CategoryId>ProductInformation</CategoryId>
					<DefaultValue />
					<Index>8</Index>
					<Hidden>False</Hidden>
					<ExcludeFromDefaultView>True</ExcludeFromDefaultView>
					<IsDisplayDescription>False</IsDisplayDescription>
					<IsDisplayName>False</IsDisplayName>
					<Mandatory>False</Mandatory>
					<Multivalue>False</Multivalue>
					<ReadOnly>False</ReadOnly>
					<Unique>False</Unique>
					<TrackChanges>True</TrackChanges>
					<Settings />
				</FieldType>
				<FieldType>
					<Id>ItemIndustry</Id>
					<DataType>CVL</DataType>
					<CVLId>Industry</CVLId>
					<Name>
						<string>
							<value language="en">
								<![CDATA[Industry]]>
							</value>
							<value language="nl">
								<![CDATA[Industrie]]>
							</value>
							<value language="fr">
								<![CDATA[Secteur]]>
							</value>
							<value language="de">
								<![CDATA[Branche]]>
							</value>
							<value language="sv">
								<![CDATA[Industri]]>
							</value>
						</string>
					</Name>
					<Description>
						<string />
					</Description>
					<CategoryId>General</CategoryId>
					<DefaultValue />
					<Index>3</Index>
					<Hidden>False</Hidden>
					<ExcludeFromDefaultView>False</ExcludeFromDefaultView>
					<IsDisplayDescription>False</IsDisplayDescription>
					<IsDisplayName>False</IsDisplayName>
					<Mandatory>True</Mandatory>
					<Multivalue>False</Multivalue>
					<ReadOnly>False</ReadOnly>
					<Unique>False</Unique>
					<TrackChanges>False</TrackChanges>
					<Settings />
				</FieldType>
				<FieldType>
					<Id>ItemManufactType</Id>
					<DataType>CVL</DataType>
					<CVLId>ItemType</CVLId>
					<Name>
						<string>
							<value language="en">
								<![CDATA[Tank Type]]>
							</value>
							<value language="nl">
								<![CDATA[Tanktype]]>
							</value>
							<value language="fr">
								<![CDATA[Type de réservoir]]>
							</value>
							<value language="de">
								<![CDATA[Tank Typ]]>
							</value>
							<value language="sv">
								<![CDATA[Tanktyp]]>
							</value>
						</string>
					</Name>
					<Description>
						<string />
					</Description>
					<CategoryId>ProductInformation</CategoryId>
					<DefaultValue />
					<Index>18</Index>
					<Hidden>False</Hidden>
					<ExcludeFromDefaultView>True</ExcludeFromDefaultView>
					<IsDisplayDescription>False</IsDisplayDescription>
					<IsDisplayName>False</IsDisplayName>
					<Mandatory>False</Mandatory>
					<Multivalue>False</Multivalue>
					<ReadOnly>False</ReadOnly>
					<Unique>False</Unique>
					<TrackChanges>True</TrackChanges>
					<Settings />
				</FieldType>
				<FieldType>
					<Id>ItemManufacturingSolarConnectionsGWRange</Id>
					<DataType>String</DataType>
					<CVLId />
					<Name>
						<string>
							<value language="en">
								<![CDATA[Ground Wire Range]]>
							</value>
							<value language="nl">
								<![CDATA[Gronddraadbereik]]>
							</value>
							<value language="fr">
								<![CDATA[Rez-de-Gamme Fil]]>
							</value>
							<value language="de">
								<![CDATA[Erdungskabel Bereich]]>
							</value>
							<value language="sv">
								<![CDATA[Jordledning Range]]>
							</value>
						</string>
					</Name>
					<Description>
						<string />
					</Description>
					<CategoryId>ProductInformation</CategoryId>
					<DefaultValue />
					<Index>20</Index>
					<Hidden>False</Hidden>
					<ExcludeFromDefaultView>True</ExcludeFromDefaultView>
					<IsDisplayDescription>False</IsDisplayDescription>
					<IsDisplayName>False</IsDisplayName>
					<Mandatory>False</Mandatory>
					<Multivalue>False</Multivalue>
					<ReadOnly>False</ReadOnly>
					<Unique>False</Unique>
					<TrackChanges>True</TrackChanges>
					<Settings />
				</FieldType>
				<FieldType>
					<Id>ItemManufacturingSolarConnectionsHexSize</Id>
					<DataType>String</DataType>
					<CVLId />
					<Name>
						<string>
							<value language="en">
								<![CDATA[Hex size]]>
							</value>
							<value language="nl">
								<![CDATA[Hex formaat]]>
							</value>
							<value language="fr">
								<![CDATA[Taille Hex]]>
							</value>
							<value language="de">
								<![CDATA[Hex Größe]]>
							</value>
							<value language="sv">
								<![CDATA[Hex storlek]]>
							</value>
						</string>
					</Name>
					<Description>
						<string />
					</Description>
					<CategoryId>ProductInformation</CategoryId>
					<DefaultValue />
					<Index>19</Index>
					<Hidden>False</Hidden>
					<ExcludeFromDefaultView>True</ExcludeFromDefaultView>
					<IsDisplayDescription>False</IsDisplayDescription>
					<IsDisplayName>False</IsDisplayName>
					<Mandatory>False</Mandatory>
					<Multivalue>False</Multivalue>
					<ReadOnly>False</ReadOnly>
					<Unique>False</Unique>
					<TrackChanges>True</TrackChanges>
					<Settings />
				</FieldType>
				<FieldType>
					<Id>ItemNumber</Id>
					<DataType>String</DataType>
					<CVLId />
					<Name>
						<string>
							<value language="en">
								<![CDATA[Item Number]]>
							</value>
							<value language="nl">
								<![CDATA[Itemnummer]]>
							</value>
							<value language="fr">
								<![CDATA[Numéro d'élément]]>
							</value>
							<value language="de">
								<![CDATA[Artikelnummer]]>
							</value>
							<value language="sv">
								<![CDATA[Artikelnummer]]>
							</value>
						</string>
					</Name>
					<Description>
						<string />
					</Description>
					<CategoryId>ERPInformation</CategoryId>
					<DefaultValue />
					<Index>1</Index>
					<Hidden>False</Hidden>
					<ExcludeFromDefaultView>False</ExcludeFromDefaultView>
					<IsDisplayDescription>False</IsDisplayDescription>
					<IsDisplayName>True</IsDisplayName>
					<Mandatory>True</Mandatory>
					<Multivalue>False</Multivalue>
					<ReadOnly>False</ReadOnly>
					<Unique>True</Unique>
					<TrackChanges>True</TrackChanges>
					<Settings>
						<Setting>
							<SettingsKey>ShowInEntityOverview</SettingsKey>
							<SettingsValue>
								<![CDATA[True]]>
							</SettingsValue>
						</Setting>
					</Settings>
				</FieldType>
				<FieldType>
					<Id>ItemStatus</Id>
					<DataType>CVL</DataType>
					<CVLId>ItemStatus</CVLId>
					<Name>
						<string>
							<value language="en">
								<![CDATA[Status]]>
							</value>
							<value language="nl">
								<![CDATA[Toestand]]>
							</value>
							<value language="fr">
								<![CDATA[État]]>
							</value>
							<value language="de">
								<![CDATA[Status]]>
							</value>
							<value language="sv">
								<![CDATA[Status]]>
							</value>
						</string>
					</Name>
					<Description>
						<string />
					</Description>
					<CategoryId>Statusinformation</CategoryId>
					<DefaultValue />
					<Index>5</Index>
					<Hidden>False</Hidden>
					<ExcludeFromDefaultView>False</ExcludeFromDefaultView>
					<IsDisplayDescription>False</IsDisplayDescription>
					<IsDisplayName>False</IsDisplayName>
					<Mandatory>False</Mandatory>
					<Multivalue>False</Multivalue>
					<ReadOnly>False</ReadOnly>
					<Unique>False</Unique>
					<TrackChanges>True</TrackChanges>
					<Settings>
						<Setting>
							<SettingsKey>ShowInEntityOverview</SettingsKey>
							<SettingsValue>
								<![CDATA[True]]>
							</SettingsValue>
						</Setting>
					</Settings>
				</FieldType>
				<FieldType>
					<Id>ItemUPCcode</Id>
					<DataType>String</DataType>
					<CVLId />
					<Name>
						<string>
							<value language="en">
								<![CDATA[UPC]]>
							</value>
						</string>
					</Name>
					<Description>
						<string />
					</Description>
					<CategoryId>ERPInformation</CategoryId>
					<DefaultValue />
					<Index>2</Index>
					<Hidden>False</Hidden>
					<ExcludeFromDefaultView>False</ExcludeFromDefaultView>
					<IsDisplayDescription>False</IsDisplayDescription>
					<IsDisplayName>False</IsDisplayName>
					<Mandatory>False</Mandatory>
					<Multivalue>False</Multivalue>
					<ReadOnly>False</ReadOnly>
					<Unique>False</Unique>
					<TrackChanges>True</TrackChanges>
					<Settings>
						<Setting>
							<SettingsKey>ShowInEntityOverview</SettingsKey>
							<SettingsValue>
								<![CDATA[True]]>
							</SettingsValue>
						</Setting>
					</Settings>
				</FieldType>
				<FieldType>
					<Id>ItemVariant</Id>
					<DataType>CVL</DataType>
					<CVLId>ItemVariant</CVLId>
					<Name>
						<string>
							<value language="en">
								<![CDATA[Variant]]>
							</value>
							<value language="nl">
								<![CDATA[Variant]]>
							</value>
							<value language="fr">
								<![CDATA[Une variante]]>
							</value>
							<value language="de">
								<![CDATA[Variante]]>
							</value>
							<value language="sv">
								<![CDATA[Variant]]>
							</value>
						</string>
					</Name>
					<Description>
						<string>
							<value language="en">
								<![CDATA[This shows different variants of the product, for Fashion/Retail this would for instance be the color.]]>
							</value>
							<value language="nl">
								<![CDATA[Dit toont verschillende varianten van het product, voor Fashion / Retail zou bijvoorbeeld zijn de kleur.]]>
							</value>
							<value language="fr">
								<![CDATA[Cela montre différentes variantes du produit, de la mode / Retail cela, par exemple, être la couleur.]]>
							</value>
							<value language="de">
								<![CDATA[Dies zeigt verschiedene Varianten des Produktes, für Fashion / Retail dies zum Beispiel die Farbe sein würde.]]>
							</value>
							<value language="sv">
								<![CDATA[Detta visar olika varianter av produkten, för mode / butik skulle detta till exempel vara färg.]]>
							</value>
						</string>
					</Description>
					<CategoryId>ProductInformation</CategoryId>
					<DefaultValue />
					<Index>4</Index>
					<Hidden>False</Hidden>
					<ExcludeFromDefaultView>True</ExcludeFromDefaultView>
					<IsDisplayDescription>True</IsDisplayDescription>
					<IsDisplayName>False</IsDisplayName>
					<Mandatory>False</Mandatory>
					<Multivalue>True</Multivalue>
					<ReadOnly>False</ReadOnly>
					<Unique>False</Unique>
					<TrackChanges>False</TrackChanges>
					<Settings />
				</FieldType>
				<FieldType>
					<Id>ItenManufactureCapacity</Id>
					<DataType>CVL</DataType>
					<CVLId>ItemCapacity</CVLId>
					<Name>
						<string>
							<value language="en">
								<![CDATA[Capacity]]>
							</value>
							<value language="nl">
								<![CDATA[Capaciteit]]>
							</value>
							<value language="fr">
								<![CDATA[Capacité]]>
							</value>
							<value language="de">
								<![CDATA[Kapazität]]>
							</value>
							<value language="sv">
								<![CDATA[Kapacitet]]>
							</value>
						</string>
					</Name>
					<Description>
						<string />
					</Description>
					<CategoryId>ProductInformation</CategoryId>
					<DefaultValue />
					<Index>17</Index>
					<Hidden>False</Hidden>
					<ExcludeFromDefaultView>True</ExcludeFromDefaultView>
					<IsDisplayDescription>False</IsDisplayDescription>
					<IsDisplayName>False</IsDisplayName>
					<Mandatory>False</Mandatory>
					<Multivalue>False</Multivalue>
					<ReadOnly>False</ReadOnly>
					<Unique>False</Unique>
					<TrackChanges>True</TrackChanges>
					<Settings />
				</FieldType>
			</FieldTypes>
		</EntityType>
		<EntityType>
			<Id>MediaChannel</Id>
			<Name>
				<string>
					<value language="en">
						<![CDATA[Media Channel]]>
					</value>
				</string>
			</Name>
			<IsLinkEntityType>False</IsLinkEntityType>
			<FieldTypes>
				<FieldType>
					<Id>MediaChannelEndDate</Id>
					<DataType>DateTime</DataType>
					<CVLId />
					<Name>
						<string>
							<value language="en">
								<![CDATA[End Date]]>
							</value>
						</string>
					</Name>
					<Description>
						<string />
					</Description>
					<CategoryId>General</CategoryId>
					<DefaultValue />
					<Index>3</Index>
					<Hidden>False</Hidden>
					<ExcludeFromDefaultView>False</ExcludeFromDefaultView>
					<IsDisplayDescription>False</IsDisplayDescription>
					<IsDisplayName>False</IsDisplayName>
					<Mandatory>False</Mandatory>
					<Multivalue>False</Multivalue>
					<ReadOnly>False</ReadOnly>
					<Unique>False</Unique>
					<TrackChanges>True</TrackChanges>
					<Settings>
						<Setting>
							<SettingsKey>IncludedInPlannerTooltip</SettingsKey>
							<SettingsValue>
								<![CDATA[true]]>
							</SettingsValue>
						</Setting>
					</Settings>
				</FieldType>
				<FieldType>
					<Id>MediaChannelId</Id>
					<DataType>String</DataType>
					<CVLId />
					<Name>
						<string>
							<value language="en">
								<![CDATA[Id]]>
							</value>
						</string>
					</Name>
					<Description>
						<string />
					</Description>
					<CategoryId>General</CategoryId>
					<DefaultValue />
					<Index>10</Index>
					<Hidden>False</Hidden>
					<ExcludeFromDefaultView>False</ExcludeFromDefaultView>
					<IsDisplayDescription>False</IsDisplayDescription>
					<IsDisplayName>False</IsDisplayName>
					<Mandatory>False</Mandatory>
					<Multivalue>False</Multivalue>
					<ReadOnly>False</ReadOnly>
					<Unique>True</Unique>
					<TrackChanges>True</TrackChanges>
					<Settings />
				</FieldType>
				<FieldType>
					<Id>MediaChannellssueDate</Id>
					<DataType>DateTime</DataType>
					<CVLId />
					<Name>
						<string>
							<value language="en">
								<![CDATA[Issue date]]>
							</value>
						</string>
					</Name>
					<Description>
						<string />
					</Description>
					<CategoryId>General</CategoryId>
					<DefaultValue />
					<Index>4</Index>
					<Hidden>False</Hidden>
					<ExcludeFromDefaultView>False</ExcludeFromDefaultView>
					<IsDisplayDescription>False</IsDisplayDescription>
					<IsDisplayName>False</IsDisplayName>
					<Mandatory>False</Mandatory>
					<Multivalue>False</Multivalue>
					<ReadOnly>False</ReadOnly>
					<Unique>False</Unique>
					<TrackChanges>True</TrackChanges>
					<Settings />
				</FieldType>
				<FieldType>
					<Id>MediaChannelMarket</Id>
					<DataType>CVL</DataType>
					<CVLId>Market</CVLId>
					<Name>
						<string>
							<value language="en">
								<![CDATA[Markets]]>
							</value>
						</string>
					</Name>
					<Description>
						<string />
					</Description>
					<CategoryId>General</CategoryId>
					<DefaultValue />
					<Index>5</Index>
					<Hidden>False</Hidden>
					<ExcludeFromDefaultView>False</ExcludeFromDefaultView>
					<IsDisplayDescription>False</IsDisplayDescription>
					<IsDisplayName>False</IsDisplayName>
					<Mandatory>False</Mandatory>
					<Multivalue>True</Multivalue>
					<ReadOnly>False</ReadOnly>
					<Unique>False</Unique>
					<TrackChanges>True</TrackChanges>
					<Settings>
						<Setting>
							<SettingsKey>IncludedInPlannerTooltip</SettingsKey>
							<SettingsValue>
								<![CDATA[true]]>
							</SettingsValue>
						</Setting>
					</Settings>
				</FieldType>
				<FieldType>
					<Id>MediaChannelMediaChannel</Id>
					<DataType>CVL</DataType>
					<CVLId>MediaChannel</CVLId>
					<Name>
						<string>
							<value language="en">
								<![CDATA[Media Channel]]>
							</value>
						</string>
					</Name>
					<Description>
						<string />
					</Description>
					<CategoryId>General</CategoryId>
					<DefaultValue />
					<Index>1</Index>
					<Hidden>False</Hidden>
					<ExcludeFromDefaultView>False</ExcludeFromDefaultView>
					<IsDisplayDescription>False</IsDisplayDescription>
					<IsDisplayName>True</IsDisplayName>
					<Mandatory>False</Mandatory>
					<Multivalue>False</Multivalue>
					<ReadOnly>False</ReadOnly>
					<Unique>False</Unique>
					<TrackChanges>True</TrackChanges>
					<Settings>
						<Setting>
							<SettingsKey>IncludedInPlannerTooltip</SettingsKey>
							<SettingsValue>
								<![CDATA[true]]>
							</SettingsValue>
						</Setting>
						<Setting>
							<SettingsKey>PlannerColorConfig</SettingsKey>
							<SettingsValue>
								<![CDATA[{"SocialFacebook":{"BarColor":"#4291eb","TextColor":null},"SocialInstagram":{"BarColor":"#653dd4","TextColor":null},"SocialPintrest":{"BarColor":"#d43d56","TextColor":null},"SocialTwitter":{"BarColor":"#249bb3","TextColor":null},"AD":{"BarColor":"#3dd4a4","TextColor":null},"Brochure":{"BarColor":"#53b57f","TextColor":null},"Email":{"BarColor":"#d47c3d","TextColor":null},"EmailBlast":{"BarColor":"#d4a18c","TextColor":null},"EmailWeekly":{"BarColor":"#d6af4b","TextColor":null},"Flyer":{"BarColor":"#62de66","TextColor":null},"Giftcard":{"BarColor":"#d439b0","TextColor":null},"Onlineflyer":{"BarColor":"#d46a3d","TextColor":null},"Youtube":{"BarColor":"#707070","TextColor":null},"Postcard":{"BarColor":"#3dd4b1","TextColor":null},"SMS":{"BarColor":"#8484c2","TextColor":null},"Store":{"BarColor":"#c7c70c","TextColor":null},"Window":{"BarColor":"#7eb019","TextColor":null},"www":{"BarColor":"#20407a","TextColor":null},"Magazine":{"BarColor":"#058518","TextColor":null},"TelevisionAdvertising":{"BarColor":"#899da1","TextColor":null}}]]>
							</SettingsValue>
						</Setting>
					</Settings>
				</FieldType>
				<FieldType>
					<Id>MediaChannelMessage</Id>
					<DataType>LocaleString</DataType>
					<CVLId />
					<Name>
						<string>
							<value language="en">
								<![CDATA[Message]]>
							</value>
						</string>
					</Name>
					<Description>
						<string />
					</Description>
					<CategoryId>General</CategoryId>
					<DefaultValue />
					<Index>8</Index>
					<Hidden>False</Hidden>
					<ExcludeFromDefaultView>False</ExcludeFromDefaultView>
					<IsDisplayDescription>False</IsDisplayDescription>
					<IsDisplayName>False</IsDisplayName>
					<Mandatory>False</Mandatory>
					<Multivalue>False</Multivalue>
					<ReadOnly>False</ReadOnly>
					<Unique>False</Unique>
					<TrackChanges>True</TrackChanges>
					<Settings />
				</FieldType>
				<FieldType>
					<Id>MediaChannelStartDate</Id>
					<DataType>DateTime</DataType>
					<CVLId />
					<Name>
						<string>
							<value language="en">
								<![CDATA[Start Date]]>
							</value>
						</string>
					</Name>
					<Description>
						<string />
					</Description>
					<CategoryId>General</CategoryId>
					<DefaultValue />
					<Index>2</Index>
					<Hidden>False</Hidden>
					<ExcludeFromDefaultView>False</ExcludeFromDefaultView>
					<IsDisplayDescription>False</IsDisplayDescription>
					<IsDisplayName>False</IsDisplayName>
					<Mandatory>False</Mandatory>
					<Multivalue>False</Multivalue>
					<ReadOnly>False</ReadOnly>
					<Unique>False</Unique>
					<TrackChanges>True</TrackChanges>
					<Settings>
						<Setting>
							<SettingsKey>IncludedInPlannerTooltip</SettingsKey>
							<SettingsValue>
								<![CDATA[true]]>
							</SettingsValue>
						</Setting>
					</Settings>
				</FieldType>
				<FieldType>
					<Id>MediaChannelStatus</Id>
					<DataType>CVL</DataType>
					<CVLId>MediaChannelStatus</CVLId>
					<Name>
						<string>
							<value language="en">
								<![CDATA[Status]]>
							</value>
						</string>
					</Name>
					<Description>
						<string />
					</Description>
					<CategoryId>General</CategoryId>
					<DefaultValue />
					<Index>9</Index>
					<Hidden>False</Hidden>
					<ExcludeFromDefaultView>False</ExcludeFromDefaultView>
					<IsDisplayDescription>False</IsDisplayDescription>
					<IsDisplayName>False</IsDisplayName>
					<Mandatory>False</Mandatory>
					<Multivalue>False</Multivalue>
					<ReadOnly>False</ReadOnly>
					<Unique>False</Unique>
					<TrackChanges>True</TrackChanges>
					<Settings>
						<Setting>
							<SettingsKey>IncludedInPlannerTooltip</SettingsKey>
							<SettingsValue>
								<![CDATA[true]]>
							</SettingsValue>
						</Setting>
					</Settings>
				</FieldType>
				<FieldType>
					<Id>MediaChannelTargetGroups</Id>
					<DataType>CVL</DataType>
					<CVLId>MediaChannelTargetGroup</CVLId>
					<Name>
						<string>
							<value language="en">
								<![CDATA[Target group]]>
							</value>
						</string>
					</Name>
					<Description>
						<string />
					</Description>
					<CategoryId>General</CategoryId>
					<DefaultValue />
					<Index>6</Index>
					<Hidden>False</Hidden>
					<ExcludeFromDefaultView>False</ExcludeFromDefaultView>
					<IsDisplayDescription>False</IsDisplayDescription>
					<IsDisplayName>False</IsDisplayName>
					<Mandatory>False</Mandatory>
					<Multivalue>False</Multivalue>
					<ReadOnly>False</ReadOnly>
					<Unique>False</Unique>
					<TrackChanges>True</TrackChanges>
					<Settings />
				</FieldType>
				<FieldType>
					<Id>MediaChannelTitle</Id>
					<DataType>LocaleString</DataType>
					<CVLId />
					<Name>
						<string>
							<value language="en">
								<![CDATA[Title]]>
							</value>
						</string>
					</Name>
					<Description>
						<string />
					</Description>
					<CategoryId>General</CategoryId>
					<DefaultValue />
					<Index>7</Index>
					<Hidden>False</Hidden>
					<ExcludeFromDefaultView>False</ExcludeFromDefaultView>
					<IsDisplayDescription>True</IsDisplayDescription>
					<IsDisplayName>False</IsDisplayName>
					<Mandatory>False</Mandatory>
					<Multivalue>False</Multivalue>
					<ReadOnly>False</ReadOnly>
					<Unique>False</Unique>
					<TrackChanges>True</TrackChanges>
					<Settings />
				</FieldType>
			</FieldTypes>
		</EntityType>
		<EntityType>
			<Id>Milestone</Id>
			<Name>
				<string>
					<value language="en">
						<![CDATA[Milestone]]>
					</value>
					<value language="nl">
						<![CDATA[Mijlpaal]]>
					</value>
					<value language="fr">
						<![CDATA[Étape importante]]>
					</value>
					<value language="de">
						<![CDATA[Meilenstein]]>
					</value>
					<value language="sv">
						<![CDATA[Milstolpe]]>
					</value>
				</string>
			</Name>
			<IsLinkEntityType>False</IsLinkEntityType>
			<FieldTypes>
				<FieldType>
					<Id>MilestoneDescription</Id>
					<DataType>String</DataType>
					<CVLId />
					<Name>
						<string>
							<value language="en">
								<![CDATA[Description]]>
							</value>
							<value language="nl">
								<![CDATA[Beschrijving]]>
							</value>
							<value language="fr">
								<![CDATA[Description]]>
							</value>
							<value language="de">
								<![CDATA[Beschreibung]]>
							</value>
							<value language="sv">
								<![CDATA[Beskrivning]]>
							</value>
						</string>
					</Name>
					<Description>
						<string />
					</Description>
					<CategoryId>General</CategoryId>
					<DefaultValue />
					<Index>9</Index>
					<Hidden>False</Hidden>
					<ExcludeFromDefaultView>False</ExcludeFromDefaultView>
					<IsDisplayDescription>False</IsDisplayDescription>
					<IsDisplayName>False</IsDisplayName>
					<Mandatory>False</Mandatory>
					<Multivalue>False</Multivalue>
					<ReadOnly>False</ReadOnly>
					<Unique>False</Unique>
					<TrackChanges>True</TrackChanges>
					<Settings />
				</FieldType>
				<FieldType>
					<Id>MilestoneEndDate</Id>
					<DataType>DateTime</DataType>
					<CVLId />
					<Name>
						<string>
							<value language="en">
								<![CDATA[End Date]]>
							</value>
							<value language="nl">
								<![CDATA[Einddatum]]>
							</value>
							<value language="fr">
								<![CDATA[Date de fin]]>
							</value>
							<value language="de">
								<![CDATA[Enddatum]]>
							</value>
							<value language="sv">
								<![CDATA[Slutdatum]]>
							</value>
						</string>
					</Name>
					<Description>
						<string />
					</Description>
					<CategoryId>General</CategoryId>
					<DefaultValue />
					<Index>5</Index>
					<Hidden>False</Hidden>
					<ExcludeFromDefaultView>False</ExcludeFromDefaultView>
					<IsDisplayDescription>False</IsDisplayDescription>
					<IsDisplayName>False</IsDisplayName>
					<Mandatory>False</Mandatory>
					<Multivalue>False</Multivalue>
					<ReadOnly>False</ReadOnly>
					<Unique>False</Unique>
					<TrackChanges>True</TrackChanges>
					<Settings>
						<Setting>
							<SettingsKey>IncludedInPlannerTooltip</SettingsKey>
							<SettingsValue>
								<![CDATA[true]]>
							</SettingsValue>
						</Setting>
					</Settings>
				</FieldType>
				<FieldType>
					<Id>MilestoneId</Id>
					<DataType>String</DataType>
					<CVLId />
					<Name>
						<string>
							<value language="en">
								<![CDATA[Id]]>
							</value>
						</string>
					</Name>
					<Description>
						<string />
					</Description>
					<CategoryId>General</CategoryId>
					<DefaultValue />
					<Index>8</Index>
					<Hidden>False</Hidden>
					<ExcludeFromDefaultView>False</ExcludeFromDefaultView>
					<IsDisplayDescription>False</IsDisplayDescription>
					<IsDisplayName>False</IsDisplayName>
					<Mandatory>False</Mandatory>
					<Multivalue>False</Multivalue>
					<ReadOnly>False</ReadOnly>
					<Unique>True</Unique>
					<TrackChanges>True</TrackChanges>
					<Settings />
				</FieldType>
				<FieldType>
					<Id>MilestoneLength</Id>
					<DataType>Integer</DataType>
					<CVLId />
					<Name>
						<string />
					</Name>
					<Description>
						<string />
					</Description>
					<CategoryId>General</CategoryId>
					<DefaultValue />
					<Index>11</Index>
					<Hidden>True</Hidden>
					<ExcludeFromDefaultView>False</ExcludeFromDefaultView>
					<IsDisplayDescription>False</IsDisplayDescription>
					<IsDisplayName>False</IsDisplayName>
					<Mandatory>False</Mandatory>
					<Multivalue>False</Multivalue>
					<ReadOnly>False</ReadOnly>
					<Unique>False</Unique>
					<TrackChanges>True</TrackChanges>
					<Settings />
				</FieldType>
				<FieldType>
					<Id>MilestoneMilestone</Id>
					<DataType>CVL</DataType>
					<CVLId>Milestone</CVLId>
					<Name>
						<string>
							<value language="en">
								<![CDATA[Milestone]]>
							</value>
						</string>
					</Name>
					<Description>
						<string />
					</Description>
					<CategoryId>General</CategoryId>
					<DefaultValue />
					<Index>1</Index>
					<Hidden>False</Hidden>
					<ExcludeFromDefaultView>False</ExcludeFromDefaultView>
					<IsDisplayDescription>False</IsDisplayDescription>
					<IsDisplayName>True</IsDisplayName>
					<Mandatory>True</Mandatory>
					<Multivalue>False</Multivalue>
					<ReadOnly>False</ReadOnly>
					<Unique>False</Unique>
					<TrackChanges>True</TrackChanges>
					<Settings>
						<Setting>
							<SettingsKey>IncludedInPlannerTooltip</SettingsKey>
							<SettingsValue>
								<![CDATA[true]]>
							</SettingsValue>
						</Setting>
					</Settings>
				</FieldType>
				<FieldType>
					<Id>MilestoneRelStart</Id>
					<DataType>Integer</DataType>
					<CVLId />
					<Name>
						<string />
					</Name>
					<Description>
						<string />
					</Description>
					<CategoryId>General</CategoryId>
					<DefaultValue />
					<Index>12</Index>
					<Hidden>True</Hidden>
					<ExcludeFromDefaultView>False</ExcludeFromDefaultView>
					<IsDisplayDescription>False</IsDisplayDescription>
					<IsDisplayName>False</IsDisplayName>
					<Mandatory>False</Mandatory>
					<Multivalue>False</Multivalue>
					<ReadOnly>False</ReadOnly>
					<Unique>False</Unique>
					<TrackChanges>True</TrackChanges>
					<Settings />
				</FieldType>
				<FieldType>
					<Id>MilestoneResponsible</Id>
					<DataType>CVL</DataType>
					<CVLId>Users</CVLId>
					<Name>
						<string>
							<value language="en">
								<![CDATA[Responsible]]>
							</value>
							<value language="nl">
								<![CDATA[Verantwoordelijk]]>
							</value>
							<value language="fr">
								<![CDATA[Responsable]]>
							</value>
							<value language="de">
								<![CDATA[Verantwortlich]]>
							</value>
							<value language="sv">
								<![CDATA[Ansvarig]]>
							</value>
						</string>
					</Name>
					<Description>
						<string />
					</Description>
					<CategoryId>General</CategoryId>
					<DefaultValue />
					<Index>10</Index>
					<Hidden>False</Hidden>
					<ExcludeFromDefaultView>False</ExcludeFromDefaultView>
					<IsDisplayDescription>False</IsDisplayDescription>
					<IsDisplayName>False</IsDisplayName>
					<Mandatory>False</Mandatory>
					<Multivalue>False</Multivalue>
					<ReadOnly>False</ReadOnly>
					<Unique>False</Unique>
					<TrackChanges>True</TrackChanges>
					<Settings />
				</FieldType>
				<FieldType>
					<Id>MilestoneRole</Id>
					<DataType>CVL</DataType>
					<CVLId>MilestoneResponsibleRole</CVLId>
					<Name>
						<string>
							<value language="en">
								<![CDATA[Resposible Role]]>
							</value>
						</string>
					</Name>
					<Description>
						<string />
					</Description>
					<CategoryId>General</CategoryId>
					<DefaultValue />
					<Index>3</Index>
					<Hidden>False</Hidden>
					<ExcludeFromDefaultView>False</ExcludeFromDefaultView>
					<IsDisplayDescription>False</IsDisplayDescription>
					<IsDisplayName>False</IsDisplayName>
					<Mandatory>False</Mandatory>
					<Multivalue>False</Multivalue>
					<ReadOnly>False</ReadOnly>
					<Unique>False</Unique>
					<TrackChanges>True</TrackChanges>
					<Settings>
						<Setting>
							<SettingsKey>IncludedInPlannerTooltip</SettingsKey>
							<SettingsValue>
								<![CDATA[true]]>
							</SettingsValue>
						</Setting>
					</Settings>
				</FieldType>
				<FieldType>
					<Id>MilestoneStartDate</Id>
					<DataType>DateTime</DataType>
					<CVLId />
					<Name>
						<string>
							<value language="en">
								<![CDATA[Start Date]]>
							</value>
							<value language="nl">
								<![CDATA[Begin datum]]>
							</value>
							<value language="fr">
								<![CDATA[Date de début]]>
							</value>
							<value language="de">
								<![CDATA[Anfangsdatum]]>
							</value>
							<value language="sv">
								<![CDATA[Start datum]]>
							</value>
						</string>
					</Name>
					<Description>
						<string />
					</Description>
					<CategoryId>General</CategoryId>
					<DefaultValue />
					<Index>4</Index>
					<Hidden>False</Hidden>
					<ExcludeFromDefaultView>False</ExcludeFromDefaultView>
					<IsDisplayDescription>False</IsDisplayDescription>
					<IsDisplayName>False</IsDisplayName>
					<Mandatory>False</Mandatory>
					<Multivalue>False</Multivalue>
					<ReadOnly>False</ReadOnly>
					<Unique>False</Unique>
					<TrackChanges>True</TrackChanges>
					<Settings>
						<Setting>
							<SettingsKey>IncludedInPlannerTooltip</SettingsKey>
							<SettingsValue>
								<![CDATA[true]]>
							</SettingsValue>
						</Setting>
					</Settings>
				</FieldType>
				<FieldType>
					<Id>MilestoneStatus</Id>
					<DataType>CVL</DataType>
					<CVLId>MilestoneStatus</CVLId>
					<Name>
						<string>
							<value language="en">
								<![CDATA[Status]]>
							</value>
							<value language="nl">
								<![CDATA[Toestand]]>
							</value>
							<value language="fr">
								<![CDATA[État]]>
							</value>
							<value language="de">
								<![CDATA[Status]]>
							</value>
							<value language="sv">
								<![CDATA[Status]]>
							</value>
						</string>
					</Name>
					<Description>
						<string />
					</Description>
					<CategoryId>General</CategoryId>
					<DefaultValue>New</DefaultValue>
					<Index>7</Index>
					<Hidden>False</Hidden>
					<ExcludeFromDefaultView>False</ExcludeFromDefaultView>
					<IsDisplayDescription>False</IsDisplayDescription>
					<IsDisplayName>False</IsDisplayName>
					<Mandatory>False</Mandatory>
					<Multivalue>False</Multivalue>
					<ReadOnly>False</ReadOnly>
					<Unique>False</Unique>
					<TrackChanges>True</TrackChanges>
					<Settings>
						<Setting>
							<SettingsKey>PlannerColorConfig</SettingsKey>
							<SettingsValue>
								<![CDATA[{"New":{"BarColor":"#d43d45","TextColor":null},"Ongoing":{"BarColor":"#faec55","TextColor":null},"Complete":{"BarColor":"#3dd44c","TextColor":null}}]]>
							</SettingsValue>
						</Setting>
						<Setting>
							<SettingsKey>IncludedInPlannerTooltip</SettingsKey>
							<SettingsValue>
								<![CDATA[true]]>
							</SettingsValue>
						</Setting>
					</Settings>
				</FieldType>
				<FieldType>
					<Id>MilestoneType</Id>
					<DataType>CVL</DataType>
					<CVLId>MilestoneType</CVLId>
					<Name>
						<string>
							<value language="en">
								<![CDATA[Type]]>
							</value>
						</string>
					</Name>
					<Description>
						<string />
					</Description>
					<CategoryId>General</CategoryId>
					<DefaultValue />
					<Index>2</Index>
					<Hidden>False</Hidden>
					<ExcludeFromDefaultView>False</ExcludeFromDefaultView>
					<IsDisplayDescription>True</IsDisplayDescription>
					<IsDisplayName>False</IsDisplayName>
					<Mandatory>True</Mandatory>
					<Multivalue>False</Multivalue>
					<ReadOnly>False</ReadOnly>
					<Unique>False</Unique>
					<TrackChanges>True</TrackChanges>
					<Settings>
						<Setting>
							<SettingsKey>IncludedInPlannerTooltip</SettingsKey>
							<SettingsValue>
								<![CDATA[true]]>
							</SettingsValue>
						</Setting>
					</Settings>
				</FieldType>
				<FieldType>
					<Id>MilestoneWeeks</Id>
					<DataType>CVL</DataType>
					<CVLId>Weeks</CVLId>
					<Name>
						<string>
							<value language="en">
								<![CDATA[Weeks]]>
							</value>
						</string>
					</Name>
					<Description>
						<string />
					</Description>
					<CategoryId>General</CategoryId>
					<DefaultValue />
					<Index>6</Index>
					<Hidden>False</Hidden>
					<ExcludeFromDefaultView>False</ExcludeFromDefaultView>
					<IsDisplayDescription>False</IsDisplayDescription>
					<IsDisplayName>False</IsDisplayName>
					<Mandatory>False</Mandatory>
					<Multivalue>True</Multivalue>
					<ReadOnly>True</ReadOnly>
					<Unique>False</Unique>
					<TrackChanges>True</TrackChanges>
					<Settings />
				</FieldType>
			</FieldTypes>
		</EntityType>
		<EntityType>
			<Id>Part</Id>
			<Name>
				<string>
					<value language="en">
						<![CDATA[Part]]>
					</value>
					<value language="nl">
						<![CDATA[Deel]]>
					</value>
					<value language="fr">
						<![CDATA[Partie]]>
					</value>
					<value language="de">
						<![CDATA[Teil]]>
					</value>
					<value language="sv">
						<![CDATA[Del]]>
					</value>
				</string>
			</Name>
			<IsLinkEntityType>False</IsLinkEntityType>
			<FieldTypes>
				<FieldType>
					<Id>PartIndustry</Id>
					<DataType>CVL</DataType>
					<CVLId>Industry</CVLId>
					<Name>
						<string>
							<value language="en">
								<![CDATA[Industry]]>
							</value>
							<value language="nl">
								<![CDATA[Industrie]]>
							</value>
							<value language="fr">
								<![CDATA[Industrie]]>
							</value>
							<value language="de">
								<![CDATA[Industrie]]>
							</value>
							<value language="sv">
								<![CDATA[Industri]]>
							</value>
						</string>
					</Name>
					<Description>
						<string />
					</Description>
					<CategoryId>General</CategoryId>
					<DefaultValue />
					<Index>3</Index>
					<Hidden>False</Hidden>
					<ExcludeFromDefaultView>False</ExcludeFromDefaultView>
					<IsDisplayDescription>False</IsDisplayDescription>
					<IsDisplayName>False</IsDisplayName>
					<Mandatory>False</Mandatory>
					<Multivalue>False</Multivalue>
					<ReadOnly>False</ReadOnly>
					<Unique>False</Unique>
					<TrackChanges>True</TrackChanges>
					<Settings />
				</FieldType>
				<FieldType>
					<Id>PartName</Id>
					<DataType>String</DataType>
					<CVLId />
					<Name>
						<string>
							<value language="en">
								<![CDATA[Part name]]>
							</value>
							<value language="nl">
								<![CDATA[Onderdeel naam]]>
							</value>
							<value language="fr">
								<![CDATA[Nom de la pièce]]>
							</value>
							<value language="de">
								<![CDATA[Teilname]]>
							</value>
							<value language="sv">
								<![CDATA[Artikelnamn]]>
							</value>
						</string>
					</Name>
					<Description>
						<string />
					</Description>
					<CategoryId>General</CategoryId>
					<DefaultValue />
					<Index>2</Index>
					<Hidden>False</Hidden>
					<ExcludeFromDefaultView>False</ExcludeFromDefaultView>
					<IsDisplayDescription>True</IsDisplayDescription>
					<IsDisplayName>False</IsDisplayName>
					<Mandatory>False</Mandatory>
					<Multivalue>False</Multivalue>
					<ReadOnly>False</ReadOnly>
					<Unique>False</Unique>
					<TrackChanges>True</TrackChanges>
					<Settings />
				</FieldType>
				<FieldType>
					<Id>PartNumber</Id>
					<DataType>String</DataType>
					<CVLId />
					<Name>
						<string>
							<value language="en">
								<![CDATA[Part number]]>
							</value>
							<value language="nl">
								<![CDATA[Onderdeel nummer]]>
							</value>
							<value language="fr">
								<![CDATA[Nombre de la pièce]]>
							</value>
							<value language="de">
								<![CDATA[Teilnummer]]>
							</value>
							<value language="sv">
								<![CDATA[Artikelnummer]]>
							</value>
						</string>
					</Name>
					<Description>
						<string />
					</Description>
					<CategoryId>General</CategoryId>
					<DefaultValue />
					<Index>1</Index>
					<Hidden>False</Hidden>
					<ExcludeFromDefaultView>False</ExcludeFromDefaultView>
					<IsDisplayDescription>False</IsDisplayDescription>
					<IsDisplayName>True</IsDisplayName>
					<Mandatory>True</Mandatory>
					<Multivalue>False</Multivalue>
					<ReadOnly>False</ReadOnly>
					<Unique>False</Unique>
					<TrackChanges>True</TrackChanges>
					<Settings />
				</FieldType>
			</FieldTypes>
		</EntityType>
		<EntityType>
			<Id>Product</Id>
			<Name>
				<string>
					<value language="en">
						<![CDATA[Product]]>
					</value>
					<value language="nl">
						<![CDATA[Product]]>
					</value>
					<value language="fr">
						<![CDATA[Produit]]>
					</value>
					<value language="de">
						<![CDATA[Produkt]]>
					</value>
					<value language="sv">
						<![CDATA[Produkt]]>
					</value>
				</string>
			</Name>
			<IsLinkEntityType>False</IsLinkEntityType>
			<FieldTypes>
				<FieldType>
					<Id>FoodCertification</Id>
					<DataType>CVL</DataType>
					<CVLId>FoodMarks</CVLId>
					<Name>
						<string>
							<value language="en">
								<![CDATA[Certification]]>
							</value>
							<value language="nl">
								<![CDATA[Certificaten]]>
							</value>
							<value language="fr">
								<![CDATA[Certification ]]>
							</value>
							<value language="de">
								<![CDATA[Zertifizierung]]>
							</value>
							<value language="sv">
								<![CDATA[Certificiering]]>
							</value>
						</string>
					</Name>
					<Description>
						<string />
					</Description>
					<CategoryId>ProductInformation</CategoryId>
					<DefaultValue />
					<Index>23</Index>
					<Hidden>False</Hidden>
					<ExcludeFromDefaultView>True</ExcludeFromDefaultView>
					<IsDisplayDescription>False</IsDisplayDescription>
					<IsDisplayName>False</IsDisplayName>
					<Mandatory>False</Mandatory>
					<Multivalue>False</Multivalue>
					<ReadOnly>False</ReadOnly>
					<Unique>False</Unique>
					<TrackChanges>True</TrackChanges>
					<Settings />
				</FieldType>
				<FieldType>
					<Id>ProductApproved</Id>
					<DataType>Boolean</DataType>
					<CVLId />
					<Name>
						<string>
							<value language="en">
								<![CDATA[Approved]]>
							</value>
							<value language="nl">
								<![CDATA[Goedgekeurd]]>
							</value>
							<value language="fr">
								<![CDATA[Approuvé]]>
							</value>
							<value language="de">
								<![CDATA[Genehmigt]]>
							</value>
							<value language="sv">
								<![CDATA[Godkänd]]>
							</value>
						</string>
					</Name>
					<Description>
						<string />
					</Description>
					<CategoryId>Statusinformation</CategoryId>
					<DefaultValue />
					<Index>11</Index>
					<Hidden>False</Hidden>
					<ExcludeFromDefaultView>False</ExcludeFromDefaultView>
					<IsDisplayDescription>False</IsDisplayDescription>
					<IsDisplayName>False</IsDisplayName>
					<Mandatory>False</Mandatory>
					<Multivalue>False</Multivalue>
					<ReadOnly>False</ReadOnly>
					<Unique>False</Unique>
					<TrackChanges>True</TrackChanges>
					<Settings>
						<Setting>
							<SettingsKey>ShowInEntityOverview</SettingsKey>
							<SettingsValue>
								<![CDATA[True]]>
							</SettingsValue>
						</Setting>
					</Settings>
				</FieldType>
				<FieldType>
					<Id>ProductBrand</Id>
					<DataType>CVL</DataType>
					<CVLId>Brand</CVLId>
					<Name>
						<string>
							<value language="en">
								<![CDATA[Brand]]>
							</value>
							<value language="nl">
								<![CDATA[Merk]]>
							</value>
							<value language="fr">
								<![CDATA[Marque]]>
							</value>
							<value language="de">
								<![CDATA[Marke]]>
							</value>
							<value language="sv">
								<![CDATA[Märke]]>
							</value>
						</string>
					</Name>
					<Description>
						<string />
					</Description>
					<CategoryId>General</CategoryId>
					<DefaultValue />
					<Index>9</Index>
					<Hidden>False</Hidden>
					<ExcludeFromDefaultView>True</ExcludeFromDefaultView>
					<IsDisplayDescription>False</IsDisplayDescription>
					<IsDisplayName>False</IsDisplayName>
					<Mandatory>False</Mandatory>
					<Multivalue>False</Multivalue>
					<ReadOnly>False</ReadOnly>
					<Unique>False</Unique>
					<TrackChanges>False</TrackChanges>
					<Settings />
				</FieldType>
				<FieldType>
					<Id>ProductDIYType</Id>
					<DataType>CVL</DataType>
					<CVLId>DIYProductType</CVLId>
					<Name>
						<string>
							<value language="en">
								<![CDATA[Product type]]>
							</value>
							<value language="nl">
								<![CDATA[Article soort]]>
							</value>
							<value language="fr">
								<![CDATA[Type de produit]]>
							</value>
							<value language="de">
								<![CDATA[Produktart]]>
							</value>
							<value language="sv">
								<![CDATA[Produkttyp]]>
							</value>
						</string>
					</Name>
					<Description>
						<string>
							<value language="en">
								<![CDATA[Product type]]>
							</value>
						</string>
					</Description>
					<CategoryId>General</CategoryId>
					<DefaultValue />
					<Index>12</Index>
					<Hidden>False</Hidden>
					<ExcludeFromDefaultView>True</ExcludeFromDefaultView>
					<IsDisplayDescription>False</IsDisplayDescription>
					<IsDisplayName>False</IsDisplayName>
					<Mandatory>False</Mandatory>
					<Multivalue>False</Multivalue>
					<ReadOnly>False</ReadOnly>
					<Unique>False</Unique>
					<TrackChanges>True</TrackChanges>
					<Settings />
				</FieldType>
				<FieldType>
					<Id>ProductFashionGender</Id>
					<DataType>CVL</DataType>
					<CVLId>Gender</CVLId>
					<Name>
						<string>
							<value language="en">
								<![CDATA[Gender]]>
							</value>
							<value language="nl">
								<![CDATA[Geslacht]]>
							</value>
							<value language="fr">
								<![CDATA[Sexe]]>
							</value>
							<value language="de">
								<![CDATA[Geschlecht]]>
							</value>
							<value language="sv">
								<![CDATA[Kön]]>
							</value>
						</string>
					</Name>
					<Description>
						<string />
					</Description>
					<CategoryId>ProductInformation</CategoryId>
					<DefaultValue />
					<Index>14</Index>
					<Hidden>False</Hidden>
					<ExcludeFromDefaultView>True</ExcludeFromDefaultView>
					<IsDisplayDescription>False</IsDisplayDescription>
					<IsDisplayName>False</IsDisplayName>
					<Mandatory>False</Mandatory>
					<Multivalue>False</Multivalue>
					<ReadOnly>False</ReadOnly>
					<Unique>False</Unique>
					<TrackChanges>True</TrackChanges>
					<Settings />
				</FieldType>
				<FieldType>
					<Id>ProductFashionIncludedBrand</Id>
					<DataType>CVL</DataType>
					<CVLId>FashionIncludedBrand</CVLId>
					<Name>
						<string>
							<value language="en">
								<![CDATA[Included brand]]>
							</value>
							<value language="nl">
								<![CDATA[Inbegrepen merk]]>
							</value>
							<value language="fr">
								<![CDATA[Marque incluse]]>
							</value>
							<value language="de">
								<![CDATA[Inbegriffene Marke]]>
							</value>
							<value language="sv">
								<![CDATA[Ingår varumärke]]>
							</value>
						</string>
					</Name>
					<Description>
						<string />
					</Description>
					<CategoryId>ProductInformation</CategoryId>
					<DefaultValue />
					<Index>15</Index>
					<Hidden>False</Hidden>
					<ExcludeFromDefaultView>True</ExcludeFromDefaultView>
					<IsDisplayDescription>False</IsDisplayDescription>
					<IsDisplayName>False</IsDisplayName>
					<Mandatory>False</Mandatory>
					<Multivalue>False</Multivalue>
					<ReadOnly>False</ReadOnly>
					<Unique>False</Unique>
					<TrackChanges>True</TrackChanges>
					<Settings />
				</FieldType>
				<FieldType>
					<Id>ProductFashionMaterial</Id>
					<DataType>CVL</DataType>
					<CVLId>FashionMaterial</CVLId>
					<Name>
						<string>
							<value language="en">
								<![CDATA[Material]]>
							</value>
							<value language="nl">
								<![CDATA[Materiaal]]>
							</value>
							<value language="fr">
								<![CDATA[Matériau]]>
							</value>
							<value language="de">
								<![CDATA[Material]]>
							</value>
							<value language="sv">
								<![CDATA[Material]]>
							</value>
						</string>
					</Name>
					<Description>
						<string />
					</Description>
					<CategoryId>ProductInformation</CategoryId>
					<DefaultValue />
					<Index>13</Index>
					<Hidden>False</Hidden>
					<ExcludeFromDefaultView>True</ExcludeFromDefaultView>
					<IsDisplayDescription>False</IsDisplayDescription>
					<IsDisplayName>False</IsDisplayName>
					<Mandatory>False</Mandatory>
					<Multivalue>True</Multivalue>
					<ReadOnly>False</ReadOnly>
					<Unique>False</Unique>
					<TrackChanges>True</TrackChanges>
					<Settings />
				</FieldType>
				<FieldType>
					<Id>ProductFashionMaterialDetail</Id>
					<DataType>LocaleString</DataType>
					<CVLId />
					<Name>
						<string>
							<value language="en">
								<![CDATA[Material composition]]>
							</value>
							<value language="nl">
								<![CDATA[Samenstelling van het materiaal]]>
							</value>
							<value language="fr">
								<![CDATA[Composition du matériau]]>
							</value>
							<value language="de">
								<![CDATA[Material Zusammensetzung]]>
							</value>
							<value language="sv">
								<![CDATA[Materialkomposition]]>
							</value>
						</string>
					</Name>
					<Description>
						<string />
					</Description>
					<CategoryId>ProductInformation</CategoryId>
					<DefaultValue />
					<Index>16</Index>
					<Hidden>False</Hidden>
					<ExcludeFromDefaultView>True</ExcludeFromDefaultView>
					<IsDisplayDescription>False</IsDisplayDescription>
					<IsDisplayName>False</IsDisplayName>
					<Mandatory>False</Mandatory>
					<Multivalue>False</Multivalue>
					<ReadOnly>False</ReadOnly>
					<Unique>False</Unique>
					<TrackChanges>True</TrackChanges>
					<Settings />
				</FieldType>
				<FieldType>
					<Id>ProductFeature1</Id>
					<DataType>LocaleString</DataType>
					<CVLId />
					<Name>
						<string>
							<value language="en">
								<![CDATA[Product Feature 1]]>
							</value>
							<value language="nl">
								<![CDATA[Kenmerken]]>
							</value>
							<value language="fr">
								<![CDATA[Caractéristiques]]>
							</value>
							<value language="de">
								<![CDATA[Eigenschaften]]>
							</value>
							<value language="sv">
								<![CDATA[Funktioner]]>
							</value>
						</string>
					</Name>
					<Description>
						<string>
							<value language="nl">
								<![CDATA[Producteigenschappen]]>
							</value>
							<value language="fr">
								<![CDATA[caractéristiques du produit]]>
							</value>
						</string>
					</Description>
					<CategoryId>ProductInformation</CategoryId>
					<DefaultValue />
					<Index>17</Index>
					<Hidden>False</Hidden>
					<ExcludeFromDefaultView>True</ExcludeFromDefaultView>
					<IsDisplayDescription>False</IsDisplayDescription>
					<IsDisplayName>False</IsDisplayName>
					<Mandatory>False</Mandatory>
					<Multivalue>False</Multivalue>
					<ReadOnly>False</ReadOnly>
					<Unique>False</Unique>
					<TrackChanges>True</TrackChanges>
					<Settings />
				</FieldType>
				<FieldType>
					<Id>ProductFeature2</Id>
					<DataType>LocaleString</DataType>
					<CVLId />
					<Name>
						<string>
							<value language="en">
								<![CDATA[Product Feature 2]]>
							</value>
							<value language="nl">
								<![CDATA[Kenmerken]]>
							</value>
							<value language="fr">
								<![CDATA[Caractéristiques]]>
							</value>
							<value language="de">
								<![CDATA[Eigenschaften]]>
							</value>
							<value language="sv">
								<![CDATA[Funktioner]]>
							</value>
						</string>
					</Name>
					<Description>
						<string>
							<value language="en">
								<![CDATA[Product Feature 2]]>
							</value>
							<value language="nl">
								<![CDATA[Producteigenschappen]]>
							</value>
							<value language="fr">
								<![CDATA[caractéristiques du produit]]>
							</value>
						</string>
					</Description>
					<CategoryId>ProductInformation</CategoryId>
					<DefaultValue />
					<Index>18</Index>
					<Hidden>False</Hidden>
					<ExcludeFromDefaultView>True</ExcludeFromDefaultView>
					<IsDisplayDescription>False</IsDisplayDescription>
					<IsDisplayName>False</IsDisplayName>
					<Mandatory>False</Mandatory>
					<Multivalue>False</Multivalue>
					<ReadOnly>False</ReadOnly>
					<Unique>False</Unique>
					<TrackChanges>True</TrackChanges>
					<Settings />
				</FieldType>
				<FieldType>
					<Id>ProductFoodAllergens</Id>
					<DataType>CVL</DataType>
					<CVLId>FoodAllergens</CVLId>
					<Name>
						<string>
							<value language="en">
								<![CDATA[Allergens]]>
							</value>
							<value language="nl">
								<![CDATA[Allergenen]]>
							</value>
							<value language="fr">
								<![CDATA[Allergènes]]>
							</value>
							<value language="de">
								<![CDATA[Allergene]]>
							</value>
							<value language="sv">
								<![CDATA[Allergener]]>
							</value>
						</string>
					</Name>
					<Description>
						<string />
					</Description>
					<CategoryId>ProductInformation</CategoryId>
					<DefaultValue />
					<Index>21</Index>
					<Hidden>False</Hidden>
					<ExcludeFromDefaultView>True</ExcludeFromDefaultView>
					<IsDisplayDescription>False</IsDisplayDescription>
					<IsDisplayName>False</IsDisplayName>
					<Mandatory>False</Mandatory>
					<Multivalue>False</Multivalue>
					<ReadOnly>False</ReadOnly>
					<Unique>False</Unique>
					<TrackChanges>True</TrackChanges>
					<Settings />
				</FieldType>
				<FieldType>
					<Id>ProductFoodAllergensDetailed</Id>
					<DataType>CVL</DataType>
					<CVLId>FoodAllergensDetailed</CVLId>
					<Name>
						<string>
							<value language="en">
								<![CDATA[Allergens (detailed)]]>
							</value>
							<value language="nl">
								<![CDATA[Allergenen (gedetailleerd)]]>
							</value>
							<value language="fr">
								<![CDATA[Allergènes (détaillés)]]>
							</value>
							<value language="de">
								<![CDATA[Allergene (detailliert)]]>
							</value>
							<value language="sv">
								<![CDATA[Allergener (detaljerade)]]>
							</value>
						</string>
					</Name>
					<Description>
						<string />
					</Description>
					<CategoryId>ProductInformation</CategoryId>
					<DefaultValue />
					<Index>22</Index>
					<Hidden>False</Hidden>
					<ExcludeFromDefaultView>True</ExcludeFromDefaultView>
					<IsDisplayDescription>False</IsDisplayDescription>
					<IsDisplayName>False</IsDisplayName>
					<Mandatory>False</Mandatory>
					<Multivalue>False</Multivalue>
					<ReadOnly>False</ReadOnly>
					<Unique>False</Unique>
					<TrackChanges>True</TrackChanges>
					<Settings />
				</FieldType>
				<FieldType>
					<Id>ProductFoodLegalRequirements</Id>
					<DataType>LocaleString</DataType>
					<CVLId />
					<Name>
						<string>
							<value language="en">
								<![CDATA[Legal requirements]]>
							</value>
							<value language="nl">
								<![CDATA[Wettelijke vereisten]]>
							</value>
							<value language="fr">
								<![CDATA[Exigences légales]]>
							</value>
							<value language="de">
								<![CDATA[Gesetzlichen Anforderungen]]>
							</value>
							<value language="sv">
								<![CDATA[Lagkrav]]>
							</value>
						</string>
					</Name>
					<Description>
						<string />
					</Description>
					<CategoryId>ProductInformation</CategoryId>
					<DefaultValue />
					<Index>20</Index>
					<Hidden>False</Hidden>
					<ExcludeFromDefaultView>True</ExcludeFromDefaultView>
					<IsDisplayDescription>False</IsDisplayDescription>
					<IsDisplayName>False</IsDisplayName>
					<Mandatory>False</Mandatory>
					<Multivalue>False</Multivalue>
					<ReadOnly>False</ReadOnly>
					<Unique>False</Unique>
					<TrackChanges>True</TrackChanges>
					<Settings />
				</FieldType>
				<FieldType>
					<Id>ProductFoodSavingInstructions</Id>
					<DataType>LocaleString</DataType>
					<CVLId />
					<Name>
						<string>
							<value language="en">
								<![CDATA[Saving instructions]]>
							</value>
							<value language="nl">
								<![CDATA[Bewaarinstructies]]>
							</value>
							<value language="fr">
								<![CDATA[Instructions de stockage]]>
							</value>
							<value language="de">
								<![CDATA[Lagerung Hinweise]]>
							</value>
							<value language="sv">
								<![CDATA[Lagring Säkerhets]]>
							</value>
						</string>
					</Name>
					<Description>
						<string />
					</Description>
					<CategoryId>ProductInformation</CategoryId>
					<DefaultValue />
					<Index>19</Index>
					<Hidden>False</Hidden>
					<ExcludeFromDefaultView>True</ExcludeFromDefaultView>
					<IsDisplayDescription>False</IsDisplayDescription>
					<IsDisplayName>False</IsDisplayName>
					<Mandatory>False</Mandatory>
					<Multivalue>False</Multivalue>
					<ReadOnly>False</ReadOnly>
					<Unique>False</Unique>
					<TrackChanges>True</TrackChanges>
					<Settings />
				</FieldType>
				<FieldType>
					<Id>ProductIndustry</Id>
					<DataType>CVL</DataType>
					<CVLId>Industry</CVLId>
					<Name>
						<string>
							<value language="en">
								<![CDATA[Industry]]>
							</value>
							<value language="nl">
								<![CDATA[Industrie]]>
							</value>
							<value language="fr">
								<![CDATA[Secteur]]>
							</value>
							<value language="de">
								<![CDATA[Branche]]>
							</value>
							<value language="sv">
								<![CDATA[Industri]]>
							</value>
						</string>
					</Name>
					<Description>
						<string />
					</Description>
					<CategoryId>General</CategoryId>
					<DefaultValue />
					<Index>5</Index>
					<Hidden>False</Hidden>
					<ExcludeFromDefaultView>False</ExcludeFromDefaultView>
					<IsDisplayDescription>False</IsDisplayDescription>
					<IsDisplayName>False</IsDisplayName>
					<Mandatory>True</Mandatory>
					<Multivalue>False</Multivalue>
					<ReadOnly>False</ReadOnly>
					<Unique>False</Unique>
					<TrackChanges>False</TrackChanges>
					<Settings />
				</FieldType>
				<FieldType>
					<Id>ProductLongDescription</Id>
					<DataType>LocaleString</DataType>
					<CVLId />
					<Name>
						<string>
							<value language="en">
								<![CDATA[Long description]]>
							</value>
							<value language="nl">
								<![CDATA[Lange beschrijving]]>
							</value>
							<value language="fr">
								<![CDATA[Longue description]]>
							</value>
							<value language="de">
								<![CDATA[Ausführliche Beschreibung]]>
							</value>
							<value language="sv">
								<![CDATA[Lång beskrivning]]>
							</value>
						</string>
					</Name>
					<Description>
						<string>
							<value language="en">
								<![CDATA[Long description usually used for detailed descriptions of the product. ]]>
							</value>
						</string>
					</Description>
					<CategoryId>ProductInformation</CategoryId>
					<DefaultValue />
					<Index>4</Index>
					<Hidden>False</Hidden>
					<ExcludeFromDefaultView>False</ExcludeFromDefaultView>
					<IsDisplayDescription>False</IsDisplayDescription>
					<IsDisplayName>False</IsDisplayName>
					<Mandatory>False</Mandatory>
					<Multivalue>False</Multivalue>
					<ReadOnly>False</ReadOnly>
					<Unique>False</Unique>
					<TrackChanges>True</TrackChanges>
					<Settings />
				</FieldType>
				<FieldType>
					<Id>ProductMainCategory</Id>
					<DataType>CVL</DataType>
					<CVLId>MainCategory</CVLId>
					<Name>
						<string>
							<value language="en">
								<![CDATA[Main category]]>
							</value>
							<value language="nl">
								<![CDATA[Hoofdcategorie]]>
							</value>
							<value language="fr">
								<![CDATA[Catégorie principale]]>
							</value>
							<value language="de">
								<![CDATA[Hauptkategorie]]>
							</value>
							<value language="sv">
								<![CDATA[Huvud kategori]]>
							</value>
						</string>
					</Name>
					<Description>
						<string />
					</Description>
					<CategoryId>General</CategoryId>
					<DefaultValue />
					<Index>6</Index>
					<Hidden>False</Hidden>
					<ExcludeFromDefaultView>False</ExcludeFromDefaultView>
					<IsDisplayDescription>False</IsDisplayDescription>
					<IsDisplayName>False</IsDisplayName>
					<Mandatory>False</Mandatory>
					<Multivalue>False</Multivalue>
					<ReadOnly>False</ReadOnly>
					<Unique>False</Unique>
					<TrackChanges>True</TrackChanges>
					<Settings>
						<Setting>
							<SettingsKey>ShowInEntityOverview</SettingsKey>
							<SettingsValue>
								<![CDATA[True]]>
							</SettingsValue>
						</Setting>
					</Settings>
				</FieldType>
				<FieldType>
					<Id>ProductMarket</Id>
					<DataType>CVL</DataType>
					<CVLId>Market</CVLId>
					<Name>
						<string>
							<value language="en">
								<![CDATA[Market]]>
							</value>
							<value language="nl">
								<![CDATA[Markt]]>
							</value>
							<value language="fr">
								<![CDATA[Marché]]>
							</value>
							<value language="de">
								<![CDATA[Markt]]>
							</value>
							<value language="sv">
								<![CDATA[Marknadsföra]]>
							</value>
						</string>
					</Name>
					<Description>
						<string />
					</Description>
					<CategoryId>General</CategoryId>
					<DefaultValue>de;dk;fi;gb;nl;no;se;us</DefaultValue>
					<Index>8</Index>
					<Hidden>False</Hidden>
					<ExcludeFromDefaultView>False</ExcludeFromDefaultView>
					<IsDisplayDescription>False</IsDisplayDescription>
					<IsDisplayName>False</IsDisplayName>
					<Mandatory>False</Mandatory>
					<Multivalue>True</Multivalue>
					<ReadOnly>False</ReadOnly>
					<Unique>False</Unique>
					<TrackChanges>True</TrackChanges>
					<Settings />
				</FieldType>
				<FieldType>
					<Id>ProductName</Id>
					<DataType>LocaleString</DataType>
					<CVLId />
					<Name>
						<string>
							<value language="en">
								<![CDATA[Product name]]>
							</value>
							<value language="nl">
								<![CDATA[Productnaam]]>
							</value>
							<value language="fr">
								<![CDATA[Nom du produit]]>
							</value>
							<value language="de">
								<![CDATA[Produktname]]>
							</value>
							<value language="sv">
								<![CDATA[Produktnamn]]>
							</value>
						</string>
					</Name>
					<Description>
						<string />
					</Description>
					<CategoryId>ERPInformation</CategoryId>
					<DefaultValue />
					<Index>2</Index>
					<Hidden>False</Hidden>
					<ExcludeFromDefaultView>False</ExcludeFromDefaultView>
					<IsDisplayDescription>True</IsDisplayDescription>
					<IsDisplayName>False</IsDisplayName>
					<Mandatory>False</Mandatory>
					<Multivalue>False</Multivalue>
					<ReadOnly>False</ReadOnly>
					<Unique>False</Unique>
					<TrackChanges>True</TrackChanges>
					<Settings>
						<Setting>
							<SettingsKey>ShowInEntityOverview</SettingsKey>
							<SettingsValue>
								<![CDATA[True]]>
							</SettingsValue>
						</Setting>
					</Settings>
				</FieldType>
				<FieldType>
					<Id>ProductNumber</Id>
					<DataType>String</DataType>
					<CVLId />
					<Name>
						<string>
							<value language="en">
								<![CDATA[Product Number]]>
							</value>
							<value language="nl">
								<![CDATA[Productnummer]]>
							</value>
							<value language="fr">
								<![CDATA[Numéro de produit]]>
							</value>
							<value language="de">
								<![CDATA[Produktnummer]]>
							</value>
							<value language="sv">
								<![CDATA[Produktnummer]]>
							</value>
						</string>
					</Name>
					<Description>
						<string />
					</Description>
					<CategoryId>ERPInformation</CategoryId>
					<DefaultValue />
					<Index>1</Index>
					<Hidden>False</Hidden>
					<ExcludeFromDefaultView>False</ExcludeFromDefaultView>
					<IsDisplayDescription>False</IsDisplayDescription>
					<IsDisplayName>True</IsDisplayName>
					<Mandatory>True</Mandatory>
					<Multivalue>False</Multivalue>
					<ReadOnly>False</ReadOnly>
					<Unique>True</Unique>
					<TrackChanges>True</TrackChanges>
					<Settings>
						<Setting>
							<SettingsKey>ShowInEntityOverview</SettingsKey>
							<SettingsValue>
								<![CDATA[True]]>
							</SettingsValue>
						</Setting>
					</Settings>
				</FieldType>
				<FieldType>
					<Id>ProductShortDescription</Id>
					<DataType>LocaleString</DataType>
					<CVLId />
					<Name>
						<string>
							<value language="en">
								<![CDATA[Short description]]>
							</value>
							<value language="nl">
								<![CDATA[Korte Omschrijving]]>
							</value>
							<value language="fr">
								<![CDATA[Brève description]]>
							</value>
							<value language="de">
								<![CDATA[Kurzbeschreibung]]>
							</value>
							<value language="sv">
								<![CDATA[Kort beskrivning]]>
							</value>
						</string>
					</Name>
					<Description>
						<string>
							<value language="en">
								<![CDATA[Short description, usually used for web or mobile channel.]]>
							</value>
						</string>
					</Description>
					<CategoryId>ProductInformation</CategoryId>
					<DefaultValue />
					<Index>3</Index>
					<Hidden>False</Hidden>
					<ExcludeFromDefaultView>False</ExcludeFromDefaultView>
					<IsDisplayDescription>False</IsDisplayDescription>
					<IsDisplayName>False</IsDisplayName>
					<Mandatory>False</Mandatory>
					<Multivalue>False</Multivalue>
					<ReadOnly>False</ReadOnly>
					<Unique>False</Unique>
					<TrackChanges>True</TrackChanges>
					<Settings>
						<Setting>
							<SettingsKey>ShowInEntityOverview</SettingsKey>
							<SettingsValue>
								<![CDATA[True]]>
							</SettingsValue>
						</Setting>
					</Settings>
				</FieldType>
				<FieldType>
					<Id>ProductStatus</Id>
					<DataType>CVL</DataType>
					<CVLId>ProductStatus</CVLId>
					<Name>
						<string>
							<value language="en">
								<![CDATA[Status]]>
							</value>
							<value language="nl">
								<![CDATA[Toestand]]>
							</value>
							<value language="fr">
								<![CDATA[État]]>
							</value>
							<value language="de">
								<![CDATA[Status]]>
							</value>
							<value language="sv">
								<![CDATA[Status]]>
							</value>
						</string>
					</Name>
					<Description>
						<string />
					</Description>
					<CategoryId>Statusinformation</CategoryId>
					<DefaultValue />
					<Index>10</Index>
					<Hidden>False</Hidden>
					<ExcludeFromDefaultView>False</ExcludeFromDefaultView>
					<IsDisplayDescription>False</IsDisplayDescription>
					<IsDisplayName>False</IsDisplayName>
					<Mandatory>True</Mandatory>
					<Multivalue>False</Multivalue>
					<ReadOnly>False</ReadOnly>
					<Unique>False</Unique>
					<TrackChanges>True</TrackChanges>
					<Settings>
						<Setting>
							<SettingsKey>ShowInEntityOverview</SettingsKey>
							<SettingsValue>
								<![CDATA[True]]>
							</SettingsValue>
						</Setting>
					</Settings>
				</FieldType>
				<FieldType>
					<Id>ProductSubCategory</Id>
					<DataType>CVL</DataType>
					<CVLId>SubCategory</CVLId>
					<Name>
						<string>
							<value language="en">
								<![CDATA[Subcategory]]>
							</value>
							<value language="nl">
								<![CDATA[Subcategorie]]>
							</value>
							<value language="fr">
								<![CDATA[Sous-catégorie]]>
							</value>
							<value language="de">
								<![CDATA[Unterkategorie]]>
							</value>
							<value language="sv">
								<![CDATA[Underkategori]]>
							</value>
						</string>
					</Name>
					<Description>
						<string />
					</Description>
					<CategoryId>General</CategoryId>
					<DefaultValue />
					<Index>7</Index>
					<Hidden>False</Hidden>
					<ExcludeFromDefaultView>False</ExcludeFromDefaultView>
					<IsDisplayDescription>False</IsDisplayDescription>
					<IsDisplayName>False</IsDisplayName>
					<Mandatory>False</Mandatory>
					<Multivalue>False</Multivalue>
					<ReadOnly>False</ReadOnly>
					<Unique>False</Unique>
					<TrackChanges>True</TrackChanges>
					<Settings>
						<Setting>
							<SettingsKey>ShowInEntityOverview</SettingsKey>
							<SettingsValue>
								<![CDATA[True]]>
							</SettingsValue>
						</Setting>
					</Settings>
				</FieldType>
			</FieldTypes>
		</EntityType>
		<EntityType>
			<Id>Promotion</Id>
			<Name>
				<string>
					<value language="en">
						<![CDATA[Promotion]]>
					</value>
					<value language="nl">
						<![CDATA[Campagne]]>
					</value>
					<value language="fr">
						<![CDATA[Campagne]]>
					</value>
					<value language="de">
						<![CDATA[Kampagne]]>
					</value>
					<value language="sv">
						<![CDATA[Kampanj]]>
					</value>
				</string>
			</Name>
			<IsLinkEntityType>False</IsLinkEntityType>
			<FieldTypes>
				<FieldType>
					<Id>PromoId</Id>
					<DataType>String</DataType>
					<CVLId />
					<Name>
						<string>
							<value language="en">
								<![CDATA[Id]]>
							</value>
						</string>
					</Name>
					<Description>
						<string />
					</Description>
					<CategoryId>General</CategoryId>
					<DefaultValue />
					<Index>8</Index>
					<Hidden>False</Hidden>
					<ExcludeFromDefaultView>False</ExcludeFromDefaultView>
					<IsDisplayDescription>False</IsDisplayDescription>
					<IsDisplayName>False</IsDisplayName>
					<Mandatory>False</Mandatory>
					<Multivalue>False</Multivalue>
					<ReadOnly>False</ReadOnly>
					<Unique>True</Unique>
					<TrackChanges>True</TrackChanges>
					<Settings />
				</FieldType>
				<FieldType>
					<Id>PromotionEndDate</Id>
					<DataType>DateTime</DataType>
					<CVLId />
					<Name>
						<string>
							<value language="en">
								<![CDATA[End date]]>
							</value>
						</string>
					</Name>
					<Description>
						<string />
					</Description>
					<CategoryId>General</CategoryId>
					<DefaultValue />
					<Index>5</Index>
					<Hidden>False</Hidden>
					<ExcludeFromDefaultView>False</ExcludeFromDefaultView>
					<IsDisplayDescription>False</IsDisplayDescription>
					<IsDisplayName>False</IsDisplayName>
					<Mandatory>False</Mandatory>
					<Multivalue>False</Multivalue>
					<ReadOnly>False</ReadOnly>
					<Unique>False</Unique>
					<TrackChanges>True</TrackChanges>
					<Settings>
						<Setting>
							<SettingsKey>IncludedInPlannerTooltip</SettingsKey>
							<SettingsValue>
								<![CDATA[true]]>
							</SettingsValue>
						</Setting>
					</Settings>
				</FieldType>
				<FieldType>
					<Id>PromotionMarket</Id>
					<DataType>CVL</DataType>
					<CVLId>Market</CVLId>
					<Name>
						<string>
							<value language="en">
								<![CDATA[Markets]]>
							</value>
						</string>
					</Name>
					<Description>
						<string />
					</Description>
					<CategoryId>General</CategoryId>
					<DefaultValue />
					<Index>6</Index>
					<Hidden>False</Hidden>
					<ExcludeFromDefaultView>False</ExcludeFromDefaultView>
					<IsDisplayDescription>False</IsDisplayDescription>
					<IsDisplayName>False</IsDisplayName>
					<Mandatory>False</Mandatory>
					<Multivalue>True</Multivalue>
					<ReadOnly>False</ReadOnly>
					<Unique>False</Unique>
					<TrackChanges>True</TrackChanges>
					<Settings />
				</FieldType>
				<FieldType>
					<Id>PromotionName</Id>
					<DataType>String</DataType>
					<CVLId />
					<Name>
						<string>
							<value language="en">
								<![CDATA[Name]]>
							</value>
						</string>
					</Name>
					<Description>
						<string />
					</Description>
					<CategoryId>General</CategoryId>
					<DefaultValue />
					<Index>1</Index>
					<Hidden>False</Hidden>
					<ExcludeFromDefaultView>False</ExcludeFromDefaultView>
					<IsDisplayDescription>False</IsDisplayDescription>
					<IsDisplayName>True</IsDisplayName>
					<Mandatory>True</Mandatory>
					<Multivalue>False</Multivalue>
					<ReadOnly>False</ReadOnly>
					<Unique>False</Unique>
					<TrackChanges>True</TrackChanges>
					<Settings>
						<Setting>
							<SettingsKey>IncludedInPlannerTooltip</SettingsKey>
							<SettingsValue>
								<![CDATA[true]]>
							</SettingsValue>
						</Setting>
					</Settings>
				</FieldType>
				<FieldType>
					<Id>PromotionOffer</Id>
					<DataType>CVL</DataType>
					<CVLId>PromotionOffer</CVLId>
					<Name>
						<string>
							<value language="en">
								<![CDATA[Offer]]>
							</value>
						</string>
					</Name>
					<Description>
						<string />
					</Description>
					<CategoryId>General</CategoryId>
					<DefaultValue />
					<Index>2</Index>
					<Hidden>False</Hidden>
					<ExcludeFromDefaultView>False</ExcludeFromDefaultView>
					<IsDisplayDescription>True</IsDisplayDescription>
					<IsDisplayName>False</IsDisplayName>
					<Mandatory>False</Mandatory>
					<Multivalue>False</Multivalue>
					<ReadOnly>False</ReadOnly>
					<Unique>False</Unique>
					<TrackChanges>True</TrackChanges>
					<Settings>
						<Setting>
							<SettingsKey>PlannerColorConfig</SettingsKey>
							<SettingsValue>
								<![CDATA[{"pricedeal20off":{"BarColor":"#5ebed1","TextColor":null},"pricedeal25off":{"BarColor":"#3dd4c7","TextColor":null},"pricedeal30off":{"BarColor":"#3dd498","TextColor":null},"pricedeal40off":{"BarColor":"#d43d68","TextColor":null},"pricedeal50off":{"BarColor":"#d43d3d","TextColor":null},"christmas":{"BarColor":"#649dde","TextColor":null},"cybermonday":{"BarColor":"#10cc23","TextColor":null},"blackfriday":{"BarColor":"#4c595c","TextColor":null},"3for2":{"BarColor":"#d4a43d","TextColor":null},"freeshipping":{"BarColor":"#983dd4","TextColor":null}}]]>
							</SettingsValue>
						</Setting>
						<Setting>
							<SettingsKey>IncludedInPlannerTooltip</SettingsKey>
							<SettingsValue>
								<![CDATA[true]]>
							</SettingsValue>
						</Setting>
					</Settings>
				</FieldType>
				<FieldType>
					<Id>PromotionRestriction</Id>
					<DataType>CVL</DataType>
					<CVLId>PromotionRestriction</CVLId>
					<Name>
						<string>
							<value language="en">
								<![CDATA[Restriction]]>
							</value>
						</string>
					</Name>
					<Description>
						<string />
					</Description>
					<CategoryId>General</CategoryId>
					<DefaultValue />
					<Index>3</Index>
					<Hidden>False</Hidden>
					<ExcludeFromDefaultView>False</ExcludeFromDefaultView>
					<IsDisplayDescription>False</IsDisplayDescription>
					<IsDisplayName>False</IsDisplayName>
					<Mandatory>False</Mandatory>
					<Multivalue>True</Multivalue>
					<ReadOnly>False</ReadOnly>
					<Unique>False</Unique>
					<TrackChanges>True</TrackChanges>
					<Settings />
				</FieldType>
				<FieldType>
					<Id>PromotionStartDate</Id>
					<DataType>DateTime</DataType>
					<CVLId />
					<Name>
						<string>
							<value language="en">
								<![CDATA[Start date]]>
							</value>
						</string>
					</Name>
					<Description>
						<string />
					</Description>
					<CategoryId>General</CategoryId>
					<DefaultValue />
					<Index>4</Index>
					<Hidden>False</Hidden>
					<ExcludeFromDefaultView>False</ExcludeFromDefaultView>
					<IsDisplayDescription>False</IsDisplayDescription>
					<IsDisplayName>False</IsDisplayName>
					<Mandatory>False</Mandatory>
					<Multivalue>False</Multivalue>
					<ReadOnly>False</ReadOnly>
					<Unique>False</Unique>
					<TrackChanges>True</TrackChanges>
					<Settings>
						<Setting>
							<SettingsKey>IncludedInPlannerTooltip</SettingsKey>
							<SettingsValue>
								<![CDATA[true]]>
							</SettingsValue>
						</Setting>
					</Settings>
				</FieldType>
				<FieldType>
					<Id>PromotionStatus</Id>
					<DataType>CVL</DataType>
					<CVLId>PromotionStatus</CVLId>
					<Name>
						<string>
							<value language="en">
								<![CDATA[Status]]>
							</value>
						</string>
					</Name>
					<Description>
						<string />
					</Description>
					<CategoryId>General</CategoryId>
					<DefaultValue />
					<Index>7</Index>
					<Hidden>False</Hidden>
					<ExcludeFromDefaultView>False</ExcludeFromDefaultView>
					<IsDisplayDescription>False</IsDisplayDescription>
					<IsDisplayName>False</IsDisplayName>
					<Mandatory>False</Mandatory>
					<Multivalue>False</Multivalue>
					<ReadOnly>False</ReadOnly>
					<Unique>False</Unique>
					<TrackChanges>True</TrackChanges>
					<Settings />
				</FieldType>
			</FieldTypes>
		</EntityType>
		<EntityType>
			<Id>Publication</Id>
			<Name>
				<string>
					<value language="en">
						<![CDATA[Publication]]>
					</value>
					<value language="nl">
						<![CDATA[Publicatie]]>
					</value>
					<value language="fr">
						<![CDATA[Publication]]>
					</value>
					<value language="de">
						<![CDATA[Veröffentlichung]]>
					</value>
					<value language="sv">
						<![CDATA[Publikation]]>
					</value>
				</string>
			</Name>
			<IsLinkEntityType>False</IsLinkEntityType>
			<FieldTypes>
				<FieldType>
					<Id>PublicationIndustry</Id>
					<DataType>CVL</DataType>
					<CVLId>Industry</CVLId>
					<Name>
						<string>
							<value language="en">
								<![CDATA[Industry]]>
							</value>
							<value language="nl">
								<![CDATA[Industrie]]>
							</value>
							<value language="fr">
								<![CDATA[Secteur]]>
							</value>
							<value language="de">
								<![CDATA[Branche]]>
							</value>
							<value language="sv">
								<![CDATA[Industri]]>
							</value>
						</string>
					</Name>
					<Description>
						<string />
					</Description>
					<CategoryId>General</CategoryId>
					<DefaultValue />
					<Index>2</Index>
					<Hidden>False</Hidden>
					<ExcludeFromDefaultView>False</ExcludeFromDefaultView>
					<IsDisplayDescription>False</IsDisplayDescription>
					<IsDisplayName>False</IsDisplayName>
					<Mandatory>False</Mandatory>
					<Multivalue>False</Multivalue>
					<ReadOnly>False</ReadOnly>
					<Unique>False</Unique>
					<TrackChanges>True</TrackChanges>
					<Settings />
				</FieldType>
				<FieldType>
					<Id>PublicationName</Id>
					<DataType>String</DataType>
					<CVLId />
					<Name>
						<string>
							<value language="en">
								<![CDATA[Name]]>
							</value>
							<value language="nl">
								<![CDATA[Naam]]>
							</value>
							<value language="fr">
								<![CDATA[Nom]]>
							</value>
							<value language="de">
								<![CDATA[Name]]>
							</value>
							<value language="sv">
								<![CDATA[Namn]]>
							</value>
						</string>
					</Name>
					<Description>
						<string />
					</Description>
					<CategoryId>General</CategoryId>
					<DefaultValue />
					<Index>0</Index>
					<Hidden>False</Hidden>
					<ExcludeFromDefaultView>False</ExcludeFromDefaultView>
					<IsDisplayDescription>False</IsDisplayDescription>
					<IsDisplayName>True</IsDisplayName>
					<Mandatory>False</Mandatory>
					<Multivalue>False</Multivalue>
					<ReadOnly>False</ReadOnly>
					<Unique>False</Unique>
					<TrackChanges>True</TrackChanges>
					<Settings />
				</FieldType>
			</FieldTypes>
		</EntityType>
		<EntityType>
			<Id>Resource</Id>
			<Name>
				<string>
					<value language="en">
						<![CDATA[Resource]]>
					</value>
					<value language="nl">
						<![CDATA[Hulpbron]]>
					</value>
					<value language="fr">
						<![CDATA[Ressource]]>
					</value>
					<value language="de">
						<![CDATA[Ressource]]>
					</value>
					<value language="sv">
						<![CDATA[Resurs]]>
					</value>
				</string>
			</Name>
			<IsLinkEntityType>False</IsLinkEntityType>
			<FieldTypes>
				<FieldType>
					<Id>ResourceActivationDate</Id>
					<DataType>DateTime</DataType>
					<CVLId />
					<Name>
						<string>
							<value language="en">
								<![CDATA[Activation Date]]>
							</value>
						</string>
					</Name>
					<Description>
						<string>
							<value language="en">
								<![CDATA[Activation Date]]>
							</value>
						</string>
					</Description>
					<CategoryId>DigitalRightsInformation</CategoryId>
					<DefaultValue />
					<Index>16</Index>
					<Hidden>False</Hidden>
					<ExcludeFromDefaultView>False</ExcludeFromDefaultView>
					<IsDisplayDescription>False</IsDisplayDescription>
					<IsDisplayName>False</IsDisplayName>
					<Mandatory>False</Mandatory>
					<Multivalue>False</Multivalue>
					<ReadOnly>False</ReadOnly>
					<Unique>False</Unique>
					<TrackChanges>True</TrackChanges>
					<Settings />
				</FieldType>
				<FieldType>
					<Id>ResourceAPprovalStats</Id>
					<DataType>CVL</DataType>
					<CVLId>ResourceApproval</CVLId>
					<Name>
						<string>
							<value language="en">
								<![CDATA[Status]]>
							</value>
						</string>
					</Name>
					<Description>
						<string />
					</Description>
					<CategoryId>Statusinformation</CategoryId>
					<DefaultValue>Approved</DefaultValue>
					<Index>22</Index>
					<Hidden>False</Hidden>
					<ExcludeFromDefaultView>False</ExcludeFromDefaultView>
					<IsDisplayDescription>False</IsDisplayDescription>
					<IsDisplayName>False</IsDisplayName>
					<Mandatory>False</Mandatory>
					<Multivalue>False</Multivalue>
					<ReadOnly>False</ReadOnly>
					<Unique>False</Unique>
					<TrackChanges>True</TrackChanges>
					<Settings />
				</FieldType>
				<FieldType>
					<Id>ResourceChannelUsage</Id>
					<DataType>CVL</DataType>
					<CVLId>UsageRightsByChannel</CVLId>
					<Name>
						<string>
							<value language="en">
								<![CDATA[Channel Usage]]>
							</value>
						</string>
					</Name>
					<Description>
						<string />
					</Description>
					<CategoryId>DigitalRightsInformation</CategoryId>
					<DefaultValue />
					<Index>20</Index>
					<Hidden>False</Hidden>
					<ExcludeFromDefaultView>False</ExcludeFromDefaultView>
					<IsDisplayDescription>False</IsDisplayDescription>
					<IsDisplayName>False</IsDisplayName>
					<Mandatory>False</Mandatory>
					<Multivalue>True</Multivalue>
					<ReadOnly>False</ReadOnly>
					<Unique>False</Unique>
					<TrackChanges>True</TrackChanges>
					<Settings />
				</FieldType>
				<FieldType>
					<Id>ResourceDescription</Id>
					<DataType>String</DataType>
					<CVLId />
					<Name>
						<string>
							<value language="en">
								<![CDATA[Description]]>
							</value>
							<value language="nl">
								<![CDATA[Beschrijving]]>
							</value>
							<value language="fr">
								<![CDATA[Description]]>
							</value>
							<value language="de">
								<![CDATA[Beschreibung]]>
							</value>
							<value language="sv">
								<![CDATA[Beskrivning]]>
							</value>
						</string>
					</Name>
					<Description>
						<string />
					</Description>
					<CategoryId>General</CategoryId>
					<DefaultValue />
					<Index>5</Index>
					<Hidden>False</Hidden>
					<ExcludeFromDefaultView>False</ExcludeFromDefaultView>
					<IsDisplayDescription>False</IsDisplayDescription>
					<IsDisplayName>False</IsDisplayName>
					<Mandatory>False</Mandatory>
					<Multivalue>False</Multivalue>
					<ReadOnly>False</ReadOnly>
					<Unique>False</Unique>
					<TrackChanges>True</TrackChanges>
					<Settings />
				</FieldType>
				<FieldType>
					<Id>ResourceExpirationDate</Id>
					<DataType>DateTime</DataType>
					<CVLId />
					<Name>
						<string>
							<value language="en">
								<![CDATA[Expiration Date]]>
							</value>
						</string>
					</Name>
					<Description>
						<string>
							<value language="en">
								<![CDATA[Date assets expired]]>
							</value>
						</string>
					</Description>
					<CategoryId>DigitalRightsInformation</CategoryId>
					<DefaultValue />
					<Index>17</Index>
					<Hidden>False</Hidden>
					<ExcludeFromDefaultView>False</ExcludeFromDefaultView>
					<IsDisplayDescription>False</IsDisplayDescription>
					<IsDisplayName>False</IsDisplayName>
					<Mandatory>False</Mandatory>
					<Multivalue>False</Multivalue>
					<ReadOnly>False</ReadOnly>
					<Unique>False</Unique>
					<TrackChanges>True</TrackChanges>
					<Settings />
				</FieldType>
				<FieldType>
					<Id>ResourceFileId</Id>
					<DataType>File</DataType>
					<CVLId />
					<Name>
						<string>
							<value language="en">
								<![CDATA[File Id]]>
							</value>
							<value language="nl">
								<![CDATA[File Id]]>
							</value>
							<value language="fr">
								<![CDATA[ID fichier]]>
							</value>
							<value language="de">
								<![CDATA[Datei-ID]]>
							</value>
							<value language="sv">
								<![CDATA[Fil ID]]>
							</value>
						</string>
					</Name>
					<Description>
						<string />
					</Description>
					<CategoryId>FileInformation</CategoryId>
					<DefaultValue />
					<Index>2</Index>
					<Hidden>False</Hidden>
					<ExcludeFromDefaultView>False</ExcludeFromDefaultView>
					<IsDisplayDescription>False</IsDisplayDescription>
					<IsDisplayName>False</IsDisplayName>
					<Mandatory>False</Mandatory>
					<Multivalue>False</Multivalue>
					<ReadOnly>True</ReadOnly>
					<Unique>True</Unique>
					<TrackChanges>True</TrackChanges>
					<Settings />
				</FieldType>
				<FieldType>
					<Id>ResourceFilename</Id>
					<DataType>String</DataType>
					<CVLId />
					<Name>
						<string>
							<value language="en">
								<![CDATA[Filename]]>
							</value>
							<value language="nl">
								<![CDATA[Bestandsnaam]]>
							</value>
							<value language="fr">
								<![CDATA[Nom du fichier]]>
							</value>
							<value language="de">
								<![CDATA[Dateiname]]>
							</value>
							<value language="sv">
								<![CDATA[Filnamn]]>
							</value>
						</string>
					</Name>
					<Description>
						<string />
					</Description>
					<CategoryId>FileInformation</CategoryId>
					<DefaultValue />
					<Index>3</Index>
					<Hidden>False</Hidden>
					<ExcludeFromDefaultView>False</ExcludeFromDefaultView>
					<IsDisplayDescription>False</IsDisplayDescription>
					<IsDisplayName>False</IsDisplayName>
					<Mandatory>False</Mandatory>
					<Multivalue>False</Multivalue>
					<ReadOnly>False</ReadOnly>
					<Unique>True</Unique>
					<TrackChanges>True</TrackChanges>
					<Settings />
				</FieldType>
				<FieldType>
					<Id>ResourceHeight</Id>
					<DataType>String</DataType>
					<CVLId />
					<Name>
						<string>
							<value language="en">
								<![CDATA[Height]]>
							</value>
							<value language="nl">
								<![CDATA[Hoogte]]>
							</value>
							<value language="fr">
								<![CDATA[La taille]]>
							</value>
							<value language="de">
								<![CDATA[Höhe]]>
							</value>
							<value language="sv">
								<![CDATA[Höjd]]>
							</value>
						</string>
					</Name>
					<Description>
						<string />
					</Description>
					<CategoryId>FileInformation</CategoryId>
					<DefaultValue />
					<Index>13</Index>
					<Hidden>False</Hidden>
					<ExcludeFromDefaultView>False</ExcludeFromDefaultView>
					<IsDisplayDescription>False</IsDisplayDescription>
					<IsDisplayName>False</IsDisplayName>
					<Mandatory>False</Mandatory>
					<Multivalue>False</Multivalue>
					<ReadOnly>False</ReadOnly>
					<Unique>False</Unique>
					<TrackChanges>True</TrackChanges>
					<Settings />
				</FieldType>
				<FieldType>
					<Id>ResourceHorizontalResolution</Id>
					<DataType>String</DataType>
					<CVLId />
					<Name>
						<string>
							<value language="en">
								<![CDATA[Horizontal Resolution]]>
							</value>
							<value language="nl">
								<![CDATA[Horizontale resolutie]]>
							</value>
							<value language="fr">
								<![CDATA[Résolution horizontale]]>
							</value>
							<value language="de">
								<![CDATA[Horizontale Auflösung]]>
							</value>
							<value language="sv">
								<![CDATA[Horisontell upplösning]]>
							</value>
						</string>
					</Name>
					<Description>
						<string />
					</Description>
					<CategoryId>FileInformation</CategoryId>
					<DefaultValue />
					<Index>14</Index>
					<Hidden>False</Hidden>
					<ExcludeFromDefaultView>False</ExcludeFromDefaultView>
					<IsDisplayDescription>False</IsDisplayDescription>
					<IsDisplayName>False</IsDisplayName>
					<Mandatory>False</Mandatory>
					<Multivalue>False</Multivalue>
					<ReadOnly>False</ReadOnly>
					<Unique>False</Unique>
					<TrackChanges>True</TrackChanges>
					<Settings />
				</FieldType>
				<FieldType>
					<Id>ResourceImageAngle</Id>
					<DataType>CVL</DataType>
					<CVLId>ImageAngle</CVLId>
					<Name>
						<string>
							<value language="en">
								<![CDATA[Image angle]]>
							</value>
							<value language="nl">
								<![CDATA[Beeldhoek]]>
							</value>
							<value language="fr">
								<![CDATA[Angle de l'image]]>
							</value>
							<value language="de">
								<![CDATA[Bildwinkel]]>
							</value>
							<value language="sv">
								<![CDATA[Bildvinkel]]>
							</value>
						</string>
					</Name>
					<Description>
						<string />
					</Description>
					<CategoryId>General</CategoryId>
					<DefaultValue />
					<Index>9</Index>
					<Hidden>False</Hidden>
					<ExcludeFromDefaultView>False</ExcludeFromDefaultView>
					<IsDisplayDescription>False</IsDisplayDescription>
					<IsDisplayName>False</IsDisplayName>
					<Mandatory>False</Mandatory>
					<Multivalue>False</Multivalue>
					<ReadOnly>False</ReadOnly>
					<Unique>False</Unique>
					<TrackChanges>True</TrackChanges>
					<Settings />
				</FieldType>
				<FieldType>
					<Id>ResourceImageMap</Id>
					<DataType>String</DataType>
					<CVLId />
					<Name>
						<string>
							<value language="en">
								<![CDATA[ImageMap]]>
							</value>
							<value language="nl">
								<![CDATA[ImageMap]]>
							</value>
							<value language="fr">
								<![CDATA[Image interactive]]>
							</value>
							<value language="de">
								<![CDATA[Verweissensitive Grafik]]>
							</value>
							<value language="sv">
								<![CDATA[ImageMap]]>
							</value>
						</string>
					</Name>
					<Description>
						<string />
					</Description>
					<CategoryId>General</CategoryId>
					<DefaultValue />
					<Index>6</Index>
					<Hidden>False</Hidden>
					<ExcludeFromDefaultView>False</ExcludeFromDefaultView>
					<IsDisplayDescription>False</IsDisplayDescription>
					<IsDisplayName>False</IsDisplayName>
					<Mandatory>False</Mandatory>
					<Multivalue>False</Multivalue>
					<ReadOnly>False</ReadOnly>
					<Unique>False</Unique>
					<TrackChanges>True</TrackChanges>
					<Settings />
				</FieldType>
				<FieldType>
					<Id>ResourceImageOrientation</Id>
					<DataType>CVL</DataType>
					<CVLId>ImageOrientation</CVLId>
					<Name>
						<string>
							<value language="en">
								<![CDATA[Image orientation]]>
							</value>
							<value language="nl">
								<![CDATA[Beeldoriëntatie]]>
							</value>
							<value language="fr">
								<![CDATA[Orientation de l'image]]>
							</value>
							<value language="de">
								<![CDATA[Bildausrichtung]]>
							</value>
							<value language="sv">
								<![CDATA[Bildorientering]]>
							</value>
						</string>
					</Name>
					<Description>
						<string />
					</Description>
					<CategoryId>General</CategoryId>
					<DefaultValue />
					<Index>10</Index>
					<Hidden>False</Hidden>
					<ExcludeFromDefaultView>False</ExcludeFromDefaultView>
					<IsDisplayDescription>False</IsDisplayDescription>
					<IsDisplayName>False</IsDisplayName>
					<Mandatory>False</Mandatory>
					<Multivalue>False</Multivalue>
					<ReadOnly>False</ReadOnly>
					<Unique>False</Unique>
					<TrackChanges>True</TrackChanges>
					<Settings />
				</FieldType>
				<FieldType>
					<Id>ResourceImageRes</Id>
					<DataType>CVL</DataType>
					<CVLId>ImageRes</CVLId>
					<Name>
						<string>
							<value language="en">
								<![CDATA[Image Resolution]]>
							</value>
							<value language="nl">
								<![CDATA[Beeldresolutie]]>
							</value>
							<value language="fr">
								<![CDATA[Résolution d'image]]>
							</value>
							<value language="de">
								<![CDATA[Bildauflösung]]>
							</value>
							<value language="sv">
								<![CDATA[Bildupplösning]]>
							</value>
						</string>
					</Name>
					<Description>
						<string />
					</Description>
					<CategoryId>General</CategoryId>
					<DefaultValue>hires</DefaultValue>
					<Index>11</Index>
					<Hidden>False</Hidden>
					<ExcludeFromDefaultView>False</ExcludeFromDefaultView>
					<IsDisplayDescription>False</IsDisplayDescription>
					<IsDisplayName>False</IsDisplayName>
					<Mandatory>False</Mandatory>
					<Multivalue>False</Multivalue>
					<ReadOnly>False</ReadOnly>
					<Unique>False</Unique>
					<TrackChanges>True</TrackChanges>
					<Settings />
				</FieldType>
				<FieldType>
					<Id>ResourceMedia</Id>
					<DataType>CVL</DataType>
					<CVLId>Media</CVLId>
					<Name>
						<string>
							<value language="en">
								<![CDATA[Media]]>
							</value>
							<value language="nl">
								<![CDATA[Media]]>
							</value>
							<value language="fr">
								<![CDATA[Média]]>
							</value>
							<value language="de">
								<![CDATA[Medien]]>
							</value>
							<value language="sv">
								<![CDATA[Media]]>
							</value>
						</string>
					</Name>
					<Description>
						<string />
					</Description>
					<CategoryId>General</CategoryId>
					<DefaultValue>image</DefaultValue>
					<Index>7</Index>
					<Hidden>False</Hidden>
					<ExcludeFromDefaultView>False</ExcludeFromDefaultView>
					<IsDisplayDescription>True</IsDisplayDescription>
					<IsDisplayName>False</IsDisplayName>
					<Mandatory>False</Mandatory>
					<Multivalue>False</Multivalue>
					<ReadOnly>False</ReadOnly>
					<Unique>False</Unique>
					<TrackChanges>True</TrackChanges>
					<Settings />
				</FieldType>
				<FieldType>
					<Id>ResourceMediaType</Id>
					<DataType>CVL</DataType>
					<CVLId>MediaType</CVLId>
					<Name>
						<string>
							<value language="en">
								<![CDATA[Media type]]>
							</value>
							<value language="nl">
								<![CDATA[Media type]]>
							</value>
							<value language="fr">
								<![CDATA[Type de média]]>
							</value>
							<value language="de">
								<![CDATA[Medientyp]]>
							</value>
							<value language="sv">
								<![CDATA[Mediatyp]]>
							</value>
						</string>
					</Name>
					<Description>
						<string />
					</Description>
					<CategoryId>General</CategoryId>
					<DefaultValue />
					<Index>8</Index>
					<Hidden>False</Hidden>
					<ExcludeFromDefaultView>False</ExcludeFromDefaultView>
					<IsDisplayDescription>False</IsDisplayDescription>
					<IsDisplayName>False</IsDisplayName>
					<Mandatory>False</Mandatory>
					<Multivalue>False</Multivalue>
					<ReadOnly>False</ReadOnly>
					<Unique>False</Unique>
					<TrackChanges>True</TrackChanges>
					<Settings />
				</FieldType>
				<FieldType>
					<Id>ResourceMimeType</Id>
					<DataType>String</DataType>
					<CVLId />
					<Name>
						<string>
							<value language="en">
								<![CDATA[Mime Type]]>
							</value>
							<value language="nl">
								<![CDATA[Mime Type]]>
							</value>
							<value language="fr">
								<![CDATA[Type mime]]>
							</value>
							<value language="de">
								<![CDATA[Mime-Typ]]>
							</value>
							<value language="sv">
								<![CDATA[Mime Type]]>
							</value>
						</string>
					</Name>
					<Description>
						<string />
					</Description>
					<CategoryId>FileInformation</CategoryId>
					<DefaultValue />
					<Index>4</Index>
					<Hidden>False</Hidden>
					<ExcludeFromDefaultView>False</ExcludeFromDefaultView>
					<IsDisplayDescription>False</IsDisplayDescription>
					<IsDisplayName>False</IsDisplayName>
					<Mandatory>False</Mandatory>
					<Multivalue>False</Multivalue>
					<ReadOnly>False</ReadOnly>
					<Unique>False</Unique>
					<TrackChanges>True</TrackChanges>
					<Settings />
				</FieldType>
				<FieldType>
					<Id>ResourceName</Id>
					<DataType>String</DataType>
					<CVLId />
					<Name>
						<string>
							<value language="en">
								<![CDATA[Name]]>
							</value>
							<value language="nl">
								<![CDATA[Naam]]>
							</value>
							<value language="fr">
								<![CDATA[Nom]]>
							</value>
							<value language="de">
								<![CDATA[Name]]>
							</value>
							<value language="sv">
								<![CDATA[Namn]]>
							</value>
						</string>
					</Name>
					<Description>
						<string />
					</Description>
					<CategoryId>General</CategoryId>
					<DefaultValue />
					<Index>1</Index>
					<Hidden>False</Hidden>
					<ExcludeFromDefaultView>False</ExcludeFromDefaultView>
					<IsDisplayDescription>False</IsDisplayDescription>
					<IsDisplayName>True</IsDisplayName>
					<Mandatory>False</Mandatory>
					<Multivalue>False</Multivalue>
					<ReadOnly>False</ReadOnly>
					<Unique>False</Unique>
					<TrackChanges>True</TrackChanges>
					<Settings />
				</FieldType>
				<FieldType>
					<Id>ResourceRegionUsage</Id>
					<DataType>CVL</DataType>
					<CVLId>RegionUsage</CVLId>
					<Name>
						<string>
							<value language="en">
								<![CDATA[Region Usage]]>
							</value>
						</string>
					</Name>
					<Description>
						<string />
					</Description>
					<CategoryId>DigitalRightsInformation</CategoryId>
					<DefaultValue />
					<Index>19</Index>
					<Hidden>False</Hidden>
					<ExcludeFromDefaultView>False</ExcludeFromDefaultView>
					<IsDisplayDescription>False</IsDisplayDescription>
					<IsDisplayName>False</IsDisplayName>
					<Mandatory>False</Mandatory>
					<Multivalue>True</Multivalue>
					<ReadOnly>False</ReadOnly>
					<Unique>False</Unique>
					<TrackChanges>True</TrackChanges>
					<Settings />
				</FieldType>
				<FieldType>
					<Id>ResourceSource</Id>
					<DataType>String</DataType>
					<CVLId />
					<Name>
						<string>
							<value language="en">
								<![CDATA[Source]]>
							</value>
						</string>
					</Name>
					<Description>
						<string />
					</Description>
					<CategoryId>General</CategoryId>
					<DefaultValue />
					<Index>21</Index>
					<Hidden>False</Hidden>
					<ExcludeFromDefaultView>False</ExcludeFromDefaultView>
					<IsDisplayDescription>False</IsDisplayDescription>
					<IsDisplayName>False</IsDisplayName>
					<Mandatory>False</Mandatory>
					<Multivalue>False</Multivalue>
					<ReadOnly>False</ReadOnly>
					<Unique>False</Unique>
					<TrackChanges>True</TrackChanges>
					<Settings />
				</FieldType>
				<FieldType>
					<Id>ResourceUsageRightsDesc</Id>
					<DataType>LocaleString</DataType>
					<CVLId />
					<Name>
						<string>
							<value language="en">
								<![CDATA[Usage Rights Description]]>
							</value>
						</string>
					</Name>
					<Description>
						<string />
					</Description>
					<CategoryId>DigitalRightsInformation</CategoryId>
					<DefaultValue />
					<Index>18</Index>
					<Hidden>False</Hidden>
					<ExcludeFromDefaultView>False</ExcludeFromDefaultView>
					<IsDisplayDescription>False</IsDisplayDescription>
					<IsDisplayName>False</IsDisplayName>
					<Mandatory>False</Mandatory>
					<Multivalue>False</Multivalue>
					<ReadOnly>False</ReadOnly>
					<Unique>False</Unique>
					<TrackChanges>True</TrackChanges>
					<Settings />
				</FieldType>
				<FieldType>
					<Id>ResourceVerticalResolution</Id>
					<DataType>String</DataType>
					<CVLId />
					<Name>
						<string>
							<value language="en">
								<![CDATA[Vertical Resolution]]>
							</value>
							<value language="nl">
								<![CDATA[Horizontale resolutie]]>
							</value>
							<value language="fr">
								<![CDATA[Résolution horizontale]]>
							</value>
							<value language="de">
								<![CDATA[Horizontale Auflösung]]>
							</value>
							<value language="sv">
								<![CDATA[Horisontell upplösning]]>
							</value>
						</string>
					</Name>
					<Description>
						<string />
					</Description>
					<CategoryId>FileInformation</CategoryId>
					<DefaultValue />
					<Index>15</Index>
					<Hidden>False</Hidden>
					<ExcludeFromDefaultView>False</ExcludeFromDefaultView>
					<IsDisplayDescription>False</IsDisplayDescription>
					<IsDisplayName>False</IsDisplayName>
					<Mandatory>False</Mandatory>
					<Multivalue>False</Multivalue>
					<ReadOnly>False</ReadOnly>
					<Unique>False</Unique>
					<TrackChanges>True</TrackChanges>
					<Settings />
				</FieldType>
				<FieldType>
					<Id>ResourceWidth</Id>
					<DataType>String</DataType>
					<CVLId />
					<Name>
						<string>
							<value language="en">
								<![CDATA[Width]]>
							</value>
							<value language="nl">
								<![CDATA[Breedte]]>
							</value>
							<value language="fr">
								<![CDATA[Largeur]]>
							</value>
							<value language="de">
								<![CDATA[Breite]]>
							</value>
							<value language="sv">
								<![CDATA[Bredd]]>
							</value>
						</string>
					</Name>
					<Description>
						<string />
					</Description>
					<CategoryId>FileInformation</CategoryId>
					<DefaultValue />
					<Index>12</Index>
					<Hidden>False</Hidden>
					<ExcludeFromDefaultView>False</ExcludeFromDefaultView>
					<IsDisplayDescription>False</IsDisplayDescription>
					<IsDisplayName>False</IsDisplayName>
					<Mandatory>False</Mandatory>
					<Multivalue>False</Multivalue>
					<ReadOnly>False</ReadOnly>
					<Unique>False</Unique>
					<TrackChanges>True</TrackChanges>
					<Settings />
				</FieldType>
			</FieldTypes>
		</EntityType>
		<EntityType>
			<Id>Section</Id>
			<Name>
				<string>
					<value language="en">
						<![CDATA[Section]]>
					</value>
					<value language="nl">
						<![CDATA[Sectie]]>
					</value>
					<value language="fr">
						<![CDATA[Section]]>
					</value>
					<value language="de">
						<![CDATA[Abschnitt]]>
					</value>
					<value language="sv">
						<![CDATA[Sektion]]>
					</value>
				</string>
			</Name>
			<IsLinkEntityType>False</IsLinkEntityType>
			<FieldTypes>
				<FieldType>
					<Id>SectionId</Id>
					<DataType>String</DataType>
					<CVLId />
					<Name>
						<string>
							<value language="en">
								<![CDATA[Section Id]]>
							</value>
							<value language="nl">
								<![CDATA[Sectie Id]]>
							</value>
							<value language="fr">
								<![CDATA[ID section]]>
							</value>
							<value language="de">
								<![CDATA[Abschnitt-ID]]>
							</value>
							<value language="sv">
								<![CDATA[Avsnitt Id]]>
							</value>
						</string>
					</Name>
					<Description>
						<string />
					</Description>
					<CategoryId>General</CategoryId>
					<DefaultValue>
						<![CDATA[guid]]>
					</DefaultValue>
					<Index>1</Index>
					<Hidden>False</Hidden>
					<ExcludeFromDefaultView>False</ExcludeFromDefaultView>
					<IsDisplayDescription>False</IsDisplayDescription>
					<IsDisplayName>False</IsDisplayName>
					<Mandatory>False</Mandatory>
					<Multivalue>False</Multivalue>
					<ReadOnly>False</ReadOnly>
					<Unique>True</Unique>
					<TrackChanges>True</TrackChanges>
					<Settings />
				</FieldType>
				<FieldType>
					<Id>SectionName</Id>
					<DataType>String</DataType>
					<CVLId />
					<Name>
						<string>
							<value language="en">
								<![CDATA[Name]]>
							</value>
							<value language="nl">
								<![CDATA[Naam]]>
							</value>
							<value language="fr">
								<![CDATA[Nom]]>
							</value>
							<value language="de">
								<![CDATA[Name]]>
							</value>
							<value language="sv">
								<![CDATA[Namn]]>
							</value>
						</string>
					</Name>
					<Description>
						<string />
					</Description>
					<CategoryId>General</CategoryId>
					<DefaultValue />
					<Index>0</Index>
					<Hidden>False</Hidden>
					<ExcludeFromDefaultView>False</ExcludeFromDefaultView>
					<IsDisplayDescription>False</IsDisplayDescription>
					<IsDisplayName>True</IsDisplayName>
					<Mandatory>False</Mandatory>
					<Multivalue>False</Multivalue>
					<ReadOnly>False</ReadOnly>
					<Unique>False</Unique>
					<TrackChanges>True</TrackChanges>
					<Settings />
				</FieldType>
			</FieldTypes>
		</EntityType>
		<EntityType>
			<Id>Specification</Id>
			<Name>
				<string>
					<value language="en">
						<![CDATA[Specification]]>
					</value>
					<value language="nl">
						<![CDATA[Specificatie]]>
					</value>
					<value language="fr">
						<![CDATA[spécification]]>
					</value>
					<value language="de">
						<![CDATA[Spezifikation]]>
					</value>
					<value language="sv">
						<![CDATA[Specifikation]]>
					</value>
				</string>
			</Name>
			<IsLinkEntityType>False</IsLinkEntityType>
			<FieldTypes>
				<FieldType>
					<Id>SpecificationName</Id>
					<DataType>String</DataType>
					<CVLId />
					<Name>
						<string>
							<value language="en">
								<![CDATA[Name]]>
							</value>
							<value language="nl">
								<![CDATA[Name]]>
							</value>
							<value language="fr">
								<![CDATA[Nom]]>
							</value>
							<value language="de">
								<![CDATA[Name]]>
							</value>
							<value language="sv">
								<![CDATA[Namn]]>
							</value>
						</string>
					</Name>
					<Description>
						<string />
					</Description>
					<CategoryId>General</CategoryId>
					<DefaultValue />
					<Index>1</Index>
					<Hidden>False</Hidden>
					<ExcludeFromDefaultView>False</ExcludeFromDefaultView>
					<IsDisplayDescription>False</IsDisplayDescription>
					<IsDisplayName>True</IsDisplayName>
					<Mandatory>False</Mandatory>
					<Multivalue>False</Multivalue>
					<ReadOnly>False</ReadOnly>
					<Unique>False</Unique>
					<TrackChanges>True</TrackChanges>
					<Settings />
				</FieldType>
			</FieldTypes>
		</EntityType>
		<EntityType>
			<Id>Staff</Id>
			<Name>
				<string>
					<value language="en">
						<![CDATA[Staff]]>
					</value>
					<value language="nl">
						<![CDATA[Personeel]]>
					</value>
					<value language="fr">
						<![CDATA[Personnel]]>
					</value>
					<value language="de">
						<![CDATA[Personal]]>
					</value>
					<value language="sv">
						<![CDATA[Personal]]>
					</value>
				</string>
			</Name>
			<IsLinkEntityType>False</IsLinkEntityType>
			<FieldTypes>
				<FieldType>
					<Id>StaffConsumedHours</Id>
					<DataType>String</DataType>
					<CVLId />
					<Name>
						<string>
							<value language="en">
								<![CDATA[Consumed hours]]>
							</value>
						</string>
					</Name>
					<Description>
						<string />
					</Description>
					<CategoryId>General</CategoryId>
					<DefaultValue />
					<Index>8</Index>
					<Hidden>False</Hidden>
					<ExcludeFromDefaultView>False</ExcludeFromDefaultView>
					<IsDisplayDescription>False</IsDisplayDescription>
					<IsDisplayName>False</IsDisplayName>
					<Mandatory>False</Mandatory>
					<Multivalue>False</Multivalue>
					<ReadOnly>False</ReadOnly>
					<Unique>False</Unique>
					<TrackChanges>True</TrackChanges>
					<Settings>
						<Setting>
							<SettingsKey>IncludedInPlannerTooltip</SettingsKey>
							<SettingsValue>
								<![CDATA[true]]>
							</SettingsValue>
						</Setting>
					</Settings>
				</FieldType>
				<FieldType>
					<Id>StaffEndDate</Id>
					<DataType>DateTime</DataType>
					<CVLId />
					<Name>
						<string>
							<value language="en">
								<![CDATA[End date]]>
							</value>
						</string>
					</Name>
					<Description>
						<string />
					</Description>
					<CategoryId>General</CategoryId>
					<DefaultValue />
					<Index>4</Index>
					<Hidden>False</Hidden>
					<ExcludeFromDefaultView>False</ExcludeFromDefaultView>
					<IsDisplayDescription>False</IsDisplayDescription>
					<IsDisplayName>False</IsDisplayName>
					<Mandatory>False</Mandatory>
					<Multivalue>False</Multivalue>
					<ReadOnly>False</ReadOnly>
					<Unique>False</Unique>
					<TrackChanges>True</TrackChanges>
					<Settings>
						<Setting>
							<SettingsKey>IncludedInPlannerTooltip</SettingsKey>
							<SettingsValue>
								<![CDATA[true]]>
							</SettingsValue>
						</Setting>
					</Settings>
				</FieldType>
				<FieldType>
					<Id>StaffEstimatedHours</Id>
					<DataType>String</DataType>
					<CVLId />
					<Name>
						<string>
							<value language="en">
								<![CDATA[Estimated hours]]>
							</value>
						</string>
					</Name>
					<Description>
						<string />
					</Description>
					<CategoryId>General</CategoryId>
					<DefaultValue />
					<Index>7</Index>
					<Hidden>False</Hidden>
					<ExcludeFromDefaultView>False</ExcludeFromDefaultView>
					<IsDisplayDescription>False</IsDisplayDescription>
					<IsDisplayName>False</IsDisplayName>
					<Mandatory>False</Mandatory>
					<Multivalue>False</Multivalue>
					<ReadOnly>False</ReadOnly>
					<Unique>False</Unique>
					<TrackChanges>True</TrackChanges>
					<Settings>
						<Setting>
							<SettingsKey>IncludedInPlannerTooltip</SettingsKey>
							<SettingsValue>
								<![CDATA[true]]>
							</SettingsValue>
						</Setting>
					</Settings>
				</FieldType>
				<FieldType>
					<Id>StaffId</Id>
					<DataType>String</DataType>
					<CVLId />
					<Name>
						<string>
							<value language="en">
								<![CDATA[Id]]>
							</value>
						</string>
					</Name>
					<Description>
						<string />
					</Description>
					<CategoryId>General</CategoryId>
					<DefaultValue />
					<Index>9</Index>
					<Hidden>False</Hidden>
					<ExcludeFromDefaultView>False</ExcludeFromDefaultView>
					<IsDisplayDescription>False</IsDisplayDescription>
					<IsDisplayName>False</IsDisplayName>
					<Mandatory>False</Mandatory>
					<Multivalue>False</Multivalue>
					<ReadOnly>False</ReadOnly>
					<Unique>True</Unique>
					<TrackChanges>True</TrackChanges>
					<Settings />
				</FieldType>
				<FieldType>
					<Id>StaffName</Id>
					<DataType>CVL</DataType>
					<CVLId>StaffName</CVLId>
					<Name>
						<string>
							<value language="en">
								<![CDATA[Name]]>
							</value>
						</string>
					</Name>
					<Description>
						<string />
					</Description>
					<CategoryId>General</CategoryId>
					<DefaultValue />
					<Index>2</Index>
					<Hidden>False</Hidden>
					<ExcludeFromDefaultView>False</ExcludeFromDefaultView>
					<IsDisplayDescription>False</IsDisplayDescription>
					<IsDisplayName>False</IsDisplayName>
					<Mandatory>False</Mandatory>
					<Multivalue>False</Multivalue>
					<ReadOnly>False</ReadOnly>
					<Unique>False</Unique>
					<TrackChanges>True</TrackChanges>
					<Settings>
						<Setting>
							<SettingsKey>IncludedInPlannerTooltip</SettingsKey>
							<SettingsValue>
								<![CDATA[true]]>
							</SettingsValue>
						</Setting>
					</Settings>
				</FieldType>
				<FieldType>
					<Id>StaffRole</Id>
					<DataType>CVL</DataType>
					<CVLId>StaffRole</CVLId>
					<Name>
						<string>
							<value language="en">
								<![CDATA[Role]]>
							</value>
						</string>
					</Name>
					<Description>
						<string />
					</Description>
					<CategoryId>General</CategoryId>
					<DefaultValue />
					<Index>1</Index>
					<Hidden>False</Hidden>
					<ExcludeFromDefaultView>False</ExcludeFromDefaultView>
					<IsDisplayDescription>False</IsDisplayDescription>
					<IsDisplayName>True</IsDisplayName>
					<Mandatory>False</Mandatory>
					<Multivalue>False</Multivalue>
					<ReadOnly>False</ReadOnly>
					<Unique>False</Unique>
					<TrackChanges>True</TrackChanges>
					<Settings>
						<Setting>
							<SettingsKey>IncludedInPlannerTooltip</SettingsKey>
							<SettingsValue>
								<![CDATA[true]]>
							</SettingsValue>
						</Setting>
					</Settings>
				</FieldType>
				<FieldType>
					<Id>StaffStartDate</Id>
					<DataType>DateTime</DataType>
					<CVLId />
					<Name>
						<string>
							<value language="en">
								<![CDATA[Start date]]>
							</value>
						</string>
					</Name>
					<Description>
						<string />
					</Description>
					<CategoryId>General</CategoryId>
					<DefaultValue />
					<Index>3</Index>
					<Hidden>False</Hidden>
					<ExcludeFromDefaultView>False</ExcludeFromDefaultView>
					<IsDisplayDescription>False</IsDisplayDescription>
					<IsDisplayName>False</IsDisplayName>
					<Mandatory>False</Mandatory>
					<Multivalue>False</Multivalue>
					<ReadOnly>False</ReadOnly>
					<Unique>False</Unique>
					<TrackChanges>True</TrackChanges>
					<Settings>
						<Setting>
							<SettingsKey>IncludedInPlannerTooltip</SettingsKey>
							<SettingsValue>
								<![CDATA[true]]>
							</SettingsValue>
						</Setting>
					</Settings>
				</FieldType>
			</FieldTypes>
		</EntityType>
		<EntityType>
			<Id>Task</Id>
			<Name>
				<string>
					<value language="en">
						<![CDATA[Task]]>
					</value>
					<value language="nl">
						<![CDATA[Taak]]>
					</value>
					<value language="fr">
						<![CDATA[Tâche]]>
					</value>
					<value language="de">
						<![CDATA[Aufgabe]]>
					</value>
					<value language="sv">
						<![CDATA[Uppgift]]>
					</value>
				</string>
			</Name>
			<IsLinkEntityType>False</IsLinkEntityType>
			<FieldTypes>
				<FieldType>
					<Id>TaskAssignedGroupTask</Id>
					<DataType>CVL</DataType>
					<CVLId>GroupTask</CVLId>
					<Name>
						<string>
							<value language="en">
								<![CDATA[Assigned to group]]>
							</value>
							<value language="nl">
								<![CDATA[Ingedeeld in groep]]>
							</value>
							<value language="fr">
								<![CDATA[Assigné à groupe]]>
							</value>
							<value language="de">
								<![CDATA[Zugeordnet zu Gruppe]]>
							</value>
							<value language="sv">
								<![CDATA[Ansvarig grupp]]>
							</value>
						</string>
					</Name>
					<Description>
						<string />
					</Description>
					<CategoryId>General</CategoryId>
					<DefaultValue />
					<Index>8</Index>
					<Hidden>False</Hidden>
					<ExcludeFromDefaultView>False</ExcludeFromDefaultView>
					<IsDisplayDescription>False</IsDisplayDescription>
					<IsDisplayName>False</IsDisplayName>
					<Mandatory>False</Mandatory>
					<Multivalue>False</Multivalue>
					<ReadOnly>False</ReadOnly>
					<Unique>False</Unique>
					<TrackChanges>True</TrackChanges>
					<Settings />
				</FieldType>
				<FieldType>
					<Id>TaskAssignedTo</Id>
					<DataType>CVL</DataType>
					<CVLId>Users</CVLId>
					<Name>
						<string>
							<value language="en">
								<![CDATA[Assigned To]]>
							</value>
							<value language="nl">
								<![CDATA[Toegewezen aan]]>
							</value>
							<value language="fr">
								<![CDATA[Attribué à]]>
							</value>
							<value language="de">
								<![CDATA[Zugewiesen an]]>
							</value>
							<value language="sv">
								<![CDATA[Tilldelats]]>
							</value>
						</string>
					</Name>
					<Description>
						<string />
					</Description>
					<CategoryId>General</CategoryId>
					<DefaultValue />
					<Index>3</Index>
					<Hidden>False</Hidden>
					<ExcludeFromDefaultView>False</ExcludeFromDefaultView>
					<IsDisplayDescription>False</IsDisplayDescription>
					<IsDisplayName>False</IsDisplayName>
					<Mandatory>False</Mandatory>
					<Multivalue>False</Multivalue>
					<ReadOnly>False</ReadOnly>
					<Unique>False</Unique>
					<TrackChanges>True</TrackChanges>
					<Settings />
				</FieldType>
				<FieldType>
					<Id>TaskCreatedBy</Id>
					<DataType>CVL</DataType>
					<CVLId>Users</CVLId>
					<Name>
						<string>
							<value language="en">
								<![CDATA[Created By]]>
							</value>
							<value language="nl">
								<![CDATA[Gemaakt door]]>
							</value>
							<value language="fr">
								<![CDATA[Créé par]]>
							</value>
							<value language="de">
								<![CDATA[Erstellt von]]>
							</value>
							<value language="sv">
								<![CDATA[Skapad av]]>
							</value>
						</string>
					</Name>
					<Description>
						<string />
					</Description>
					<CategoryId>General</CategoryId>
					<DefaultValue />
					<Index>3</Index>
					<Hidden>False</Hidden>
					<ExcludeFromDefaultView>False</ExcludeFromDefaultView>
					<IsDisplayDescription>False</IsDisplayDescription>
					<IsDisplayName>False</IsDisplayName>
					<Mandatory>False</Mandatory>
					<Multivalue>False</Multivalue>
					<ReadOnly>False</ReadOnly>
					<Unique>False</Unique>
					<TrackChanges>True</TrackChanges>
					<Settings />
				</FieldType>
				<FieldType>
					<Id>TaskDescription</Id>
					<DataType>String</DataType>
					<CVLId />
					<Name>
						<string>
							<value language="en">
								<![CDATA[Description]]>
							</value>
							<value language="nl">
								<![CDATA[Beschrijving]]>
							</value>
							<value language="fr">
								<![CDATA[Description]]>
							</value>
							<value language="de">
								<![CDATA[Beschreibung]]>
							</value>
							<value language="sv">
								<![CDATA[Beskrivning]]>
							</value>
						</string>
					</Name>
					<Description>
						<string />
					</Description>
					<CategoryId>General</CategoryId>
					<DefaultValue />
					<Index>1</Index>
					<Hidden>False</Hidden>
					<ExcludeFromDefaultView>False</ExcludeFromDefaultView>
					<IsDisplayDescription>True</IsDisplayDescription>
					<IsDisplayName>False</IsDisplayName>
					<Mandatory>False</Mandatory>
					<Multivalue>False</Multivalue>
					<ReadOnly>False</ReadOnly>
					<Unique>False</Unique>
					<TrackChanges>True</TrackChanges>
					<Settings />
				</FieldType>
				<FieldType>
					<Id>TaskDueDate</Id>
					<DataType>DateTime</DataType>
					<CVLId />
					<Name>
						<string>
							<value language="en">
								<![CDATA[Due Date]]>
							</value>
							<value language="nl">
								<![CDATA[Einddatum]]>
							</value>
							<value language="fr">
								<![CDATA[Date d'échéance]]>
							</value>
							<value language="de">
								<![CDATA[Fälligkeitsdatum]]>
							</value>
							<value language="sv">
								<![CDATA[Förfallodatum]]>
							</value>
						</string>
					</Name>
					<Description>
						<string />
					</Description>
					<CategoryId>General</CategoryId>
					<DefaultValue />
					<Index>5</Index>
					<Hidden>False</Hidden>
					<ExcludeFromDefaultView>False</ExcludeFromDefaultView>
					<IsDisplayDescription>False</IsDisplayDescription>
					<IsDisplayName>False</IsDisplayName>
					<Mandatory>False</Mandatory>
					<Multivalue>False</Multivalue>
					<ReadOnly>False</ReadOnly>
					<Unique>False</Unique>
					<TrackChanges>True</TrackChanges>
					<Settings />
				</FieldType>
				<FieldType>
					<Id>TaskEmail</Id>
					<DataType>Boolean</DataType>
					<CVLId />
					<Name>
						<string>
							<value language="en">
								<![CDATA[E-mail]]>
							</value>
							<value language="nl">
								<![CDATA[E-mail]]>
							</value>
							<value language="fr">
								<![CDATA[E-mail]]>
							</value>
							<value language="de">
								<![CDATA[E-mail]]>
							</value>
							<value language="sv">
								<![CDATA[E-mail]]>
							</value>
						</string>
					</Name>
					<Description>
						<string />
					</Description>
					<CategoryId>General</CategoryId>
					<DefaultValue />
					<Index>7</Index>
					<Hidden>False</Hidden>
					<ExcludeFromDefaultView>False</ExcludeFromDefaultView>
					<IsDisplayDescription>False</IsDisplayDescription>
					<IsDisplayName>False</IsDisplayName>
					<Mandatory>False</Mandatory>
					<Multivalue>False</Multivalue>
					<ReadOnly>False</ReadOnly>
					<Unique>False</Unique>
					<TrackChanges>True</TrackChanges>
					<Settings />
				</FieldType>
				<FieldType>
					<Id>TaskName</Id>
					<DataType>String</DataType>
					<CVLId />
					<Name>
						<string>
							<value language="en">
								<![CDATA[Name]]>
							</value>
							<value language="nl">
								<![CDATA[Naam]]>
							</value>
							<value language="fr">
								<![CDATA[Nom]]>
							</value>
							<value language="de">
								<![CDATA[Name]]>
							</value>
							<value language="sv">
								<![CDATA[Namn]]>
							</value>
						</string>
					</Name>
					<Description>
						<string />
					</Description>
					<CategoryId>General</CategoryId>
					<DefaultValue />
					<Index>0</Index>
					<Hidden>False</Hidden>
					<ExcludeFromDefaultView>False</ExcludeFromDefaultView>
					<IsDisplayDescription>False</IsDisplayDescription>
					<IsDisplayName>True</IsDisplayName>
					<Mandatory>False</Mandatory>
					<Multivalue>False</Multivalue>
					<ReadOnly>False</ReadOnly>
					<Unique>False</Unique>
					<TrackChanges>True</TrackChanges>
					<Settings />
				</FieldType>
				<FieldType>
					<Id>TaskStatus</Id>
					<DataType>CVL</DataType>
					<CVLId>TaskStatus</CVLId>
					<Name>
						<string>
							<value language="en">
								<![CDATA[Status]]>
							</value>
							<value language="nl">
								<![CDATA[Toestand]]>
							</value>
							<value language="fr">
								<![CDATA[État]]>
							</value>
							<value language="de">
								<![CDATA[Status]]>
							</value>
							<value language="sv">
								<![CDATA[Status]]>
							</value>
						</string>
					</Name>
					<Description>
						<string />
					</Description>
					<CategoryId>General</CategoryId>
					<DefaultValue />
					<Index>4</Index>
					<Hidden>False</Hidden>
					<ExcludeFromDefaultView>False</ExcludeFromDefaultView>
					<IsDisplayDescription>False</IsDisplayDescription>
					<IsDisplayName>False</IsDisplayName>
					<Mandatory>False</Mandatory>
					<Multivalue>False</Multivalue>
					<ReadOnly>False</ReadOnly>
					<Unique>False</Unique>
					<TrackChanges>True</TrackChanges>
					<Settings />
				</FieldType>
			</FieldTypes>
		</EntityType>
	</EntityTypes>
	<LinkTypes>
		<LinkType>
			<Id>ActivityActivity</Id>
			<Index>0</Index>
			<LinkEntityTypeId />
			<SourceEntityTypeId>Activity</SourceEntityTypeId>
			<SourceName>
				<string>
					<value language="en">
						<![CDATA[Sub Activity]]>
					</value>
					<value language="nl">
						<![CDATA[Activiteit]]>
					</value>
					<value language="fr">
						<![CDATA[Activité]]>
					</value>
					<value language="de">
						<![CDATA[Aktivität]]>
					</value>
					<value language="sv">
						<![CDATA[Aktivitet]]>
					</value>
				</string>
			</SourceName>
			<TargetEntityTypeId>Activity</TargetEntityTypeId>
			<TargetName>
				<string>
					<value language="en">
						<![CDATA[Part of Activity]]>
					</value>
					<value language="nl">
						<![CDATA[Activiteit]]>
					</value>
					<value language="fr">
						<![CDATA[Activité]]>
					</value>
					<value language="de">
						<![CDATA[Aktivität]]>
					</value>
					<value language="sv">
						<![CDATA[Aktivitet]]>
					</value>
				</string>
			</TargetName>
		</LinkType>
		<LinkType>
			<Id>ActivityBudget</Id>
			<Index>80</Index>
			<LinkEntityTypeId />
			<SourceEntityTypeId>Activity</SourceEntityTypeId>
			<SourceName>
				<string>
					<value language="en">
						<![CDATA[Budget]]>
					</value>
					<value language="nl">
						<![CDATA[Begroting]]>
					</value>
					<value language="fr">
						<![CDATA[Budget]]>
					</value>
					<value language="de">
						<![CDATA[Budget]]>
					</value>
					<value language="sv">
						<![CDATA[Budget]]>
					</value>
				</string>
			</SourceName>
			<TargetEntityTypeId>Budget</TargetEntityTypeId>
			<TargetName>
				<string>
					<value language="en">
						<![CDATA[Activity]]>
					</value>
					<value language="nl">
						<![CDATA[Activiteit]]>
					</value>
					<value language="fr">
						<![CDATA[Activité]]>
					</value>
					<value language="de">
						<![CDATA[Aktivität]]>
					</value>
					<value language="sv">
						<![CDATA[Aktivitet]]>
					</value>
				</string>
			</TargetName>
		</LinkType>
		<LinkType>
			<Id>ActivityBundle</Id>
			<Index>0</Index>
			<LinkEntityTypeId />
			<SourceEntityTypeId>Activity</SourceEntityTypeId>
			<SourceName>
				<string>
					<value language="en">
						<![CDATA[Bundle]]>
					</value>
					<value language="nl">
						<![CDATA[Bundel]]>
					</value>
					<value language="fr">
						<![CDATA[Offre groupée]]>
					</value>
					<value language="de">
						<![CDATA[Bündel]]>
					</value>
					<value language="sv">
						<![CDATA[Paket]]>
					</value>
				</string>
			</SourceName>
			<TargetEntityTypeId>Bundle</TargetEntityTypeId>
			<TargetName>
				<string>
					<value language="en">
						<![CDATA[Activities]]>
					</value>
					<value language="nl">
						<![CDATA[Activiteiten]]>
					</value>
					<value language="fr">
						<![CDATA[Activités]]>
					</value>
					<value language="de">
						<![CDATA[Aktivitäten]]>
					</value>
					<value language="sv">
						<![CDATA[Aktiviteter]]>
					</value>
				</string>
			</TargetName>
		</LinkType>
		<LinkType>
			<Id>ActivityCelebrity</Id>
			<Index>100</Index>
			<LinkEntityTypeId />
			<SourceEntityTypeId>Activity</SourceEntityTypeId>
			<SourceName>
				<string>
					<value language="en">
						<![CDATA[Celebrity]]>
					</value>
				</string>
			</SourceName>
			<TargetEntityTypeId>Celebrity</TargetEntityTypeId>
			<TargetName>
				<string>
					<value language="en">
						<![CDATA[Activity]]>
					</value>
				</string>
			</TargetName>
		</LinkType>
		<LinkType>
			<Id>ActivityItem</Id>
			<Index>0</Index>
			<LinkEntityTypeId />
			<SourceEntityTypeId>Activity</SourceEntityTypeId>
			<SourceName>
				<string>
					<value language="en">
						<![CDATA[Items]]>
					</value>
					<value language="nl">
						<![CDATA[Items]]>
					</value>
					<value language="fr">
						<![CDATA[Élément]]>
					</value>
					<value language="de">
						<![CDATA[Artikel]]>
					</value>
					<value language="sv">
						<![CDATA[Artikel]]>
					</value>
				</string>
			</SourceName>
			<TargetEntityTypeId>Item</TargetEntityTypeId>
			<TargetName>
				<string>
					<value language="en">
						<![CDATA[Activities]]>
					</value>
					<value language="nl">
						<![CDATA[Activiteiten]]>
					</value>
					<value language="fr">
						<![CDATA[Activités]]>
					</value>
					<value language="de">
						<![CDATA[Aktivitäten]]>
					</value>
					<value language="sv">
						<![CDATA[Aktiviteter]]>
					</value>
				</string>
			</TargetName>
		</LinkType>
		<LinkType>
			<Id>ActivityMediaChannels</Id>
			<Index>20</Index>
			<LinkEntityTypeId />
			<SourceEntityTypeId>Activity</SourceEntityTypeId>
			<SourceName>
				<string>
					<value language="en">
						<![CDATA[Media Channel]]>
					</value>
					<value language="nl">
						<![CDATA[Mediakanaal]]>
					</value>
					<value language="fr">
						<![CDATA[Médias]]>
					</value>
					<value language="de">
						<![CDATA[Medienkanal]]>
					</value>
					<value language="sv">
						<![CDATA[Mediakanal]]>
					</value>
				</string>
			</SourceName>
			<TargetEntityTypeId>MediaChannel</TargetEntityTypeId>
			<TargetName>
				<string>
					<value language="en">
						<![CDATA[Activity]]>
					</value>
					<value language="nl">
						<![CDATA[Activiteit]]>
					</value>
					<value language="fr">
						<![CDATA[Activité]]>
					</value>
					<value language="de">
						<![CDATA[Aktivität]]>
					</value>
					<value language="sv">
						<![CDATA[Aktivitet]]>
					</value>
				</string>
			</TargetName>
		</LinkType>
		<LinkType>
			<Id>ActivityMilestone</Id>
			<Index>0</Index>
			<LinkEntityTypeId />
			<SourceEntityTypeId>Activity</SourceEntityTypeId>
			<SourceName>
				<string>
					<value language="en">
						<![CDATA[Milestone]]>
					</value>
					<value language="nl">
						<![CDATA[Mijlpalen]]>
					</value>
					<value language="fr">
						<![CDATA[Milestones]]>
					</value>
					<value language="de">
						<![CDATA[Meilensteine]]>
					</value>
					<value language="sv">
						<![CDATA[Milstolpar]]>
					</value>
				</string>
			</SourceName>
			<TargetEntityTypeId>Milestone</TargetEntityTypeId>
			<TargetName>
				<string>
					<value language="en">
						<![CDATA[Aktiviteter]]>
					</value>
					<value language="nl">
						<![CDATA[Activiteiten]]>
					</value>
					<value language="fr">
						<![CDATA[Activités]]>
					</value>
					<value language="de">
						<![CDATA[Aktivitäten]]>
					</value>
					<value language="sv">
						<![CDATA[Activities]]>
					</value>
				</string>
			</TargetName>
		</LinkType>
		<LinkType>
			<Id>ActivityProducts</Id>
			<Index>6</Index>
			<LinkEntityTypeId />
			<SourceEntityTypeId>Activity</SourceEntityTypeId>
			<SourceName>
				<string>
					<value language="en">
						<![CDATA[Products]]>
					</value>
					<value language="nl">
						<![CDATA[Producten]]>
					</value>
					<value language="fr">
						<![CDATA[Produits]]>
					</value>
					<value language="de">
						<![CDATA[Produkte]]>
					</value>
					<value language="sv">
						<![CDATA[Produkter]]>
					</value>
				</string>
			</SourceName>
			<TargetEntityTypeId>Product</TargetEntityTypeId>
			<TargetName>
				<string>
					<value language="en">
						<![CDATA[Activities]]>
					</value>
					<value language="nl">
						<![CDATA[Activiteiten]]>
					</value>
					<value language="fr">
						<![CDATA[Activités]]>
					</value>
					<value language="de">
						<![CDATA[Aktivitäten]]>
					</value>
					<value language="sv">
						<![CDATA[Aktiviteter]]>
					</value>
				</string>
			</TargetName>
		</LinkType>
		<LinkType>
			<Id>ActivityPromotion</Id>
			<Index>50</Index>
			<LinkEntityTypeId />
			<SourceEntityTypeId>Activity</SourceEntityTypeId>
			<SourceName>
				<string>
					<value language="en">
						<![CDATA[Promotion]]>
					</value>
					<value language="nl">
						<![CDATA[Campagne]]>
					</value>
					<value language="fr">
						<![CDATA[Campagne]]>
					</value>
					<value language="de">
						<![CDATA[Kampagne]]>
					</value>
					<value language="sv">
						<![CDATA[Kampanj]]>
					</value>
				</string>
			</SourceName>
			<TargetEntityTypeId>Promotion</TargetEntityTypeId>
			<TargetName>
				<string>
					<value language="en">
						<![CDATA[Activity]]>
					</value>
					<value language="nl">
						<![CDATA[Activiteit]]>
					</value>
					<value language="fr">
						<![CDATA[Activité]]>
					</value>
					<value language="de">
						<![CDATA[Aktivität]]>
					</value>
					<value language="sv">
						<![CDATA[Aktivitet]]>
					</value>
				</string>
			</TargetName>
		</LinkType>
		<LinkType>
			<Id>ActivityResources</Id>
			<Index>2</Index>
			<LinkEntityTypeId />
			<SourceEntityTypeId>Activity</SourceEntityTypeId>
			<SourceName>
				<string>
					<value language="en">
						<![CDATA[Resources]]>
					</value>
					<value language="nl">
						<![CDATA[Hulpbron]]>
					</value>
					<value language="fr">
						<![CDATA[Ressource]]>
					</value>
					<value language="de">
						<![CDATA[Ressource]]>
					</value>
					<value language="sv">
						<![CDATA[Resurs]]>
					</value>
				</string>
			</SourceName>
			<TargetEntityTypeId>Resource</TargetEntityTypeId>
			<TargetName>
				<string>
					<value language="en">
						<![CDATA[Activities]]>
					</value>
					<value language="nl">
						<![CDATA[Activiteiten]]>
					</value>
					<value language="fr">
						<![CDATA[Activités]]>
					</value>
					<value language="de">
						<![CDATA[Aktivität]]>
					</value>
					<value language="sv">
						<![CDATA[Aktiviteter]]>
					</value>
				</string>
			</TargetName>
		</LinkType>
		<LinkType>
			<Id>ActivityStaff</Id>
			<Index>99</Index>
			<LinkEntityTypeId />
			<SourceEntityTypeId>Activity</SourceEntityTypeId>
			<SourceName>
				<string>
					<value language="en">
						<![CDATA[Staff]]>
					</value>
					<value language="nl">
						<![CDATA[Personeel]]>
					</value>
					<value language="fr">
						<![CDATA[Personnel]]>
					</value>
					<value language="de">
						<![CDATA[Personal]]>
					</value>
					<value language="sv">
						<![CDATA[Personal]]>
					</value>
				</string>
			</SourceName>
			<TargetEntityTypeId>Staff</TargetEntityTypeId>
			<TargetName>
				<string>
					<value language="en">
						<![CDATA[Activity]]>
					</value>
					<value language="nl">
						<![CDATA[Activiteit]]>
					</value>
					<value language="fr">
						<![CDATA[Activité]]>
					</value>
					<value language="de">
						<![CDATA[Aktivität]]>
					</value>
					<value language="sv">
						<![CDATA[Aktivitet]]>
					</value>
				</string>
			</TargetName>
		</LinkType>
		<LinkType>
			<Id>ApplicationProduct</Id>
			<Index>0</Index>
			<LinkEntityTypeId />
			<SourceEntityTypeId>Application</SourceEntityTypeId>
			<SourceName>
				<string>
					<value language="en">
						<![CDATA[Products]]>
					</value>
				</string>
			</SourceName>
			<TargetEntityTypeId>Product</TargetEntityTypeId>
			<TargetName>
				<string>
					<value language="en">
						<![CDATA[Applications]]>
					</value>
				</string>
			</TargetName>
		</LinkType>
		<LinkType>
			<Id>ApplicationResource</Id>
			<Index>0</Index>
			<LinkEntityTypeId />
			<SourceEntityTypeId>Application</SourceEntityTypeId>
			<SourceName>
				<string>
					<value language="en">
						<![CDATA[Resources]]>
					</value>
				</string>
			</SourceName>
			<TargetEntityTypeId>Resource</TargetEntityTypeId>
			<TargetName>
				<string>
					<value language="en">
						<![CDATA[Applications]]>
					</value>
				</string>
			</TargetName>
		</LinkType>
		<LinkType>
			<Id>AssortmentAssortment</Id>
			<Index>1</Index>
			<LinkEntityTypeId />
			<SourceEntityTypeId>Assortment</SourceEntityTypeId>
			<SourceName>
				<string>
					<value language="en">
						<![CDATA[Assortments]]>
					</value>
					<value language="nl">
						<![CDATA[Verzamelingen]]>
					</value>
					<value language="fr">
						<![CDATA[Assortiments]]>
					</value>
					<value language="de">
						<![CDATA[Kollektionen]]>
					</value>
					<value language="sv">
						<![CDATA[Samlingar]]>
					</value>
				</string>
			</SourceName>
			<TargetEntityTypeId>Assortment</TargetEntityTypeId>
			<TargetName>
				<string>
					<value language="en">
						<![CDATA[Assortments]]>
					</value>
					<value language="nl">
						<![CDATA[Verzamelingen]]>
					</value>
					<value language="fr">
						<![CDATA[Assortiments]]>
					</value>
					<value language="de">
						<![CDATA[Kollektionen]]>
					</value>
					<value language="sv">
						<![CDATA[Samlingar]]>
					</value>
				</string>
			</TargetName>
		</LinkType>
		<LinkType>
			<Id>AssortmentProduct</Id>
			<Index>10</Index>
			<LinkEntityTypeId />
			<SourceEntityTypeId>Assortment</SourceEntityTypeId>
			<SourceName>
				<string>
					<value language="en">
						<![CDATA[Products]]>
					</value>
					<value language="nl">
						<![CDATA[Producten]]>
					</value>
					<value language="fr">
						<![CDATA[Produits]]>
					</value>
					<value language="de">
						<![CDATA[Produkte]]>
					</value>
					<value language="sv">
						<![CDATA[Produkter]]>
					</value>
				</string>
			</SourceName>
			<TargetEntityTypeId>Product</TargetEntityTypeId>
			<TargetName>
				<string>
					<value language="en">
						<![CDATA[Assortments]]>
					</value>
					<value language="nl">
						<![CDATA[Verzamelingen]]>
					</value>
					<value language="fr">
						<![CDATA[Assortiments]]>
					</value>
					<value language="de">
						<![CDATA[Kollektionen]]>
					</value>
					<value language="sv">
						<![CDATA[Samlingar]]>
					</value>
				</string>
			</TargetName>
		</LinkType>
		<LinkType>
			<Id>BundleBundle</Id>
			<Index>9</Index>
			<LinkEntityTypeId />
			<SourceEntityTypeId>Bundle</SourceEntityTypeId>
			<SourceName>
				<string>
					<value language="en">
						<![CDATA[Bundle]]>
					</value>
					<value language="nl">
						<![CDATA[Bundel]]>
					</value>
					<value language="fr">
						<![CDATA[Offre groupée]]>
					</value>
					<value language="de">
						<![CDATA[Bündel]]>
					</value>
					<value language="sv">
						<![CDATA[Paket]]>
					</value>
				</string>
			</SourceName>
			<TargetEntityTypeId>Bundle</TargetEntityTypeId>
			<TargetName>
				<string>
					<value language="en">
						<![CDATA[Bundle]]>
					</value>
					<value language="nl">
						<![CDATA[Bundel]]>
					</value>
					<value language="fr">
						<![CDATA[Offre groupée]]>
					</value>
					<value language="de">
						<![CDATA[Bündel]]>
					</value>
					<value language="sv">
						<![CDATA[Paket]]>
					</value>
				</string>
			</TargetName>
		</LinkType>
		<LinkType>
			<Id>BundleItem</Id>
			<Index>2</Index>
			<LinkEntityTypeId />
			<SourceEntityTypeId>Bundle</SourceEntityTypeId>
			<SourceName>
				<string>
					<value language="en">
						<![CDATA[Items]]>
					</value>
					<value language="nl">
						<![CDATA[Artikel]]>
					</value>
					<value language="fr">
						<![CDATA[Éléments]]>
					</value>
					<value language="de">
						<![CDATA[Artikel]]>
					</value>
					<value language="sv">
						<![CDATA[Artikel]]>
					</value>
				</string>
			</SourceName>
			<TargetEntityTypeId>Item</TargetEntityTypeId>
			<TargetName>
				<string>
					<value language="en">
						<![CDATA[Bundles]]>
					</value>
					<value language="nl">
						<![CDATA[Bundel]]>
					</value>
					<value language="fr">
						<![CDATA[Offres groupées]]>
					</value>
					<value language="de">
						<![CDATA[Bündel]]>
					</value>
					<value language="sv">
						<![CDATA[Paket]]>
					</value>
				</string>
			</TargetName>
		</LinkType>
		<LinkType>
			<Id>BundlePartConfiguration</Id>
			<Index>3</Index>
			<LinkEntityTypeId>Configuration</LinkEntityTypeId>
			<SourceEntityTypeId>Bundle</SourceEntityTypeId>
			<SourceName>
				<string>
					<value language="en">
						<![CDATA[Parts]]>
					</value>
					<value language="nl">
						<![CDATA[Deel]]>
					</value>
					<value language="fr">
						<![CDATA[Partie]]>
					</value>
					<value language="de">
						<![CDATA[Teil]]>
					</value>
					<value language="sv">
						<![CDATA[Del]]>
					</value>
				</string>
			</SourceName>
			<TargetEntityTypeId>Part</TargetEntityTypeId>
			<TargetName>
				<string>
					<value language="en">
						<![CDATA[Bundle]]>
					</value>
					<value language="nl">
						<![CDATA[Bundel]]>
					</value>
					<value language="fr">
						<![CDATA[Offre groupée]]>
					</value>
					<value language="de">
						<![CDATA[Bündel]]>
					</value>
					<value language="sv">
						<![CDATA[Paket]]>
					</value>
				</string>
			</TargetName>
		</LinkType>
		<LinkType>
			<Id>BundleProduct</Id>
			<Index>1</Index>
			<LinkEntityTypeId />
			<SourceEntityTypeId>Bundle</SourceEntityTypeId>
			<SourceName>
				<string>
					<value language="en">
						<![CDATA[Products]]>
					</value>
					<value language="nl">
						<![CDATA[Producten]]>
					</value>
					<value language="fr">
						<![CDATA[Produits]]>
					</value>
					<value language="de">
						<![CDATA[Produkte]]>
					</value>
					<value language="sv">
						<![CDATA[Produkter]]>
					</value>
				</string>
			</SourceName>
			<TargetEntityTypeId>Product</TargetEntityTypeId>
			<TargetName>
				<string>
					<value language="en">
						<![CDATA[Bundles]]>
					</value>
					<value language="nl">
						<![CDATA[Bundel]]>
					</value>
					<value language="fr">
						<![CDATA[Offres groupées]]>
					</value>
					<value language="de">
						<![CDATA[Bündel]]>
					</value>
					<value language="sv">
						<![CDATA[Paket]]>
					</value>
				</string>
			</TargetName>
		</LinkType>
		<LinkType>
			<Id>BundleResource</Id>
			<Index>10</Index>
			<LinkEntityTypeId />
			<SourceEntityTypeId>Bundle</SourceEntityTypeId>
			<SourceName>
				<string>
					<value language="en">
						<![CDATA[Resources]]>
					</value>
					<value language="nl">
						<![CDATA[Middelen]]>
					</value>
					<value language="fr">
						<![CDATA[Ressources]]>
					</value>
					<value language="de">
						<![CDATA[Ressourcen]]>
					</value>
					<value language="sv">
						<![CDATA[Resurser]]>
					</value>
				</string>
			</SourceName>
			<TargetEntityTypeId>Resource</TargetEntityTypeId>
			<TargetName>
				<string>
					<value language="en">
						<![CDATA[Bundles]]>
					</value>
					<value language="nl">
						<![CDATA[Bundel]]>
					</value>
					<value language="fr">
						<![CDATA[Offres groupées]]>
					</value>
					<value language="de">
						<![CDATA[Bündel]]>
					</value>
					<value language="sv">
						<![CDATA[Paket]]>
					</value>
				</string>
			</TargetName>
		</LinkType>
		<LinkType>
			<Id>BundleSpecification</Id>
			<Index>12</Index>
			<LinkEntityTypeId />
			<SourceEntityTypeId>Bundle</SourceEntityTypeId>
			<SourceName>
				<string>
					<value language="en">
						<![CDATA[Specification]]>
					</value>
				</string>
			</SourceName>
			<TargetEntityTypeId>Specification</TargetEntityTypeId>
			<TargetName>
				<string>
					<value language="en">
						<![CDATA[Bundle]]>
					</value>
				</string>
			</TargetName>
		</LinkType>
		<LinkType>
			<Id>CelebrityBundle</Id>
			<Index>100</Index>
			<LinkEntityTypeId>Endorsement</LinkEntityTypeId>
			<SourceEntityTypeId>Celebrity</SourceEntityTypeId>
			<SourceName>
				<string>
					<value language="en">
						<![CDATA[Bundle]]>
					</value>
					<value language="nl">
						<![CDATA[Bundel]]>
					</value>
					<value language="fr">
						<![CDATA[Offre groupée]]>
					</value>
					<value language="de">
						<![CDATA[Bündel]]>
					</value>
					<value language="sv">
						<![CDATA[Paket]]>
					</value>
				</string>
			</SourceName>
			<TargetEntityTypeId>Bundle</TargetEntityTypeId>
			<TargetName>
				<string>
					<value language="en">
						<![CDATA[Celebrity]]>
					</value>
					<value language="nl">
						<![CDATA[Beroemdheid]]>
					</value>
					<value language="fr">
						<![CDATA[Célébrité]]>
					</value>
					<value language="de">
						<![CDATA[Berühmtheit]]>
					</value>
					<value language="sv">
						<![CDATA[Kändis]]>
					</value>
				</string>
			</TargetName>
		</LinkType>
		<LinkType>
			<Id>CelebrityItem</Id>
			<Index>100</Index>
			<LinkEntityTypeId>Endorsement</LinkEntityTypeId>
			<SourceEntityTypeId>Celebrity</SourceEntityTypeId>
			<SourceName>
				<string>
					<value language="en">
						<![CDATA[Item]]>
					</value>
					<value language="nl">
						<![CDATA[Artikel]]>
					</value>
					<value language="fr">
						<![CDATA[Éléments]]>
					</value>
					<value language="de">
						<![CDATA[Artikel]]>
					</value>
					<value language="sv">
						<![CDATA[Artikel]]>
					</value>
				</string>
			</SourceName>
			<TargetEntityTypeId>Item</TargetEntityTypeId>
			<TargetName>
				<string>
					<value language="en">
						<![CDATA[Celebrity]]>
					</value>
					<value language="nl">
						<![CDATA[Beroemdheid]]>
					</value>
					<value language="fr">
						<![CDATA[Célébrité]]>
					</value>
					<value language="de">
						<![CDATA[Berühmtheit]]>
					</value>
					<value language="sv">
						<![CDATA[Kändis]]>
					</value>
				</string>
			</TargetName>
		</LinkType>
		<LinkType>
			<Id>CelebrityProduct</Id>
			<Index>100</Index>
			<LinkEntityTypeId>Endorsement</LinkEntityTypeId>
			<SourceEntityTypeId>Celebrity</SourceEntityTypeId>
			<SourceName>
				<string>
					<value language="en">
						<![CDATA[Product]]>
					</value>
					<value language="nl">
						<![CDATA[Artikel]]>
					</value>
					<value language="fr">
						<![CDATA[Produit]]>
					</value>
					<value language="de">
						<![CDATA[Produkt]]>
					</value>
					<value language="sv">
						<![CDATA[Produkt]]>
					</value>
				</string>
			</SourceName>
			<TargetEntityTypeId>Product</TargetEntityTypeId>
			<TargetName>
				<string>
					<value language="en">
						<![CDATA[Celebrity]]>
					</value>
					<value language="nl">
						<![CDATA[Beroemdheid]]>
					</value>
					<value language="fr">
						<![CDATA[Célébrité]]>
					</value>
					<value language="de">
						<![CDATA[Berühmtheit]]>
					</value>
					<value language="sv">
						<![CDATA[Kändis]]>
					</value>
				</string>
			</TargetName>
		</LinkType>
		<LinkType>
			<Id>CelebrityResource</Id>
			<Index>100</Index>
			<LinkEntityTypeId />
			<SourceEntityTypeId>Celebrity</SourceEntityTypeId>
			<SourceName>
				<string>
					<value language="en">
						<![CDATA[Resource]]>
					</value>
					<value language="nl">
						<![CDATA[Middelen]]>
					</value>
					<value language="fr">
						<![CDATA[Ressources]]>
					</value>
					<value language="de">
						<![CDATA[Ressourcen]]>
					</value>
					<value language="sv">
						<![CDATA[Resurser]]>
					</value>
				</string>
			</SourceName>
			<TargetEntityTypeId>Resource</TargetEntityTypeId>
			<TargetName>
				<string>
					<value language="en">
						<![CDATA[Celebrity]]>
					</value>
					<value language="nl">
						<![CDATA[Beroemdheid]]>
					</value>
					<value language="fr">
						<![CDATA[Célébrité]]>
					</value>
					<value language="de">
						<![CDATA[Berühmtheit]]>
					</value>
					<value language="sv">
						<![CDATA[Kändis]]>
					</value>
				</string>
			</TargetName>
		</LinkType>
		<LinkType>
			<Id>ChannelChannelNodes</Id>
			<Index>1</Index>
			<LinkEntityTypeId />
			<SourceEntityTypeId>Channel</SourceEntityTypeId>
			<SourceName>
				<string>
					<value language="en">
						<![CDATA[Nodes]]>
					</value>
					<value language="nl">
						<![CDATA[Knooppunt]]>
					</value>
					<value language="fr">
						<![CDATA[Nœuds]]>
					</value>
					<value language="de">
						<![CDATA[Knoten]]>
					</value>
					<value language="sv">
						<![CDATA[Nod]]>
					</value>
				</string>
			</SourceName>
			<TargetEntityTypeId>ChannelNode</TargetEntityTypeId>
			<TargetName>
				<string>
					<value language="en">
						<![CDATA[Channels]]>
					</value>
					<value language="nl">
						<![CDATA[Kanalen]]>
					</value>
					<value language="fr">
						<![CDATA[Canaux]]>
					</value>
					<value language="de">
						<![CDATA[Kanäle]]>
					</value>
					<value language="sv">
						<![CDATA[Kanaler]]>
					</value>
				</string>
			</TargetName>
		</LinkType>
		<LinkType>
			<Id>ChannelNodeBundle</Id>
			<Index>0</Index>
			<LinkEntityTypeId />
			<SourceEntityTypeId>ChannelNode</SourceEntityTypeId>
			<SourceName>
				<string>
					<value language="en">
						<![CDATA[Bundles]]>
					</value>
					<value language="nl">
						<![CDATA[Bundel]]>
					</value>
					<value language="fr">
						<![CDATA[Offres groupées]]>
					</value>
					<value language="de">
						<![CDATA[Bündel]]>
					</value>
					<value language="sv">
						<![CDATA[Paket]]>
					</value>
				</string>
			</SourceName>
			<TargetEntityTypeId>Bundle</TargetEntityTypeId>
			<TargetName>
				<string>
					<value language="en">
						<![CDATA[Nodes]]>
					</value>
					<value language="nl">
						<![CDATA[Knooppunt]]>
					</value>
					<value language="fr">
						<![CDATA[Nœuds]]>
					</value>
					<value language="de">
						<![CDATA[Knoten]]>
					</value>
					<value language="sv">
						<![CDATA[Nod]]>
					</value>
				</string>
			</TargetName>
		</LinkType>
		<LinkType>
			<Id>ChannelNodeChannelNodes</Id>
			<Index>1</Index>
			<LinkEntityTypeId />
			<SourceEntityTypeId>ChannelNode</SourceEntityTypeId>
			<SourceName>
				<string>
					<value language="en">
						<![CDATA[Child nodes]]>
					</value>
					<value language="nl">
						<![CDATA[Kind knooppunt]]>
					</value>
					<value language="fr">
						<![CDATA[Enfant nœud]]>
					</value>
					<value language="de">
						<![CDATA[Kind knoten]]>
					</value>
					<value language="sv">
						<![CDATA[Barnnod]]>
					</value>
				</string>
			</SourceName>
			<TargetEntityTypeId>ChannelNode</TargetEntityTypeId>
			<TargetName>
				<string>
					<value language="en">
						<![CDATA[Parent nodes]]>
					</value>
					<value language="nl">
						<![CDATA[Ouder knooppunt]]>
					</value>
					<value language="fr">
						<![CDATA[Mere nœud]]>
					</value>
					<value language="de">
						<![CDATA[Elternteil knoten]]>
					</value>
					<value language="sv">
						<![CDATA[Föräldranod]]>
					</value>
				</string>
			</TargetName>
		</LinkType>
		<LinkType>
			<Id>ChannelNodeProducts</Id>
			<Index>8</Index>
			<LinkEntityTypeId />
			<SourceEntityTypeId>ChannelNode</SourceEntityTypeId>
			<SourceName>
				<string>
					<value language="en">
						<![CDATA[Products]]>
					</value>
					<value language="nl">
						<![CDATA[Producten]]>
					</value>
					<value language="fr">
						<![CDATA[Produits]]>
					</value>
					<value language="de">
						<![CDATA[Produkte]]>
					</value>
					<value language="sv">
						<![CDATA[Produkter]]>
					</value>
				</string>
			</SourceName>
			<TargetEntityTypeId>Product</TargetEntityTypeId>
			<TargetName>
				<string>
					<value language="en">
						<![CDATA[Nodes]]>
					</value>
					<value language="nl">
						<![CDATA[Knooppunt]]>
					</value>
					<value language="fr">
						<![CDATA[Nœuds]]>
					</value>
					<value language="de">
						<![CDATA[Knoten]]>
					</value>
					<value language="sv">
						<![CDATA[Nod]]>
					</value>
				</string>
			</TargetName>
		</LinkType>
		<LinkType>
			<Id>ChannelNodeResurce</Id>
			<Index>0</Index>
			<LinkEntityTypeId />
			<SourceEntityTypeId>ChannelNode</SourceEntityTypeId>
			<SourceName>
				<string>
					<value language="en">
						<![CDATA[Resources]]>
					</value>
					<value language="nl">
						<![CDATA[Hulpbron]]>
					</value>
					<value language="fr">
						<![CDATA[Ressource]]>
					</value>
					<value language="de">
						<![CDATA[Ressource]]>
					</value>
					<value language="sv">
						<![CDATA[Resurs]]>
					</value>
				</string>
			</SourceName>
			<TargetEntityTypeId>Resource</TargetEntityTypeId>
			<TargetName>
				<string>
					<value language="en">
						<![CDATA[Nodes]]>
					</value>
					<value language="nl">
						<![CDATA[Knooppunt]]>
					</value>
					<value language="fr">
						<![CDATA[Nœud]]>
					</value>
					<value language="de">
						<![CDATA[Knoten]]>
					</value>
					<value language="sv">
						<![CDATA[Nod]]>
					</value>
				</string>
			</TargetName>
		</LinkType>
		<LinkType>
			<Id>ChannelResource</Id>
			<Index>2</Index>
			<LinkEntityTypeId />
			<SourceEntityTypeId>Channel</SourceEntityTypeId>
			<SourceName>
				<string>
					<value language="en">
						<![CDATA[Resource]]>
					</value>
					<value language="nl">
						<![CDATA[Hulpbron]]>
					</value>
					<value language="fr">
						<![CDATA[Ressource]]>
					</value>
					<value language="de">
						<![CDATA[Ressource]]>
					</value>
					<value language="sv">
						<![CDATA[Resurs]]>
					</value>
				</string>
			</SourceName>
			<TargetEntityTypeId>Resource</TargetEntityTypeId>
			<TargetName>
				<string>
					<value language="en">
						<![CDATA[Channel]]>
					</value>
					<value language="nl">
						<![CDATA[Kanaal]]>
					</value>
					<value language="fr">
						<![CDATA[Canal]]>
					</value>
					<value language="de">
						<![CDATA[Kanal]]>
					</value>
					<value language="sv">
						<![CDATA[Kanal]]>
					</value>
				</string>
			</TargetName>
		</LinkType>
		<LinkType>
			<Id>InstructionProduct</Id>
			<Index>0</Index>
			<LinkEntityTypeId />
			<SourceEntityTypeId>Instruction</SourceEntityTypeId>
			<SourceName>
				<string>
					<value language="en">
						<![CDATA[Product]]>
					</value>
					<value language="nl">
						<![CDATA[Product]]>
					</value>
					<value language="fr">
						<![CDATA[Produit]]>
					</value>
					<value language="de">
						<![CDATA[Produkt]]>
					</value>
					<value language="sv">
						<![CDATA[Produkt]]>
					</value>
				</string>
			</SourceName>
			<TargetEntityTypeId>Product</TargetEntityTypeId>
			<TargetName>
				<string>
					<value language="en">
						<![CDATA[Instruction]]>
					</value>
					<value language="nl">
						<![CDATA[Instructie]]>
					</value>
					<value language="fr">
						<![CDATA[Instruction]]>
					</value>
					<value language="de">
						<![CDATA[Anleitung]]>
					</value>
					<value language="sv">
						<![CDATA[Instruktion]]>
					</value>
				</string>
			</TargetName>
		</LinkType>
		<LinkType>
			<Id>InstructionResource</Id>
			<Index>500</Index>
			<LinkEntityTypeId />
			<SourceEntityTypeId>Instruction</SourceEntityTypeId>
			<SourceName>
				<string>
					<value language="en">
						<![CDATA[Resource]]>
					</value>
					<value language="nl">
						<![CDATA[Hulpbron]]>
					</value>
					<value language="fr">
						<![CDATA[Ressorurce]]>
					</value>
					<value language="de">
						<![CDATA[Ressource]]>
					</value>
					<value language="sv">
						<![CDATA[Resurs]]>
					</value>
				</string>
			</SourceName>
			<TargetEntityTypeId>Resource</TargetEntityTypeId>
			<TargetName>
				<string>
					<value language="en">
						<![CDATA[Instruction]]>
					</value>
					<value language="nl">
						<![CDATA[Instructie]]>
					</value>
					<value language="fr">
						<![CDATA[Instruction]]>
					</value>
					<value language="de">
						<![CDATA[Anleitung]]>
					</value>
					<value language="sv">
						<![CDATA[Instruktion]]>
					</value>
				</string>
			</TargetName>
		</LinkType>
		<LinkType>
			<Id>ItemResource</Id>
			<Index>1</Index>
			<LinkEntityTypeId />
			<SourceEntityTypeId>Item</SourceEntityTypeId>
			<SourceName>
				<string>
					<value language="en">
						<![CDATA[Resources]]>
					</value>
					<value language="nl">
						<![CDATA[Middelen]]>
					</value>
					<value language="fr">
						<![CDATA[Ressources]]>
					</value>
					<value language="de">
						<![CDATA[Ressourcen]]>
					</value>
					<value language="sv">
						<![CDATA[Resurser]]>
					</value>
				</string>
			</SourceName>
			<TargetEntityTypeId>Resource</TargetEntityTypeId>
			<TargetName>
				<string>
					<value language="en">
						<![CDATA[Items]]>
					</value>
					<value language="nl">
						<![CDATA[Artikel]]>
					</value>
					<value language="fr">
						<![CDATA[Éléments]]>
					</value>
					<value language="de">
						<![CDATA[Artikel]]>
					</value>
					<value language="sv">
						<![CDATA[Artikel]]>
					</value>
				</string>
			</TargetName>
		</LinkType>
		<LinkType>
			<Id>MilestonTask</Id>
			<Index>0</Index>
			<LinkEntityTypeId />
			<SourceEntityTypeId>Milestone</SourceEntityTypeId>
			<SourceName>
				<string>
					<value language="en">
						<![CDATA[Tasks]]>
					</value>
				</string>
			</SourceName>
			<TargetEntityTypeId>Task</TargetEntityTypeId>
			<TargetName>
				<string>
					<value language="en">
						<![CDATA[Milestones]]>
					</value>
				</string>
			</TargetName>
		</LinkType>
		<LinkType>
			<Id>PartItem</Id>
			<Index>0</Index>
			<LinkEntityTypeId />
			<SourceEntityTypeId>Part</SourceEntityTypeId>
			<SourceName>
				<string>
					<value language="en">
						<![CDATA[Items]]>
					</value>
					<value language="nl">
						<![CDATA[Item]]>
					</value>
					<value language="fr">
						<![CDATA[Élément]]>
					</value>
					<value language="de">
						<![CDATA[Artikel]]>
					</value>
					<value language="sv">
						<![CDATA[Artikel]]>
					</value>
				</string>
			</SourceName>
			<TargetEntityTypeId>Item</TargetEntityTypeId>
			<TargetName>
				<string>
					<value language="en">
						<![CDATA[Parts]]>
					</value>
					<value language="nl">
						<![CDATA[Deel]]>
					</value>
					<value language="fr">
						<![CDATA[Partie]]>
					</value>
					<value language="de">
						<![CDATA[Teil]]>
					</value>
					<value language="sv">
						<![CDATA[Del]]>
					</value>
				</string>
			</TargetName>
		</LinkType>
		<LinkType>
			<Id>PartResource</Id>
			<Index>0</Index>
			<LinkEntityTypeId />
			<SourceEntityTypeId>Part</SourceEntityTypeId>
			<SourceName>
				<string>
					<value language="en">
						<![CDATA[Resources]]>
					</value>
					<value language="nl">
						<![CDATA[Middelen]]>
					</value>
					<value language="fr">
						<![CDATA[Ressources]]>
					</value>
					<value language="de">
						<![CDATA[Ressourcen]]>
					</value>
					<value language="sv">
						<![CDATA[Resurser]]>
					</value>
				</string>
			</SourceName>
			<TargetEntityTypeId>Resource</TargetEntityTypeId>
			<TargetName>
				<string>
					<value language="en">
						<![CDATA[Parts]]>
					</value>
					<value language="nl">
						<![CDATA[Onderdelen]]>
					</value>
					<value language="fr">
						<![CDATA[Les pièces]]>
					</value>
					<value language="de">
						<![CDATA[Teile]]>
					</value>
					<value language="sv">
						<![CDATA[Del]]>
					</value>
				</string>
			</TargetName>
		</LinkType>
		<LinkType>
			<Id>ProductInstruction</Id>
			<Index>500</Index>
			<LinkEntityTypeId />
			<SourceEntityTypeId>Product</SourceEntityTypeId>
			<SourceName>
				<string>
					<value language="en">
						<![CDATA[Instruction]]>
					</value>
					<value language="nl">
						<![CDATA[Instructie]]>
					</value>
					<value language="fr">
						<![CDATA[Instruction]]>
					</value>
					<value language="de">
						<![CDATA[Anleitung]]>
					</value>
					<value language="sv">
						<![CDATA[Instruktion]]>
					</value>
				</string>
			</SourceName>
			<TargetEntityTypeId>Instruction</TargetEntityTypeId>
			<TargetName>
				<string>
					<value language="en">
						<![CDATA[Product]]>
					</value>
					<value language="nl">
						<![CDATA[Product]]>
					</value>
					<value language="fr">
						<![CDATA[Produit]]>
					</value>
					<value language="de">
						<![CDATA[Produkt]]>
					</value>
					<value language="sv">
						<![CDATA[Produkt]]>
					</value>
				</string>
			</TargetName>
		</LinkType>
		<LinkType>
			<Id>ProductItem</Id>
			<Index>1</Index>
			<LinkEntityTypeId />
			<SourceEntityTypeId>Product</SourceEntityTypeId>
			<SourceName>
				<string>
					<value language="en">
						<![CDATA[Items]]>
					</value>
					<value language="nl">
						<![CDATA[Artikel]]>
					</value>
					<value language="fr">
						<![CDATA[Éléments]]>
					</value>
					<value language="de">
						<![CDATA[Artikel]]>
					</value>
					<value language="sv">
						<![CDATA[Artikel]]>
					</value>
				</string>
			</SourceName>
			<TargetEntityTypeId>Item</TargetEntityTypeId>
			<TargetName>
				<string>
					<value language="en">
						<![CDATA[Products]]>
					</value>
					<value language="nl">
						<![CDATA[Producten]]>
					</value>
					<value language="fr">
						<![CDATA[Produits]]>
					</value>
					<value language="de">
						<![CDATA[Produkte]]>
					</value>
					<value language="sv">
						<![CDATA[Produkter]]>
					</value>
				</string>
			</TargetName>
		</LinkType>
		<LinkType>
			<Id>ProductProductAccessories</Id>
			<Index>4</Index>
			<LinkEntityTypeId />
			<SourceEntityTypeId>Product</SourceEntityTypeId>
			<SourceName>
				<string>
					<value language="en">
						<![CDATA[Accessories]]>
					</value>
					<value language="nl">
						<![CDATA[Accessoires]]>
					</value>
					<value language="fr">
						<![CDATA[Accessoires]]>
					</value>
					<value language="de">
						<![CDATA[Zubehör]]>
					</value>
					<value language="sv">
						<![CDATA[Tillbehör]]>
					</value>
				</string>
			</SourceName>
			<TargetEntityTypeId>Product</TargetEntityTypeId>
			<TargetName>
				<string>
					<value language="en">
						<![CDATA[Accessories to]]>
					</value>
					<value language="nl">
						<![CDATA[Accessoires]]>
					</value>
					<value language="fr">
						<![CDATA[Accessoires à]]>
					</value>
					<value language="de">
						<![CDATA[Zubehör zu]]>
					</value>
					<value language="sv">
						<![CDATA[Tillbehör till]]>
					</value>
				</string>
			</TargetName>
		</LinkType>
		<LinkType>
			<Id>ProductProductRelatedTo</Id>
			<Index>3</Index>
			<LinkEntityTypeId />
			<SourceEntityTypeId>Product</SourceEntityTypeId>
			<SourceName>
				<string>
					<value language="en">
						<![CDATA[Related to]]>
					</value>
					<value language="nl">
						<![CDATA[Gerelateerd aan]]>
					</value>
					<value language="fr">
						<![CDATA[Relatif à]]>
					</value>
					<value language="de">
						<![CDATA[Bezüglich]]>
					</value>
					<value language="sv">
						<![CDATA[Relaterat till]]>
					</value>
				</string>
			</SourceName>
			<TargetEntityTypeId>Product</TargetEntityTypeId>
			<TargetName>
				<string>
					<value language="en">
						<![CDATA[Related to]]>
					</value>
					<value language="nl">
						<![CDATA[Gerelateerd aan]]>
					</value>
					<value language="fr">
						<![CDATA[Relatif à]]>
					</value>
					<value language="de">
						<![CDATA[Bezüglich]]>
					</value>
					<value language="sv">
						<![CDATA[Relaterat till]]>
					</value>
				</string>
			</TargetName>
		</LinkType>
		<LinkType>
			<Id>ProductProductUpsell</Id>
			<Index>2</Index>
			<LinkEntityTypeId />
			<SourceEntityTypeId>Product</SourceEntityTypeId>
			<SourceName>
				<string>
					<value language="en">
						<![CDATA[Upsell]]>
					</value>
					<value language="nl">
						<![CDATA[Upsell]]>
					</value>
					<value language="fr">
						<![CDATA[Upsell]]>
					</value>
					<value language="de">
						<![CDATA[Upsell]]>
					</value>
					<value language="sv">
						<![CDATA[Upsell]]>
					</value>
				</string>
			</SourceName>
			<TargetEntityTypeId>Product</TargetEntityTypeId>
			<TargetName>
				<string>
					<value language="en">
						<![CDATA[Upsell to]]>
					</value>
					<value language="nl">
						<![CDATA[Upsell aan]]>
					</value>
					<value language="fr">
						<![CDATA[Upsell à]]>
					</value>
					<value language="de">
						<![CDATA[Upsell zu]]>
					</value>
					<value language="sv">
						<![CDATA[Upsell till]]>
					</value>
				</string>
			</TargetName>
		</LinkType>
		<LinkType>
			<Id>ProductResource</Id>
			<Index>60</Index>
			<LinkEntityTypeId />
			<SourceEntityTypeId>Product</SourceEntityTypeId>
			<SourceName>
				<string>
					<value language="en">
						<![CDATA[Resources]]>
					</value>
					<value language="nl">
						<![CDATA[Middelen]]>
					</value>
					<value language="fr">
						<![CDATA[Ressources]]>
					</value>
					<value language="de">
						<![CDATA[Ressourcen]]>
					</value>
					<value language="sv">
						<![CDATA[Resurser]]>
					</value>
				</string>
			</SourceName>
			<TargetEntityTypeId>Resource</TargetEntityTypeId>
			<TargetName>
				<string>
					<value language="en">
						<![CDATA[Products]]>
					</value>
					<value language="nl">
						<![CDATA[Producten]]>
					</value>
					<value language="fr">
						<![CDATA[Produits]]>
					</value>
					<value language="de">
						<![CDATA[Produkte]]>
					</value>
					<value language="sv">
						<![CDATA[Produkter]]>
					</value>
				</string>
			</TargetName>
		</LinkType>
		<LinkType>
			<Id>ProductSpareParts</Id>
			<Index>50</Index>
			<LinkEntityTypeId />
			<SourceEntityTypeId>Product</SourceEntityTypeId>
			<SourceName>
				<string>
					<value language="en">
						<![CDATA[Spare Parts]]>
					</value>
				</string>
			</SourceName>
			<TargetEntityTypeId>Product</TargetEntityTypeId>
			<TargetName>
				<string>
					<value language="en">
						<![CDATA[Product]]>
					</value>
				</string>
			</TargetName>
		</LinkType>
		<LinkType>
			<Id>ProductSpecifications</Id>
			<Index>100</Index>
			<LinkEntityTypeId />
			<SourceEntityTypeId>Product</SourceEntityTypeId>
			<SourceName>
				<string>
					<value language="en">
						<![CDATA[Specification]]>
					</value>
					<value language="nl">
						<![CDATA[Specificatie]]>
					</value>
					<value language="fr">
						<![CDATA[Spécification]]>
					</value>
					<value language="de">
						<![CDATA[Spezifikation]]>
					</value>
					<value language="sv">
						<![CDATA[Specifikation]]>
					</value>
				</string>
			</SourceName>
			<TargetEntityTypeId>Specification</TargetEntityTypeId>
			<TargetName>
				<string>
					<value language="en">
						<![CDATA[Products]]>
					</value>
					<value language="nl">
						<![CDATA[Producten]]>
					</value>
					<value language="fr">
						<![CDATA[Produits]]>
					</value>
					<value language="de">
						<![CDATA[Produkten]]>
					</value>
					<value language="sv">
						<![CDATA[Produkter]]>
					</value>
				</string>
			</TargetName>
		</LinkType>
		<LinkType>
			<Id>PublicationResource</Id>
			<Index>2</Index>
			<LinkEntityTypeId />
			<SourceEntityTypeId>Publication</SourceEntityTypeId>
			<SourceName>
				<string>
					<value language="en">
						<![CDATA[Resource]]>
					</value>
					<value language="nl">
						<![CDATA[Hulpbron]]>
					</value>
					<value language="fr">
						<![CDATA[Ressource]]>
					</value>
					<value language="de">
						<![CDATA[Ressource]]>
					</value>
					<value language="sv">
						<![CDATA[Resurs]]>
					</value>
				</string>
			</SourceName>
			<TargetEntityTypeId>Resource</TargetEntityTypeId>
			<TargetName>
				<string>
					<value language="en">
						<![CDATA[Publication]]>
					</value>
					<value language="nl">
						<![CDATA[Publicatie]]>
					</value>
					<value language="fr">
						<![CDATA[Publication]]>
					</value>
					<value language="de">
						<![CDATA[Veröffentlichung]]>
					</value>
					<value language="sv">
						<![CDATA[Publikation]]>
					</value>
				</string>
			</TargetName>
		</LinkType>
		<LinkType>
			<Id>PublicationSections</Id>
			<Index>1</Index>
			<LinkEntityTypeId />
			<SourceEntityTypeId>Publication</SourceEntityTypeId>
			<SourceName>
				<string>
					<value language="en">
						<![CDATA[Sections]]>
					</value>
					<value language="nl">
						<![CDATA[Secties]]>
					</value>
					<value language="fr">
						<![CDATA[Sections]]>
					</value>
					<value language="de">
						<![CDATA[Abschnitte]]>
					</value>
					<value language="sv">
						<![CDATA[Sektioner]]>
					</value>
				</string>
			</SourceName>
			<TargetEntityTypeId>Section</TargetEntityTypeId>
			<TargetName>
				<string>
					<value language="en">
						<![CDATA[Publications]]>
					</value>
					<value language="nl">
						<![CDATA[Releases]]>
					</value>
					<value language="fr">
						<![CDATA[Publications]]>
					</value>
					<value language="de">
						<![CDATA[Veröffentlichungen]]>
					</value>
					<value language="sv">
						<![CDATA[Pressmeddelanden]]>
					</value>
				</string>
			</TargetName>
		</LinkType>
		<LinkType>
			<Id>SectionBundle</Id>
			<Index>0</Index>
			<LinkEntityTypeId />
			<SourceEntityTypeId>Section</SourceEntityTypeId>
			<SourceName>
				<string>
					<value language="en">
						<![CDATA[Bundles]]>
					</value>
					<value language="nl">
						<![CDATA[Bundles]]>
					</value>
					<value language="fr">
						<![CDATA[Offre groupée]]>
					</value>
					<value language="de">
						<![CDATA[Bündel]]>
					</value>
					<value language="sv">
						<![CDATA[Paket]]>
					</value>
				</string>
			</SourceName>
			<TargetEntityTypeId>Bundle</TargetEntityTypeId>
			<TargetName>
				<string>
					<value language="en">
						<![CDATA[Sections]]>
					</value>
					<value language="nl">
						<![CDATA[Sectie]]>
					</value>
					<value language="fr">
						<![CDATA[Section]]>
					</value>
					<value language="de">
						<![CDATA[Abschnitt]]>
					</value>
					<value language="sv">
						<![CDATA[Sektion]]>
					</value>
				</string>
			</TargetName>
		</LinkType>
		<LinkType>
			<Id>SectionProducts</Id>
			<Index>9</Index>
			<LinkEntityTypeId />
			<SourceEntityTypeId>Section</SourceEntityTypeId>
			<SourceName>
				<string>
					<value language="en">
						<![CDATA[Products]]>
					</value>
					<value language="nl">
						<![CDATA[Producten]]>
					</value>
					<value language="fr">
						<![CDATA[Produits]]>
					</value>
					<value language="de">
						<![CDATA[Produkte]]>
					</value>
					<value language="sv">
						<![CDATA[Produkter]]>
					</value>
				</string>
			</SourceName>
			<TargetEntityTypeId>Product</TargetEntityTypeId>
			<TargetName>
				<string>
					<value language="en">
						<![CDATA[Sections]]>
					</value>
					<value language="nl">
						<![CDATA[Secties]]>
					</value>
					<value language="fr">
						<![CDATA[Sections]]>
					</value>
					<value language="de">
						<![CDATA[Abschnitte]]>
					</value>
					<value language="sv">
						<![CDATA[Sektioner]]>
					</value>
				</string>
			</TargetName>
		</LinkType>
		<LinkType>
			<Id>SectionSections</Id>
			<Index>1</Index>
			<LinkEntityTypeId />
			<SourceEntityTypeId>Section</SourceEntityTypeId>
			<SourceName>
				<string>
					<value language="en">
						<![CDATA[Sections]]>
					</value>
					<value language="nl">
						<![CDATA[Secties]]>
					</value>
					<value language="fr">
						<![CDATA[Sections]]>
					</value>
					<value language="de">
						<![CDATA[Abschnitte]]>
					</value>
					<value language="sv">
						<![CDATA[Sektioner]]>
					</value>
				</string>
			</SourceName>
			<TargetEntityTypeId>Section</TargetEntityTypeId>
			<TargetName>
				<string>
					<value language="en">
						<![CDATA[Sections]]>
					</value>
					<value language="nl">
						<![CDATA[Secties]]>
					</value>
					<value language="fr">
						<![CDATA[Sections]]>
					</value>
					<value language="de">
						<![CDATA[Abschnitte]]>
					</value>
					<value language="sv">
						<![CDATA[Sektioner]]>
					</value>
				</string>
			</TargetName>
		</LinkType>
		<LinkType>
			<Id>SpecificationSpecifications</Id>
			<Index>0</Index>
			<LinkEntityTypeId />
			<SourceEntityTypeId>Specification</SourceEntityTypeId>
			<SourceName>
				<string>
					<value language="en">
						<![CDATA[Specifications]]>
					</value>
					<value language="nl">
						<![CDATA[Specificaties]]>
					</value>
					<value language="fr">
						<![CDATA[Spécification]]>
					</value>
					<value language="de">
						<![CDATA[Spezifikationen]]>
					</value>
					<value language="sv">
						<![CDATA[Specifikationer]]>
					</value>
				</string>
			</SourceName>
			<TargetEntityTypeId>Specification</TargetEntityTypeId>
			<TargetName>
				<string>
					<value language="en">
						<![CDATA[Specification]]>
					</value>
					<value language="nl">
						<![CDATA[Specificatie]]>
					</value>
					<value language="fr">
						<![CDATA[Spécification]]>
					</value>
					<value language="de">
						<![CDATA[Spezifikation]]>
					</value>
					<value language="sv">
						<![CDATA[Specifikation]]>
					</value>
				</string>
			</TargetName>
		</LinkType>
		<LinkType>
			<Id>TaskActivities</Id>
			<Index>3</Index>
			<LinkEntityTypeId />
			<SourceEntityTypeId>Task</SourceEntityTypeId>
			<SourceName>
				<string>
					<value language="en">
						<![CDATA[Activities]]>
					</value>
					<value language="nl">
						<![CDATA[Activiteiten]]>
					</value>
					<value language="fr">
						<![CDATA[Activités]]>
					</value>
					<value language="de">
						<![CDATA[Aktivitäten]]>
					</value>
					<value language="sv">
						<![CDATA[Aktiviteter]]>
					</value>
				</string>
			</SourceName>
			<TargetEntityTypeId>Activity</TargetEntityTypeId>
			<TargetName>
				<string>
					<value language="en">
						<![CDATA[Tasks]]>
					</value>
					<value language="nl">
						<![CDATA[Taken]]>
					</value>
					<value language="fr">
						<![CDATA[Tâches]]>
					</value>
					<value language="de">
						<![CDATA[Aufgaben]]>
					</value>
					<value language="sv">
						<![CDATA[Uppgifter]]>
					</value>
				</string>
			</TargetName>
		</LinkType>
		<LinkType>
			<Id>TaskItems</Id>
			<Index>2</Index>
			<LinkEntityTypeId />
			<SourceEntityTypeId>Task</SourceEntityTypeId>
			<SourceName>
				<string>
					<value language="en">
						<![CDATA[Items]]>
					</value>
					<value language="nl">
						<![CDATA[Artikel]]>
					</value>
					<value language="fr">
						<![CDATA[Éléments]]>
					</value>
					<value language="de">
						<![CDATA[Artikel]]>
					</value>
					<value language="sv">
						<![CDATA[Artikel]]>
					</value>
				</string>
			</SourceName>
			<TargetEntityTypeId>Item</TargetEntityTypeId>
			<TargetName>
				<string>
					<value language="en">
						<![CDATA[Tasks]]>
					</value>
					<value language="nl">
						<![CDATA[Taken]]>
					</value>
					<value language="fr">
						<![CDATA[Tâches]]>
					</value>
					<value language="de">
						<![CDATA[Aufgaben]]>
					</value>
					<value language="sv">
						<![CDATA[Uppgifter]]>
					</value>
				</string>
			</TargetName>
		</LinkType>
		<LinkType>
			<Id>TaskProducts</Id>
			<Index>7</Index>
			<LinkEntityTypeId />
			<SourceEntityTypeId>Task</SourceEntityTypeId>
			<SourceName>
				<string>
					<value language="en">
						<![CDATA[Products]]>
					</value>
					<value language="nl">
						<![CDATA[Producten]]>
					</value>
					<value language="fr">
						<![CDATA[Produits]]>
					</value>
					<value language="de">
						<![CDATA[Produkte]]>
					</value>
					<value language="sv">
						<![CDATA[Produkter]]>
					</value>
				</string>
			</SourceName>
			<TargetEntityTypeId>Product</TargetEntityTypeId>
			<TargetName>
				<string>
					<value language="en">
						<![CDATA[Tasks]]>
					</value>
					<value language="nl">
						<![CDATA[Taken]]>
					</value>
					<value language="fr">
						<![CDATA[Tâches]]>
					</value>
					<value language="de">
						<![CDATA[Aufgaben]]>
					</value>
					<value language="sv">
						<![CDATA[Uppgifter]]>
					</value>
				</string>
			</TargetName>
		</LinkType>
		<LinkType>
			<Id>TaskResources</Id>
			<Index>5</Index>
			<LinkEntityTypeId />
			<SourceEntityTypeId>Task</SourceEntityTypeId>
			<SourceName>
				<string>
					<value language="en">
						<![CDATA[Resources]]>
					</value>
					<value language="nl">
						<![CDATA[Middelen]]>
					</value>
					<value language="fr">
						<![CDATA[Ressources]]>
					</value>
					<value language="de">
						<![CDATA[Ressourcen]]>
					</value>
					<value language="sv">
						<![CDATA[Resurser]]>
					</value>
				</string>
			</SourceName>
			<TargetEntityTypeId>Resource</TargetEntityTypeId>
			<TargetName>
				<string>
					<value language="en">
						<![CDATA[Tasks]]>
					</value>
					<value language="nl">
						<![CDATA[Taken]]>
					</value>
					<value language="fr">
						<![CDATA[Tâches]]>
					</value>
					<value language="de">
						<![CDATA[Aufgaben]]>
					</value>
					<value language="sv">
						<![CDATA[Uppgifter]]>
					</value>
				</string>
			</TargetName>
		</LinkType>
	</LinkTypes>
	<FieldSets>
		<FieldSet>
			<Id>DIYItem</Id>
			<Name>
				<string>
					<value language="en">
						<![CDATA[DIY - Flooring]]>
					</value>
					<value language="nl">
						<![CDATA[DIY - Vloeren]]>
					</value>
					<value language="fr">
						<![CDATA[DIY]]>
					</value>
					<value language="de">
						<![CDATA[DIY]]>
					</value>
					<value language="sv">
						<![CDATA[DIY]]>
					</value>
				</string>
			</Name>
			<Description>
				<string />
			</Description>
			<EntityTypeId>Item</EntityTypeId>
			<FieldTypes>
				<FieldTypeId>ItemDIYHeight</FieldTypeId>
				<FieldTypeId>ItemDIYLength</FieldTypeId>
				<FieldTypeId>ItemDIYMarket</FieldTypeId>
				<FieldTypeId>ItemDIYWidth</FieldTypeId>
				<FieldTypeId>ItemVariant</FieldTypeId>
			</FieldTypes>
		</FieldSet>
		<FieldSet>
			<Id>DIYItem2</Id>
			<Name>
				<string>
					<value language="en">
						<![CDATA[DIY - Tools]]>
					</value>
					<value language="nl">
						<![CDATA[DIY - Tools]]>
					</value>
					<value language="fr">
						<![CDATA[DIY]]>
					</value>
					<value language="de">
						<![CDATA[DIY]]>
					</value>
					<value language="sv">
						<![CDATA[DIY]]>
					</value>
				</string>
			</Name>
			<Description>
				<string />
			</Description>
			<EntityTypeId>Item</EntityTypeId>
			<FieldTypes>
				<FieldTypeId>itemDIYCapacity</FieldTypeId>
				<FieldTypeId>ItemDIYMarket</FieldTypeId>
				<FieldTypeId>ItemDIYVoltage</FieldTypeId>
				<FieldTypeId>ItemDIYWeight</FieldTypeId>
				<FieldTypeId>ItemVariant</FieldTypeId>
			</FieldTypes>
		</FieldSet>
		<FieldSet>
			<Id>DIYProduct</Id>
			<Name>
				<string>
					<value language="en">
						<![CDATA[DIY]]>
					</value>
					<value language="nl">
						<![CDATA[DIY]]>
					</value>
					<value language="fr">
						<![CDATA[DIY]]>
					</value>
					<value language="de">
						<![CDATA[DIY]]>
					</value>
					<value language="sv">
						<![CDATA[DIY]]>
					</value>
				</string>
			</Name>
			<Description>
				<string />
			</Description>
			<EntityTypeId>Product</EntityTypeId>
			<FieldTypes>
				<FieldTypeId>ProductBrand</FieldTypeId>
				<FieldTypeId>ProductDIYType</FieldTypeId>
				<FieldTypeId>ProductFeature1</FieldTypeId>
				<FieldTypeId>ProductFeature2</FieldTypeId>
			</FieldTypes>
		</FieldSet>
		<FieldSet>
			<Id>FashionItem</Id>
			<Name>
				<string>
					<value language="en">
						<![CDATA[Fashion/Retail Clothes]]>
					</value>
					<value language="nl">
						<![CDATA[Fashion/Retail: kleding]]>
					</value>
					<value language="fr">
						<![CDATA[Mode/détail : vêtements]]>
					</value>
					<value language="de">
						<![CDATA[Mode/Einzelhandel: Kleidung]]>
					</value>
					<value language="sv">
						<![CDATA[Mode/butik: kläder]]>
					</value>
				</string>
			</Name>
			<Description>
				<string />
			</Description>
			<EntityTypeId>Item</EntityTypeId>
			<FieldTypes>
				<FieldTypeId>ItemFashionSeason</FieldTypeId>
				<FieldTypeId>ItemFashionSize</FieldTypeId>
				<FieldTypeId>ItemFashionSizeXML</FieldTypeId>
				<FieldTypeId>ItemFashionTrendColor</FieldTypeId>
				<FieldTypeId>ItemFashionWeight</FieldTypeId>
				<FieldTypeId>ItemVariant</FieldTypeId>
			</FieldTypes>
		</FieldSet>
		<FieldSet>
			<Id>FashionProduct</Id>
			<Name>
				<string>
					<value language="en">
						<![CDATA[Fashion/Retail: Clothes]]>
					</value>
					<value language="nl">
						<![CDATA[Fashion/Retail: kleding]]>
					</value>
					<value language="fr">
						<![CDATA[Mode/détail : vêtements]]>
					</value>
					<value language="de">
						<![CDATA[Mode/Einzelhandel: Kleidung]]>
					</value>
					<value language="sv">
						<![CDATA[Mode/butik: kläder]]>
					</value>
				</string>
			</Name>
			<Description>
				<string />
			</Description>
			<EntityTypeId>Product</EntityTypeId>
			<FieldTypes>
				<FieldTypeId>ProductBrand</FieldTypeId>
				<FieldTypeId>ProductFashionGender</FieldTypeId>
				<FieldTypeId>ProductFashionIncludedBrand</FieldTypeId>
				<FieldTypeId>ProductFashionMaterial</FieldTypeId>
				<FieldTypeId>ProductFashionMaterialDetail</FieldTypeId>
			</FieldTypes>
		</FieldSet>
		<FieldSet>
			<Id>Food</Id>
			<Name>
				<string>
					<value language="en">
						<![CDATA[Food]]>
					</value>
					<value language="nl">
						<![CDATA[Levensmiddelen]]>
					</value>
					<value language="fr">
						<![CDATA[Nourriture]]>
					</value>
					<value language="de">
						<![CDATA[Lebensmittel]]>
					</value>
					<value language="sv">
						<![CDATA[Mat]]>
					</value>
				</string>
			</Name>
			<Description>
				<string />
			</Description>
			<EntityTypeId>Product</EntityTypeId>
			<FieldTypes>
				<FieldTypeId>FoodCertification</FieldTypeId>
				<FieldTypeId>ProductFoodAllergens</FieldTypeId>
				<FieldTypeId>ProductFoodAllergensDetailed</FieldTypeId>
				<FieldTypeId>ProductFoodLegalRequirements</FieldTypeId>
				<FieldTypeId>ProductFoodSavingInstructions</FieldTypeId>
			</FieldTypes>
		</FieldSet>
		<FieldSet>
			<Id>FurnitureItem</Id>
			<Name>
				<string>
					<value language="en">
						<![CDATA[Furniture]]>
					</value>
					<value language="nl">
						<![CDATA[Meubilair]]>
					</value>
					<value language="fr">
						<![CDATA[Meubles]]>
					</value>
					<value language="de">
						<![CDATA[Möbel]]>
					</value>
					<value language="sv">
						<![CDATA[Möbler]]>
					</value>
				</string>
			</Name>
			<Description>
				<string />
			</Description>
			<EntityTypeId>Item</EntityTypeId>
			<FieldTypes>
				<FieldTypeId>ItemVariant</FieldTypeId>
			</FieldTypes>
		</FieldSet>
		<FieldSet>
			<Id>FurnitureProduct</Id>
			<Name>
				<string>
					<value language="en">
						<![CDATA[Furniture]]>
					</value>
					<value language="nl">
						<![CDATA[Meubilair]]>
					</value>
					<value language="fr">
						<![CDATA[Meubles]]>
					</value>
					<value language="de">
						<![CDATA[Möbel]]>
					</value>
					<value language="sv">
						<![CDATA[Möbler]]>
					</value>
				</string>
			</Name>
			<Description>
				<string />
			</Description>
			<EntityTypeId>Product</EntityTypeId>
			<FieldTypes>
				<FieldTypeId>ProductBrand</FieldTypeId>
				<FieldTypeId>ProductFeature1</FieldTypeId>
			</FieldTypes>
		</FieldSet>
		<FieldSet>
			<Id>InstructionClothes</Id>
			<Name>
				<string>
					<value language="en">
						<![CDATA[Clothes]]>
					</value>
					<value language="nl">
						<![CDATA[Kleding]]>
					</value>
					<value language="fr">
						<![CDATA[Vêtements]]>
					</value>
					<value language="de">
						<![CDATA[Kleidung]]>
					</value>
					<value language="sv">
						<![CDATA[Kläder]]>
					</value>
				</string>
			</Name>
			<Description>
				<string />
			</Description>
			<EntityTypeId>Instruction</EntityTypeId>
			<FieldTypes>
				<FieldTypeId>InstructionWashingInstruction</FieldTypeId>
			</FieldTypes>
		</FieldSet>
		<FieldSet>
			<Id>ItemDIYLawnMower</Id>
			<Name>
				<string>
					<value language="en">
						<![CDATA[Item Lawn Mower]]>
					</value>
					<value language="nl">
						<![CDATA[Item grasmaaier]]>
					</value>
					<value language="fr">
						<![CDATA[Item Tondeuse à gazon]]>
					</value>
					<value language="de">
						<![CDATA[Item Rasenmäher]]>
					</value>
					<value language="sv">
						<![CDATA[Item gräsklippare]]>
					</value>
				</string>
			</Name>
			<Description>
				<string />
			</Description>
			<EntityTypeId>Item</EntityTypeId>
			<FieldTypes>
				<FieldTypeId>ItemDIYCuttingWidth</FieldTypeId>
				<FieldTypeId>ItemDIYDesc</FieldTypeId>
				<FieldTypeId>ItemDIYLawnMowerType</FieldTypeId>
			</FieldTypes>
		</FieldSet>
		<FieldSet>
			<Id>ItemManufacturingSolarConnections</Id>
			<Name>
				<string>
					<value language="en">
						<![CDATA[Manufacturing solar connections]]>
					</value>
					<value language="nl">
						<![CDATA[Manufacturing solar connections]]>
					</value>
					<value language="fr">
						<![CDATA[Manufacturing solar connections]]>
					</value>
					<value language="de">
						<![CDATA[Manufacturing solar connections]]>
					</value>
					<value language="sv">
						<![CDATA[Manufacturing solar connections]]>
					</value>
				</string>
			</Name>
			<Description>
				<string />
			</Description>
			<EntityTypeId>Item</EntityTypeId>
			<FieldTypes>
				<FieldTypeId>ItemDIYHeight</FieldTypeId>
				<FieldTypeId>ItemDIYLength</FieldTypeId>
				<FieldTypeId>ItemDIYWidth</FieldTypeId>
				<FieldTypeId>ItemManufacturingSolarConnectionsGWRange</FieldTypeId>
				<FieldTypeId>ItemManufacturingSolarConnectionsHexSize</FieldTypeId>
			</FieldTypes>
		</FieldSet>
		<FieldSet>
			<Id>ManufacturingKit</Id>
			<Name>
				<string>
					<value language="en">
						<![CDATA[Manufacturing Kit]]>
					</value>
					<value language="nl">
						<![CDATA[Fabricage]]>
					</value>
					<value language="fr">
						<![CDATA[Fabrication]]>
					</value>
					<value language="de">
						<![CDATA[Herstellung]]>
					</value>
					<value language="sv">
						<![CDATA[Tillverkning]]>
					</value>
				</string>
			</Name>
			<Description>
				<string />
			</Description>
			<EntityTypeId>Bundle</EntityTypeId>
			<FieldTypes>
				<FieldTypeId>BundleApproved</FieldTypeId>
				<FieldTypeId>BundleLongDescription</FieldTypeId>
				<FieldTypeId>BundleProductNumber</FieldTypeId>
				<FieldTypeId>BundleProductType</FieldTypeId>
			</FieldTypes>
		</FieldSet>
		<FieldSet>
			<Id>ManufacturingProduct</Id>
			<Name>
				<string>
					<value language="en">
						<![CDATA[Manufacturing]]>
					</value>
					<value language="nl">
						<![CDATA[Fabricage]]>
					</value>
					<value language="fr">
						<![CDATA[Fabrication]]>
					</value>
					<value language="de">
						<![CDATA[Herstellung]]>
					</value>
					<value language="sv">
						<![CDATA[Tillverkning]]>
					</value>
				</string>
			</Name>
			<Description>
				<string />
			</Description>
			<EntityTypeId>Product</EntityTypeId>
			<FieldTypes>
				<FieldTypeId>ProductFeature1</FieldTypeId>
				<FieldTypeId>ProductFeature2</FieldTypeId>
			</FieldTypes>
		</FieldSet>
		<FieldSet>
			<Id>ManufacturingWaterHeater</Id>
			<Name>
				<string>
					<value language="en">
						<![CDATA[Manufacturing Water Heaters]]>
					</value>
					<value language="nl">
						<![CDATA[Manufacturing Water Heaters]]>
					</value>
					<value language="fr">
						<![CDATA[Fabrication Water Heaters]]>
					</value>
					<value language="de">
						<![CDATA[Herstellung Water Heaters]]>
					</value>
					<value language="sv">
						<![CDATA[Tillverkning Water Heaters]]>
					</value>
				</string>
			</Name>
			<Description>
				<string />
			</Description>
			<EntityTypeId>Item</EntityTypeId>
			<FieldTypes>
				<FieldTypeId>ItemManufactType</FieldTypeId>
				<FieldTypeId>ItenManufactureCapacity</FieldTypeId>
			</FieldTypes>
		</FieldSet>
		<FieldSet>
			<Id>RetailElectronicsItem</Id>
			<Name>
				<string>
					<value language="en">
						<![CDATA[Fashion/Retail: Electronics]]>
					</value>
					<value language="nl">
						<![CDATA[Fashion/Retail: elektronica]]>
					</value>
					<value language="fr">
						<![CDATA[Mode/détail : Electronics]]>
					</value>
					<value language="de">
						<![CDATA[Mode/Einzelhandel: Elektronik]]>
					</value>
					<value language="sv">
						<![CDATA[Mode/butik: elektronik]]>
					</value>
				</string>
			</Name>
			<Description>
				<string />
			</Description>
			<EntityTypeId>Item</EntityTypeId>
			<FieldTypes />
		</FieldSet>
		<FieldSet>
			<Id>RetailElectronicsProduct</Id>
			<Name>
				<string>
					<value language="en">
						<![CDATA[Fashion/Retail: Electronics]]>
					</value>
					<value language="nl">
						<![CDATA[Fashion/Retail: elektronica]]>
					</value>
					<value language="fr">
						<![CDATA[Mode/détail : Electronics]]>
					</value>
					<value language="de">
						<![CDATA[Mode/Einzelhandel: Elektronik]]>
					</value>
					<value language="sv">
						<![CDATA[Mode/butik: elektronik]]>
					</value>
				</string>
			</Name>
			<Description>
				<string />
			</Description>
			<EntityTypeId>Product</EntityTypeId>
			<FieldTypes />
		</FieldSet>
	</FieldSets>
	<FieldViews />
	<CVLvalues>
		<CVLvalue>
			<CVLId>ActivityBusinessArea</CVLId>
			<Key>Womenswear</Key>
			<Index>1</Index>
			<ParentKey />
			<Value>Womens wear</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>ActivityBusinessArea</CVLId>
			<Key>Kidswear</Key>
			<Index>2</Index>
			<ParentKey />
			<Value>Kids wear</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>ActivityBusinessArea</CVLId>
			<Key>Menswear</Key>
			<Index>3</Index>
			<ParentKey />
			<Value>Mens wear</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>ActivityBusinessArea</CVLId>
			<Key>Cosmetics</Key>
			<Index>4</Index>
			<ParentKey />
			<Value>Cosmetics</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>ActivityBusinessArea</CVLId>
			<Key>All</Key>
			<Index>5</Index>
			<ParentKey />
			<Value>All Areas</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>ActivityObjective</CVLId>
			<Key>Sales</Key>
			<Index>1</Index>
			<ParentKey />
			<Value>Sales</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>ActivityObjective</CVLId>
			<Key>Traffic</Key>
			<Index>2</Index>
			<ParentKey />
			<Value>Traffic</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>ActivityObjective</CVLId>
			<Key>Crosssales</Key>
			<Index>4</Index>
			<ParentKey />
			<Value>Cross sales </Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>ActivityObjective</CVLId>
			<Key>Upsales</Key>
			<Index>5</Index>
			<ParentKey />
			<Value>Up sales</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>ActivityObjective</CVLId>
			<Key>Awareness</Key>
			<Index>6</Index>
			<ParentKey />
			<Value>Awareness</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>ActivityObjective</CVLId>
			<Key>LaunchNewProduct</Key>
			<Index>7</Index>
			<ParentKey />
			<Value>Launch new product</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>ActivityObjective</CVLId>
			<Key>NewCustomers</Key>
			<Index>8</Index>
			<ParentKey />
			<Value>New customers</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>ActivityObjective</CVLId>
			<Key>EnterNewMarket</Key>
			<Index>9</Index>
			<ParentKey />
			<Value>Enter new market</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>ActivityResponsibleRole</CVLId>
			<Key>ContentManager</Key>
			<Index>1</Index>
			<ParentKey />
			<Value>Content manager</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>ActivityResponsibleRole</CVLId>
			<Key>CountryManager</Key>
			<Index>2</Index>
			<ParentKey />
			<Value>Country manager</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>ActivityResponsibleRole</CVLId>
			<Key>CRMManager</Key>
			<Index>3</Index>
			<ParentKey />
			<Value>CRM manager</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>ActivityResponsibleRole</CVLId>
			<Key>DigitalMarketinManager</Key>
			<Index>4</Index>
			<ParentKey />
			<Value>Digital marketing manager</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>ActivityResponsibleRole</CVLId>
			<Key>EcommerceManager</Key>
			<Index>5</Index>
			<ParentKey />
			<Value>Ecommerce manager</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>ActivityResponsibleRole</CVLId>
			<Key>PublicRelationsManager</Key>
			<Index>6</Index>
			<ParentKey />
			<Value>PR manager</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>ActivityResponsibleRole</CVLId>
			<Key>ProjectManager</Key>
			<Index>7</Index>
			<ParentKey />
			<Value>Project manager</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>ActivityResponsibleRole</CVLId>
			<Key>SocialMediaManager</Key>
			<Index>8</Index>
			<ParentKey />
			<Value>Social media manager</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>ActivitySize</CVLId>
			<Key>S</Key>
			<Index>1</Index>
			<ParentKey />
			<Value>Small</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>ActivitySize</CVLId>
			<Key>M</Key>
			<Index>2</Index>
			<ParentKey />
			<Value>Medium</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>ActivitySize</CVLId>
			<Key>L</Key>
			<Index>3</Index>
			<ParentKey />
			<Value>Large</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>ActivityStatus</CVLId>
			<Key>Draft</Key>
			<Index>1</Index>
			<ParentKey />
			<Value>Draft</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>ActivityStatus</CVLId>
			<Key>Confirmed</Key>
			<Index>2</Index>
			<ParentKey />
			<Value>Confirmed</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>ActivityStatus</CVLId>
			<Key>Development</Key>
			<Index>3</Index>
			<ParentKey />
			<Value>Development</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>ActivityStatus</CVLId>
			<Key>Production</Key>
			<Index>4</Index>
			<ParentKey />
			<Value>Production</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>ActivityStatus</CVLId>
			<Key>Completed</Key>
			<Index>4</Index>
			<ParentKey />
			<Value>Completed</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>ActivityStatus</CVLId>
			<Key>Cancelled</Key>
			<Index>5</Index>
			<ParentKey />
			<Value>Cancelled</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>ActivityStatus</CVLId>
			<Key>Framework</Key>
			<Index>6</Index>
			<ParentKey />
			<Value>Planning framework</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>ActivitySubBusinessArea</CVLId>
			<Key>Babynewborn</Key>
			<Index>1</Index>
			<ParentKey />
			<Value>Baby newborn</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>ActivitySubBusinessArea</CVLId>
			<Key>Denim</Key>
			<Index>2</Index>
			<ParentKey />
			<Value>Denim</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>ActivitySubBusinessArea</CVLId>
			<Key>Dress</Key>
			<Index>3</Index>
			<ParentKey />
			<Value>Dress</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>ActivitySubBusinessArea</CVLId>
			<Key>Jewelry</Key>
			<Index>4</Index>
			<ParentKey />
			<Value>Jewelry</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>ActivitySubBusinessArea</CVLId>
			<Key>Outerwearjackets</Key>
			<Index>5</Index>
			<ParentKey />
			<Value>Outerwear jackets</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>ActivitySubBusinessArea</CVLId>
			<Key>Shorts</Key>
			<Index>6</Index>
			<ParentKey />
			<Value>Shorts</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>ActivitySubBusinessArea</CVLId>
			<Key>Sweaters</Key>
			<Index>7</Index>
			<ParentKey />
			<Value>Sweathers</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>ActivitySubBusinessArea</CVLId>
			<Key>Tops</Key>
			<Index>8</Index>
			<ParentKey />
			<Value>Tops </Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>ActivitySubBusinessArea</CVLId>
			<Key>Trousers</Key>
			<Index>9</Index>
			<ParentKey />
			<Value>Trousers</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>ActivitySubBusinessArea</CVLId>
			<Key>All</Key>
			<Index>10</Index>
			<ParentKey />
			<Value>All</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>ActivityType</CVLId>
			<Key>Bonus</Key>
			<Index>1</Index>
			<ParentKey />
			<Value>Bonus</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>ActivityType</CVLId>
			<Key>Department</Key>
			<Index>4</Index>
			<ParentKey />
			<Value>Department specific</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>ActivityType</CVLId>
			<Key>Product</Key>
			<Index>5</Index>
			<ParentKey />
			<Value>Product specific</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>ActivityType</CVLId>
			<Key>GetTheLook</Key>
			<Index>5</Index>
			<ParentKey />
			<Value>Get the Look</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>ActivityType</CVLId>
			<Key>MarketinPlanning</Key>
			<Index>6</Index>
			<ParentKey />
			<Value>Marketing planning</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>ActivityType</CVLId>
			<Key>MidseasonSales</Key>
			<Index>7</Index>
			<ParentKey />
			<Value>Mid season sales</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>ActivityType</CVLId>
			<Key>LaunchNewProduct</Key>
			<Index>8</Index>
			<ParentKey />
			<Value>Launch New Product</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>ActivityType</CVLId>
			<Key>PR</Key>
			<Index>9</Index>
			<ParentKey />
			<Value>PR</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>ActivityType</CVLId>
			<Key>Event</Key>
			<Index>10</Index>
			<ParentKey />
			<Value>Event</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>ActivityType</CVLId>
			<Key>Sales</Key>
			<Index>10</Index>
			<ParentKey />
			<Value>Sales</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>ActivityType</CVLId>
			<Key>Ecommerce</Key>
			<Index>11</Index>
			<ParentKey />
			<Value>E-commerce</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>ActivityType</CVLId>
			<Key>SeasonalSales</Key>
			<Index>12</Index>
			<ParentKey />
			<Value>Seasonal Sales</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>ActivityType</CVLId>
			<Key>Social</Key>
			<Index>14</Index>
			<ParentKey />
			<Value>Social media</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>BudgetArea</CVLId>
			<Key>Production</Key>
			<Index>1</Index>
			<ParentKey />
			<Value>Production </Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>BudgetArea</CVLId>
			<Key>Media</Key>
			<Index>2</Index>
			<ParentKey />
			<Value>Media</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>BudgetArea</CVLId>
			<Key>PR</Key>
			<Index>3</Index>
			<ParentKey />
			<Value>PR</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>CampaignType</CVLId>
			<Key>campaign</Key>
			<Index>1</Index>
			<ParentKey />
			<Value>
				<string>
					<value language="en">
						<![CDATA[Campaign]]>
					</value>
					<value language="nl">
						<![CDATA[Campagne]]>
					</value>
					<value language="fr">
						<![CDATA[Campagne]]>
					</value>
					<value language="de">
						<![CDATA[Kampagne]]>
					</value>
					<value language="sv">
						<![CDATA[Kampanj]]>
					</value>
				</string>
			</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>CampaignType</CVLId>
			<Key>sale</Key>
			<Index>2</Index>
			<ParentKey />
			<Value>
				<string>
					<value language="en">
						<![CDATA[Sale]]>
					</value>
					<value language="nl">
						<![CDATA[Verkoop]]>
					</value>
					<value language="fr">
						<![CDATA[Vente]]>
					</value>
					<value language="de">
						<![CDATA[Verkauf]]>
					</value>
					<value language="sv">
						<![CDATA[Försäljning]]>
					</value>
				</string>
			</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>CampaignType</CVLId>
			<Key>release</Key>
			<Index>3</Index>
			<ParentKey />
			<Value>
				<string>
					<value language="en">
						<![CDATA[Product Release]]>
					</value>
					<value language="nl">
						<![CDATA[Productrelease]]>
					</value>
					<value language="fr">
						<![CDATA[Sortie du produit]]>
					</value>
					<value language="de">
						<![CDATA[Produktfreigabe]]>
					</value>
					<value language="sv">
						<![CDATA[Produktlansering]]>
					</value>
				</string>
			</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>Condition</CVLId>
			<Key>condition1</Key>
			<Index>0</Index>
			<ParentKey />
			<Value>
				<string>
					<value language="en">
						<![CDATA[Condition 1]]>
					</value>
					<value language="nl">
						<![CDATA[Voorwaade 1]]>
					</value>
					<value language="fr">
						<![CDATA[Condition 1]]>
					</value>
					<value language="de">
						<![CDATA[Bedingung 1]]>
					</value>
					<value language="sv">
						<![CDATA[Villkor 1]]>
					</value>
				</string>
			</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>Condition</CVLId>
			<Key>condition2</Key>
			<Index>1</Index>
			<ParentKey />
			<Value>
				<string>
					<value language="en">
						<![CDATA[Condition 2]]>
					</value>
					<value language="nl">
						<![CDATA[Voorwaade 2]]>
					</value>
					<value language="fr">
						<![CDATA[Condition 2]]>
					</value>
					<value language="de">
						<![CDATA[Bedingung 2]]>
					</value>
					<value language="sv">
						<![CDATA[Villkor 2]]>
					</value>
				</string>
			</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>Condition</CVLId>
			<Key>condition3</Key>
			<Index>2</Index>
			<ParentKey />
			<Value>
				<string>
					<value language="en">
						<![CDATA[Condition 3]]>
					</value>
					<value language="nl">
						<![CDATA[Voorwaade 3]]>
					</value>
					<value language="fr">
						<![CDATA[Condition 3]]>
					</value>
					<value language="de">
						<![CDATA[Bedingung 3]]>
					</value>
					<value language="sv">
						<![CDATA[Villkor 3]]>
					</value>
				</string>
			</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>CuttingWidthin</CVLId>
			<Key>19</Key>
			<Index>0</Index>
			<ParentKey />
			<Value>19</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>CuttingWidthin</CVLId>
			<Key>20</Key>
			<Index>1</Index>
			<ParentKey />
			<Value>20</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>CuttingWidthin</CVLId>
			<Key>21</Key>
			<Index>2</Index>
			<ParentKey />
			<Value>21</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>DAMClass</CVLId>
			<Key>Corbis</Key>
			<Index>1</Index>
			<ParentKey />
			<Value>Corbis</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>DAMClass</CVLId>
			<Key>iStock</Key>
			<Index>2</Index>
			<ParentKey />
			<Value>iStock</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>DAMClass</CVLId>
			<Key>Internal</Key>
			<Index>3</Index>
			<ParentKey />
			<Value>Internal</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>DIYProductType</CVLId>
			<Key>consumer</Key>
			<Index>1</Index>
			<ParentKey />
			<Value>
				<string>
					<value language="en">
						<![CDATA[Consumer]]>
					</value>
					<value language="nl">
						<![CDATA[Consument]]>
					</value>
					<value language="fr">
						<![CDATA[Consommateur]]>
					</value>
					<value language="de">
						<![CDATA[Verbraucher]]>
					</value>
					<value language="sv">
						<![CDATA[Konsument]]>
					</value>
				</string>
			</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>DIYProductType</CVLId>
			<Key>professional</Key>
			<Index>2</Index>
			<ParentKey />
			<Value>
				<string>
					<value language="en">
						<![CDATA[Professional]]>
					</value>
					<value language="nl">
						<![CDATA[Professioneel]]>
					</value>
					<value language="fr">
						<![CDATA[Professionnel]]>
					</value>
					<value language="de">
						<![CDATA[Berufstätig]]>
					</value>
					<value language="sv">
						<![CDATA[Professionell]]>
					</value>
				</string>
			</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>DIYProductType</CVLId>
			<Key>industry</Key>
			<Index>3</Index>
			<ParentKey />
			<Value>
				<string>
					<value language="en">
						<![CDATA[Industry]]>
					</value>
					<value language="nl">
						<![CDATA[Industrie]]>
					</value>
					<value language="fr">
						<![CDATA[Secteur]]>
					</value>
					<value language="de">
						<![CDATA[Branche]]>
					</value>
					<value language="sv">
						<![CDATA[Industri]]>
					</value>
				</string>
			</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>FashionCare</CVLId>
			<Key>handwash</Key>
			<Index>1</Index>
			<ParentKey />
			<Value>
				<string>
					<value language="en">
						<![CDATA[Hand Wash]]>
					</value>
					<value language="nl">
						<![CDATA[Handwas]]>
					</value>
					<value language="fr">
						<![CDATA[Lavage à la main]]>
					</value>
					<value language="de">
						<![CDATA[Handwäsche]]>
					</value>
					<value language="sv">
						<![CDATA[Handtvätt]]>
					</value>
				</string>
			</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>FashionCare</CVLId>
			<Key>machinewashcold</Key>
			<Index>2</Index>
			<ParentKey />
			<Value>
				<string>
					<value language="en">
						<![CDATA[Machine Wash Cold]]>
					</value>
					<value language="nl">
						<![CDATA[Koude machinewas]]>
					</value>
					<value language="fr">
						<![CDATA[Machine de lavage à froid]]>
					</value>
					<value language="de">
						<![CDATA[Maschinenwäsche kalt]]>
					</value>
					<value language="sv">
						<![CDATA[Maskintvätt kallt]]>
					</value>
				</string>
			</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>FashionCare</CVLId>
			<Key>machinewash30</Key>
			<Index>3</Index>
			<ParentKey />
			<Value>
				<string>
					<value language="en">
						<![CDATA[Machine Wash 30]]>
					</value>
					<value language="nl">
						<![CDATA[Machine fijnwas 30]]>
					</value>
					<value language="fr">
						<![CDATA[Lavage en machine 30]]>
					</value>
					<value language="de">
						<![CDATA[Maschinenwäsche 30]]>
					</value>
					<value language="sv">
						<![CDATA[Maskintvätt 30]]>
					</value>
				</string>
			</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>FashionCare</CVLId>
			<Key>machinewash60</Key>
			<Index>4</Index>
			<ParentKey />
			<Value>
				<string>
					<value language="en">
						<![CDATA[Machine Wash 60]]>
					</value>
					<value language="nl">
						<![CDATA[Machine fijnwas 60]]>
					</value>
					<value language="fr">
						<![CDATA[Machine à laver 60]]>
					</value>
					<value language="de">
						<![CDATA[Maschinenwäsche 60]]>
					</value>
					<value language="sv">
						<![CDATA[Maskintvätt 60]]>
					</value>
				</string>
			</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>FashionCare</CVLId>
			<Key>machinewashpermanentpress</Key>
			<Index>5</Index>
			<ParentKey />
			<Value>
				<string>
					<value language="en">
						<![CDATA[Machine Wash Permanent Press]]>
					</value>
					<value language="nl">
						<![CDATA[Machine fijnwas permanente druk op]]>
					</value>
					<value language="fr">
						<![CDATA[Machine à laver-repassage]]>
					</value>
					<value language="de">
						<![CDATA[Synthetische Maschinenwäsche]]>
					</value>
					<value language="sv">
						<![CDATA[Maskintvätt syntet]]>
					</value>
				</string>
			</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>FashionCare</CVLId>
			<Key>dryclean</Key>
			<Index>6</Index>
			<ParentKey />
			<Value>
				<string>
					<value language="en">
						<![CDATA[Dry Clean]]>
					</value>
					<value language="nl">
						<![CDATA[Droog reinigen]]>
					</value>
					<value language="fr">
						<![CDATA[Nettoyage à sec]]>
					</value>
					<value language="de">
						<![CDATA[Chemische Reinigung]]>
					</value>
					<value language="sv">
						<![CDATA[Kemtvätt]]>
					</value>
				</string>
			</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>FashionCare</CVLId>
			<Key>nodryclean</Key>
			<Index>7</Index>
			<ParentKey />
			<Value>
				<string>
					<value language="en">
						<![CDATA[Do Not Dry Clean]]>
					</value>
					<value language="nl">
						<![CDATA[Niet droog reinigen]]>
					</value>
					<value language="fr">
						<![CDATA[Ne pas nettoyer à sec]]>
					</value>
					<value language="de">
						<![CDATA[Nicht chemisch reinigen]]>
					</value>
					<value language="sv">
						<![CDATA[Ej kemtvätt]]>
					</value>
				</string>
			</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>FashionCare</CVLId>
			<Key>nobleach</Key>
			<Index>8</Index>
			<ParentKey />
			<Value>
				<string>
					<value language="en">
						<![CDATA[No Bleach]]>
					</value>
					<value language="nl">
						<![CDATA[Geen bleekmiddel]]>
					</value>
					<value language="fr">
						<![CDATA[Aucun agent de blanchiment]]>
					</value>
					<value language="de">
						<![CDATA[Keine Bleichmittel]]>
					</value>
					<value language="sv">
						<![CDATA[Ej blekmedel]]>
					</value>
				</string>
			</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>FashionCare</CVLId>
			<Key>nobleachblack</Key>
			<Index>9</Index>
			<ParentKey />
			<Value>
				<string>
					<value language="en">
						<![CDATA[No Bleach Black]]>
					</value>
					<value language="nl">
						<![CDATA[Geen bleekmiddel zwart]]>
					</value>
					<value language="fr">
						<![CDATA[Aucun agent de blanchiment noir]]>
					</value>
					<value language="de">
						<![CDATA[Kein Bleichmittel schwarz]]>
					</value>
					<value language="sv">
						<![CDATA[Ej blekmedel svart]]>
					</value>
				</string>
			</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>FashionCare</CVLId>
			<Key>nochlorinebleach</Key>
			<Index>10</Index>
			<ParentKey />
			<Value>
				<string>
					<value language="en">
						<![CDATA[No Chlorine Bleach]]>
					</value>
					<value language="nl">
						<![CDATA[Geen bleekmiddel zwart]]>
					</value>
					<value language="fr">
						<![CDATA[Aucun agent de blanchiment]]>
					</value>
					<value language="de">
						<![CDATA[Keine Chlorbleiche]]>
					</value>
					<value language="sv">
						<![CDATA[Ej klorinblekmedel]]>
					</value>
				</string>
			</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>FashionCare</CVLId>
			<Key>linedry</Key>
			<Index>11</Index>
			<ParentKey />
			<Value>
				<string>
					<value language="en">
						<![CDATA[Line Dry]]>
					</value>
					<value language="nl">
						<![CDATA[Droge lijn]]>
					</value>
					<value language="fr">
						<![CDATA[Ligne sèche]]>
					</value>
					<value language="de">
						<![CDATA[Der Wäscheleine trocknen]]>
					</value>
					<value language="sv">
						<![CDATA[Lintorkning]]>
					</value>
				</string>
			</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>FashionCare</CVLId>
			<Key>tumbledrynoheat</Key>
			<Index>12</Index>
			<ParentKey />
			<Value>
				<string>
					<value language="en">
						<![CDATA[Tumble Dry No Heat]]>
					</value>
					<value language="nl">
						<![CDATA[Geen warmte de droger]]>
					</value>
					<value language="fr">
						<![CDATA[Sécher par culbutage sans chaleur]]>
					</value>
					<value language="de">
						<![CDATA[Im Trockner trocknen keine Wärme]]>
					</value>
					<value language="sv">
						<![CDATA[Torktumla kallt]]>
					</value>
				</string>
			</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>FashionCare</CVLId>
			<Key>tumbledrylowheat</Key>
			<Index>13</Index>
			<ParentKey />
			<Value>
				<string>
					<value language="en">
						<![CDATA[Tumble Dry Low Heat]]>
					</value>
					<value language="nl">
						<![CDATA[Geen warmte de droger]]>
					</value>
					<value language="fr">
						<![CDATA[Feu doux sèche linge]]>
					</value>
					<value language="de">
						<![CDATA[Im Trockner trocknen schwacher Hitze]]>
					</value>
					<value language="sv">
						<![CDATA[Tumla torrt låg värme]]>
					</value>
				</string>
			</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>FashionCare</CVLId>
			<Key>tumbledrymediumheat</Key>
			<Index>14</Index>
			<ParentKey />
			<Value>
				<string>
					<value language="en">
						<![CDATA[Tumble Dry Medium Heat]]>
					</value>
					<value language="nl">
						<![CDATA[Tuimelen droge middellange warmte]]>
					</value>
					<value language="fr">
						<![CDATA[Tumble sec huilee]]>
					</value>
					<value language="de">
						<![CDATA[Im Trockner trocknen mittleren Hitze]]>
					</value>
					<value language="sv">
						<![CDATA[Tumble Dry mittleren Hitze]]>
					</value>
				</string>
			</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>FashionCare</CVLId>
			<Key>tumbledrynormal</Key>
			<Index>15</Index>
			<ParentKey />
			<Value>
				<string>
					<value language="en">
						<![CDATA[Tumble Dry Normal]]>
					</value>
					<value language="nl">
						<![CDATA[Tuimelen droge normaal]]>
					</value>
					<value language="fr">
						<![CDATA[Normale de sèche linge]]>
					</value>
					<value language="de">
						<![CDATA[Im Trockner trocknen normal]]>
					</value>
					<value language="sv">
						<![CDATA[Tumla torrt normal]]>
					</value>
				</string>
			</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>FashionCare</CVLId>
			<Key>notumbledry</Key>
			<Index>16</Index>
			<ParentKey />
			<Value>
				<string>
					<value language="en">
						<![CDATA[Do Not Tumble Dry]]>
					</value>
					<value language="nl">
						<![CDATA[Niet droger]]>
					</value>
					<value language="fr">
						<![CDATA[Ne pas sécher au séchoir]]>
					</value>
					<value language="de">
						<![CDATA[Nicht Trockner]]>
					</value>
					<value language="sv">
						<![CDATA[Ej torktumling]]>
					</value>
				</string>
			</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>FashionCare</CVLId>
			<Key>ironlow</Key>
			<Index>17</Index>
			<ParentKey />
			<Value>
				<string>
					<value language="en">
						<![CDATA[Iron Low Temperature]]>
					</value>
					<value language="nl">
						<![CDATA[Strijken bij lage temperatuur]]>
					</value>
					<value language="fr">
						<![CDATA[Repassage à basse température]]>
					</value>
					<value language="de">
						<![CDATA[Bei niedriger Temperatur bügeln]]>
					</value>
					<value language="sv">
						<![CDATA[Strykning låg temperatur]]>
					</value>
				</string>
			</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>FashionCare</CVLId>
			<Key>ironmedium</Key>
			<Index>18</Index>
			<ParentKey />
			<Value>
				<string>
					<value language="en">
						<![CDATA[Iron Medium Temperature]]>
					</value>
					<value language="nl">
						<![CDATA[Strijken bij lage temperatuur]]>
					</value>
					<value language="fr">
						<![CDATA[Repassage à médium température]]>
					</value>
					<value language="de">
						<![CDATA[Bei mitteler Temperatur bügeln]]>
					</value>
					<value language="sv">
						<![CDATA[Strykning medel temperatur]]>
					</value>
				</string>
			</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>FashionCare</CVLId>
			<Key>ironhigh</Key>
			<Index>19</Index>
			<ParentKey />
			<Value>
				<string>
					<value language="en">
						<![CDATA[Iron High Temperature]]>
					</value>
					<value language="nl">
						<![CDATA[Strijken bij lage temperatuur]]>
					</value>
					<value language="fr">
						<![CDATA[Repassage à haute température]]>
					</value>
					<value language="de">
						<![CDATA[Bei hocher Temperatur bügeln]]>
					</value>
					<value language="sv">
						<![CDATA[Strykning hög temperatur]]>
					</value>
				</string>
			</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>FashionCare</CVLId>
			<Key>noiron</Key>
			<Index>20</Index>
			<ParentKey />
			<Value>
				<string>
					<value language="en">
						<![CDATA[Do Not Iron]]>
					</value>
					<value language="nl">
						<![CDATA[Niet strijken]]>
					</value>
					<value language="fr">
						<![CDATA[Ne pas repasser]]>
					</value>
					<value language="de">
						<![CDATA[Nicht bügeln]]>
					</value>
					<value language="sv">
						<![CDATA[Stryk ej]]>
					</value>
				</string>
			</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>FashionIncludedBrand</CVLId>
			<Key>velcro</Key>
			<Index>0</Index>
			<ParentKey />
			<Value>VELCRO®</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>FashionIncludedBrand</CVLId>
			<Key>windstopper</Key>
			<Index>0</Index>
			<ParentKey />
			<Value>WINDSTOPPER® </Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>FashionIncludedBrand</CVLId>
			<Key>goretex</Key>
			<Index>1</Index>
			<ParentKey />
			<Value>GoreTex</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>FashionMaterial</CVLId>
			<Key>polyester</Key>
			<Index>0</Index>
			<ParentKey />
			<Value>
				<string>
					<value language="en">
						<![CDATA[Polyester]]>
					</value>
					<value language="nl">
						<![CDATA[Polyester]]>
					</value>
					<value language="fr">
						<![CDATA[Polyester]]>
					</value>
					<value language="de">
						<![CDATA[Polyester]]>
					</value>
					<value language="sv">
						<![CDATA[Polyester]]>
					</value>
				</string>
			</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>FashionMaterial</CVLId>
			<Key>cotton</Key>
			<Index>1</Index>
			<ParentKey />
			<Value>
				<string>
					<value language="en">
						<![CDATA[Cotton]]>
					</value>
					<value language="nl">
						<![CDATA[Katoen]]>
					</value>
					<value language="fr">
						<![CDATA[Coton]]>
					</value>
					<value language="de">
						<![CDATA[Baumwolle]]>
					</value>
					<value language="sv">
						<![CDATA[Bomull]]>
					</value>
				</string>
			</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>FashionMaterial</CVLId>
			<Key>syntethic</Key>
			<Index>1</Index>
			<ParentKey />
			<Value>
				<string>
					<value language="en">
						<![CDATA[Syntethic]]>
					</value>
					<value language="nl">
						<![CDATA[Syntetische]]>
					</value>
					<value language="fr">
						<![CDATA[Synthetique]]>
					</value>
					<value language="de">
						<![CDATA[Syntethic]]>
					</value>
					<value language="sv">
						<![CDATA[Syntet]]>
					</value>
				</string>
			</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>FashionMaterial</CVLId>
			<Key>other</Key>
			<Index>1</Index>
			<ParentKey />
			<Value>
				<string>
					<value language="en">
						<![CDATA[Other]]>
					</value>
					<value language="nl">
						<![CDATA[Anders]]>
					</value>
					<value language="fr">
						<![CDATA[Autre]]>
					</value>
					<value language="de">
						<![CDATA[Andere]]>
					</value>
					<value language="sv">
						<![CDATA[Övrigt]]>
					</value>
				</string>
			</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>FashionMaterial</CVLId>
			<Key>wool</Key>
			<Index>2</Index>
			<ParentKey />
			<Value>
				<string>
					<value language="en">
						<![CDATA[Wool]]>
					</value>
					<value language="nl">
						<![CDATA[Wol]]>
					</value>
					<value language="fr">
						<![CDATA[Laine]]>
					</value>
					<value language="de">
						<![CDATA[Wolle]]>
					</value>
					<value language="sv">
						<![CDATA[Ull]]>
					</value>
				</string>
			</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>FoodAllergens</CVLId>
			<Key>Eggs</Key>
			<Index>1</Index>
			<ParentKey />
			<Value>
				<string>
					<value language="en">
						<![CDATA[Eggs]]>
					</value>
					<value language="nl">
						<![CDATA[Eieren]]>
					</value>
					<value language="fr">
						<![CDATA[Œufs]]>
					</value>
					<value language="de">
						<![CDATA[Eier]]>
					</value>
					<value language="sv">
						<![CDATA[Ägg]]>
					</value>
				</string>
			</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>FoodAllergens</CVLId>
			<Key>Cereals</Key>
			<Index>2</Index>
			<ParentKey />
			<Value>
				<string>
					<value language="en">
						<![CDATA[Cereals Containing Gluten]]>
					</value>
					<value language="nl">
						<![CDATA[Glutenbevattende Granen]]>
					</value>
					<value language="fr">
						<![CDATA[Céréales Contenant Du Gluten]]>
					</value>
					<value language="de">
						<![CDATA[Glutenhaltiges Getreide]]>
					</value>
					<value language="sv">
						<![CDATA[Spannmål Som Innehåller Gluten]]>
					</value>
				</string>
			</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>FoodAllergens</CVLId>
			<Key>Lupine</Key>
			<Index>3</Index>
			<ParentKey />
			<Value>
				<string>
					<value language="en">
						<![CDATA[Lupine]]>
					</value>
					<value language="nl">
						<![CDATA[Lupine]]>
					</value>
					<value language="fr">
						<![CDATA[Lupin]]>
					</value>
					<value language="de">
						<![CDATA[Lupine]]>
					</value>
					<value language="sv">
						<![CDATA[Lupin]]>
					</value>
				</string>
			</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>FoodAllergens</CVLId>
			<Key>Milk</Key>
			<Index>4</Index>
			<ParentKey />
			<Value>
				<string>
					<value language="en">
						<![CDATA[Milk (Including Lactose)]]>
					</value>
					<value language="nl">
						<![CDATA[Melk (Inclusief Lactose)]]>
					</value>
					<value language="fr">
						<![CDATA[Lait (Y Compris Le Lactose)]]>
					</value>
					<value language="de">
						<![CDATA[Milch (Einschließlich Laktose)]]>
					</value>
					<value language="sv">
						<![CDATA[Mjölk (Inklusive Laktos)]]>
					</value>
				</string>
			</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>FoodAllergens</CVLId>
			<Key>Mustard</Key>
			<Index>5</Index>
			<ParentKey />
			<Value>
				<string>
					<value language="en">
						<![CDATA[Mustard]]>
					</value>
					<value language="nl">
						<![CDATA[Mosterd]]>
					</value>
					<value language="fr">
						<![CDATA[Moutarde]]>
					</value>
					<value language="de">
						<![CDATA[Senf]]>
					</value>
					<value language="sv">
						<![CDATA[Senap]]>
					</value>
				</string>
			</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>FoodAllergens</CVLId>
			<Key>Nuts</Key>
			<Index>6</Index>
			<ParentKey />
			<Value>
				<string>
					<value language="en">
						<![CDATA[Nuts]]>
					</value>
					<value language="nl">
						<![CDATA[Noten]]>
					</value>
					<value language="fr">
						<![CDATA[Noix]]>
					</value>
					<value language="de">
						<![CDATA[Nüsse]]>
					</value>
					<value language="sv">
						<![CDATA[Nötter]]>
					</value>
				</string>
			</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>FoodAllergens</CVLId>
			<Key>Shellfish</Key>
			<Index>8</Index>
			<ParentKey />
			<Value>
				<string>
					<value language="en">
						<![CDATA[Shellfish]]>
					</value>
					<value language="nl">
						<![CDATA[Schaaldieren]]>
					</value>
					<value language="fr">
						<![CDATA[Fruits De Mer]]>
					</value>
					<value language="de">
						<![CDATA[Schaltier]]>
					</value>
					<value language="sv">
						<![CDATA[Shellfish]]>
					</value>
				</string>
			</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>FoodAllergens</CVLId>
			<Key>Celery</Key>
			<Index>9</Index>
			<ParentKey />
			<Value>
				<string>
					<value language="en">
						<![CDATA[Celery]]>
					</value>
					<value language="nl">
						<![CDATA[Selderij]]>
					</value>
					<value language="fr">
						<![CDATA[Céleri]]>
					</value>
					<value language="de">
						<![CDATA[Sellerie]]>
					</value>
					<value language="sv">
						<![CDATA[Selleri]]>
					</value>
				</string>
			</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>FoodAllergens</CVLId>
			<Key>Sesame</Key>
			<Index>10</Index>
			<ParentKey />
			<Value>
				<string>
					<value language="en">
						<![CDATA[Sesame]]>
					</value>
					<value language="nl">
						<![CDATA[Sesamzaad]]>
					</value>
					<value language="fr">
						<![CDATA[Sésame]]>
					</value>
					<value language="de">
						<![CDATA[Sesam]]>
					</value>
					<value language="sv">
						<![CDATA[Sesamfrö]]>
					</value>
				</string>
			</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>FoodAllergens</CVLId>
			<Key>Soya</Key>
			<Index>11</Index>
			<ParentKey />
			<Value>
				<string>
					<value language="en">
						<![CDATA[Soya]]>
					</value>
					<value language="nl">
						<![CDATA[Soja]]>
					</value>
					<value language="fr">
						<![CDATA[Soya]]>
					</value>
					<value language="de">
						<![CDATA[Soja]]>
					</value>
					<value language="sv">
						<![CDATA[Soja]]>
					</value>
				</string>
			</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>FoodAllergens</CVLId>
			<Key>Fish</Key>
			<Index>12</Index>
			<ParentKey />
			<Value>
				<string>
					<value language="en">
						<![CDATA[Fish]]>
					</value>
					<value language="nl">
						<![CDATA[Vis]]>
					</value>
					<value language="fr">
						<![CDATA[Poisson]]>
					</value>
					<value language="de">
						<![CDATA[Fisch]]>
					</value>
					<value language="sv">
						<![CDATA[Fisk]]>
					</value>
				</string>
			</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>FoodAllergens</CVLId>
			<Key>Molluscs</Key>
			<Index>13</Index>
			<ParentKey />
			<Value>
				<string>
					<value language="en">
						<![CDATA[Molluscs]]>
					</value>
					<value language="nl">
						<![CDATA[Weekdieren]]>
					</value>
					<value language="fr">
						<![CDATA[Mollusques]]>
					</value>
					<value language="de">
						<![CDATA[Mollusken]]>
					</value>
					<value language="sv">
						<![CDATA[Blötdjur]]>
					</value>
				</string>
			</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>FoodAllergens</CVLId>
			<Key>Sulphur</Key>
			<Index>14</Index>
			<ParentKey />
			<Value>
				<string>
					<value language="en">
						<![CDATA[Sulphur Dioxide And Sulphites At Concentrations Of More Than 10 Mg Of So2 Per Kg Or Liter.]]>
					</value>
					<value language="nl">
						<![CDATA[Zwaveldioxide En Sulfiet Bij Concentraties Van Meer Dan 10 Mg So2 Per Kilo Of Liter.]]>
					</value>
					<value language="fr">
						<![CDATA[Le Dioxyde De Soufre Et Sulfites En Concentrations De Plus De 10 Mg De So2 Par Kg Ou Litre.]]>
					</value>
					<value language="de">
						<![CDATA[Schwefeldioxid Und Sulfite In Einer Konzentration Von Mehr Als 10 Mg So2 Pro Kg Oder Liter.]]>
					</value>
					<value language="sv">
						<![CDATA[Svaveldioxid Och Sulfit I Koncentrationer På Mer Än 10 Mg So2 Per Kg Eller Liter.]]>
					</value>
				</string>
			</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>FoodMarks</CVLId>
			<Key>nonGMO</Key>
			<Index>1</Index>
			<ParentKey />
			<Value>
				<string>
					<value language="en">
						<![CDATA[Non GMO]]>
					</value>
					<value language="nl">
						<![CDATA[Niet genetisch gemodificeerd]]>
					</value>
					<value language="fr">
						<![CDATA[Non génétiquement modifié]]>
					</value>
					<value language="de">
						<![CDATA[Nicht-genetisch veränderte]]>
					</value>
					<value language="sv">
						<![CDATA[Icke genetiskt modifierade]]>
					</value>
				</string>
			</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>FoodMarks</CVLId>
			<Key>betterLife</Key>
			<Index>2</Index>
			<ParentKey />
			<Value>
				<string>
					<value language="en">
						<![CDATA[Better life]]>
					</value>
					<value language="nl">
						<![CDATA[Beter leven]]>
					</value>
					<value language="fr">
						<![CDATA[Vie meilleure]]>
					</value>
					<value language="de">
						<![CDATA[Besseres Leben]]>
					</value>
					<value language="sv">
						<![CDATA[Bättre liv]]>
					</value>
				</string>
			</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>FoodMarks</CVLId>
			<Key>consciousChoice</Key>
			<Index>3</Index>
			<ParentKey />
			<Value>
				<string>
					<value language="en">
						<![CDATA[Conscious choice]]>
					</value>
					<value language="nl">
						<![CDATA[Bewuste keuze]]>
					</value>
					<value language="fr">
						<![CDATA[Choix conscient]]>
					</value>
					<value language="de">
						<![CDATA[Bewusste Wahl]]>
					</value>
					<value language="sv">
						<![CDATA[Medvetet val]]>
					</value>
				</string>
			</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>FoodMarks</CVLId>
			<Key>BRC</Key>
			<Index>4</Index>
			<ParentKey />
			<Value>
				<string>
					<value language="en">
						<![CDATA[BRC Certification]]>
					</value>
					<value language="nl">
						<![CDATA[BRC Certificering]]>
					</value>
					<value language="fr">
						<![CDATA[Certification BRC]]>
					</value>
					<value language="de">
						<![CDATA[BRC Zertifizierung]]>
					</value>
					<value language="sv">
						<![CDATA[BRC Certifiering]]>
					</value>
				</string>
			</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>Gender</CVLId>
			<Key>male</Key>
			<Index>1</Index>
			<ParentKey />
			<Value>
				<string>
					<value language="en">
						<![CDATA[Male]]>
					</value>
					<value language="nl">
						<![CDATA[Mannetje]]>
					</value>
					<value language="fr">
						<![CDATA[Masculin]]>
					</value>
					<value language="de">
						<![CDATA[Männlich]]>
					</value>
					<value language="sv">
						<![CDATA[Manlig]]>
					</value>
				</string>
			</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>Gender</CVLId>
			<Key>female</Key>
			<Index>2</Index>
			<ParentKey />
			<Value>
				<string>
					<value language="en">
						<![CDATA[Female]]>
					</value>
					<value language="nl">
						<![CDATA[Vrouwelijk]]>
					</value>
					<value language="fr">
						<![CDATA[Féminin]]>
					</value>
					<value language="de">
						<![CDATA[Weiblich]]>
					</value>
					<value language="sv">
						<![CDATA[Kvinnlig]]>
					</value>
				</string>
			</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>Gender</CVLId>
			<Key>unisex</Key>
			<Index>3</Index>
			<ParentKey />
			<Value>
				<string>
					<value language="en">
						<![CDATA[Unisex]]>
					</value>
					<value language="nl">
						<![CDATA[Unisex]]>
					</value>
					<value language="fr">
						<![CDATA[Unisexe]]>
					</value>
					<value language="de">
						<![CDATA[Unisex]]>
					</value>
					<value language="sv">
						<![CDATA[Unisex]]>
					</value>
				</string>
			</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>Industry</CVLId>
			<Key>fashionretail</Key>
			<Index>1</Index>
			<ParentKey />
			<Value>
				<string>
					<value language="en">
						<![CDATA[Fashion/Retail]]>
					</value>
					<value language="nl">
						<![CDATA[Fashion Retail]]>
					</value>
					<value language="fr">
						<![CDATA[Magasins de mode]]>
					</value>
					<value language="de">
						<![CDATA[Mode-Einzelhandel]]>
					</value>
					<value language="sv">
						<![CDATA[Fashion Retail]]>
					</value>
				</string>
			</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>Industry</CVLId>
			<Key>diy</Key>
			<Index>2</Index>
			<ParentKey />
			<Value>
				<string>
					<value language="en">
						<![CDATA[DIY]]>
					</value>
					<value language="nl">
						<![CDATA[DIY]]>
					</value>
					<value language="fr">
						<![CDATA[Bricolage]]>
					</value>
					<value language="de">
						<![CDATA[Heimwerken]]>
					</value>
					<value language="sv">
						<![CDATA[DIY]]>
					</value>
				</string>
			</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>Industry</CVLId>
			<Key>furniture</Key>
			<Index>3</Index>
			<ParentKey />
			<Value>
				<string>
					<value language="en">
						<![CDATA[Furniture]]>
					</value>
					<value language="nl">
						<![CDATA[Meubilair]]>
					</value>
					<value language="fr">
						<![CDATA[Ameublement]]>
					</value>
					<value language="de">
						<![CDATA[Möbel]]>
					</value>
					<value language="sv">
						<![CDATA[Möbler]]>
					</value>
				</string>
			</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>Industry</CVLId>
			<Key>manufacturing</Key>
			<Index>4</Index>
			<ParentKey />
			<Value>
				<string>
					<value language="en">
						<![CDATA[Manufacturing]]>
					</value>
					<value language="nl">
						<![CDATA[Productie]]>
					</value>
					<value language="fr">
						<![CDATA[Fabrication]]>
					</value>
					<value language="de">
						<![CDATA[Herstellung]]>
					</value>
					<value language="sv">
						<![CDATA[Tillverkning]]>
					</value>
				</string>
			</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>Industry</CVLId>
			<Key>food</Key>
			<Index>5</Index>
			<ParentKey />
			<Value>
				<string>
					<value language="en">
						<![CDATA[Food]]>
					</value>
					<value language="nl">
						<![CDATA[Voedingsmiddelen]]>
					</value>
					<value language="fr">
						<![CDATA[Nourriture]]>
					</value>
					<value language="de">
						<![CDATA[Lebensmittel]]>
					</value>
					<value language="sv">
						<![CDATA[Mat]]>
					</value>
				</string>
			</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>ItemCapacity</CVLId>
			<Key>10</Key>
			<Index>1</Index>
			<ParentKey />
			<Value>10</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>ItemCapacity</CVLId>
			<Key>20</Key>
			<Index>2</Index>
			<ParentKey />
			<Value>20</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>ItemCapacity</CVLId>
			<Key>30</Key>
			<Index>3</Index>
			<ParentKey />
			<Value>30</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>ItemCapacity</CVLId>
			<Key>40</Key>
			<Index>4</Index>
			<ParentKey />
			<Value>40</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>ItemCapacity</CVLId>
			<Key>50</Key>
			<Index>5</Index>
			<ParentKey />
			<Value>50</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>ItemCapacity</CVLId>
			<Key>60</Key>
			<Index>6</Index>
			<ParentKey />
			<Value>60</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>ItemCapacity</CVLId>
			<Key>70</Key>
			<Index>7</Index>
			<ParentKey />
			<Value>70</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>ItemCapacity</CVLId>
			<Key>80</Key>
			<Index>8</Index>
			<ParentKey />
			<Value>80</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>ItemCapacity</CVLId>
			<Key>90</Key>
			<Index>9</Index>
			<ParentKey />
			<Value>90</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>ItemCapacity</CVLId>
			<Key>100</Key>
			<Index>10</Index>
			<ParentKey />
			<Value>100</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>ItemSeason</CVLId>
			<Key>FW2015</Key>
			<Index>1</Index>
			<ParentKey />
			<Value>
				<string>
					<value language="en">
						<![CDATA[FW2015]]>
					</value>
					<value language="nl">
						<![CDATA[FW2015]]>
					</value>
					<value language="fr">
						<![CDATA[FW2015]]>
					</value>
					<value language="de">
						<![CDATA[FW2015]]>
					</value>
					<value language="sv">
						<![CDATA[FW2015]]>
					</value>
				</string>
			</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>ItemSeason</CVLId>
			<Key>SS2016</Key>
			<Index>2</Index>
			<ParentKey />
			<Value>
				<string>
					<value language="en">
						<![CDATA[SS2016]]>
					</value>
					<value language="nl">
						<![CDATA[SS2016]]>
					</value>
					<value language="fr">
						<![CDATA[SS2016]]>
					</value>
					<value language="de">
						<![CDATA[SS2016]]>
					</value>
					<value language="sv">
						<![CDATA[SS2016]]>
					</value>
				</string>
			</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>ItemSeason</CVLId>
			<Key>FW2016</Key>
			<Index>3</Index>
			<ParentKey />
			<Value>
				<string>
					<value language="en">
						<![CDATA[FW2016]]>
					</value>
					<value language="nl">
						<![CDATA[FW2016]]>
					</value>
					<value language="fr">
						<![CDATA[FW2016]]>
					</value>
					<value language="de">
						<![CDATA[FW2016]]>
					</value>
					<value language="sv">
						<![CDATA[FW2016]]>
					</value>
				</string>
			</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>ItemSeason</CVLId>
			<Key>SS2017</Key>
			<Index>4</Index>
			<ParentKey />
			<Value>
				<string>
					<value language="en">
						<![CDATA[SS2017]]>
					</value>
					<value language="nl">
						<![CDATA[SS2017]]>
					</value>
					<value language="fr">
						<![CDATA[SS2017]]>
					</value>
					<value language="de">
						<![CDATA[SS2017]]>
					</value>
					<value language="sv">
						<![CDATA[SS2017]]>
					</value>
				</string>
			</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>ItemSeason</CVLId>
			<Key>FW2017</Key>
			<Index>5</Index>
			<ParentKey />
			<Value>
				<string>
					<value language="en">
						<![CDATA[FW2017]]>
					</value>
					<value language="nl">
						<![CDATA[FW2017]]>
					</value>
					<value language="fr">
						<![CDATA[FW2017]]>
					</value>
					<value language="de">
						<![CDATA[FW2017]]>
					</value>
					<value language="sv">
						<![CDATA[FW2017]]>
					</value>
				</string>
			</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>ItemStatus</CVLId>
			<Key>new</Key>
			<Index>1</Index>
			<ParentKey />
			<Value>
				<string>
					<value language="en">
						<![CDATA[New]]>
					</value>
					<value language="nl">
						<![CDATA[Nieuw]]>
					</value>
					<value language="fr">
						<![CDATA[Nouveau]]>
					</value>
					<value language="de">
						<![CDATA[Neu]]>
					</value>
					<value language="sv">
						<![CDATA[Ny]]>
					</value>
				</string>
			</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>ItemStatus</CVLId>
			<Key>underenrichment</Key>
			<Index>2</Index>
			<ParentKey />
			<Value>
				<string>
					<value language="en">
						<![CDATA[Under enrichment]]>
					</value>
					<value language="nl">
						<![CDATA[Onder verrijking]]>
					</value>
					<value language="fr">
						<![CDATA[Sous enrichissement]]>
					</value>
					<value language="de">
						<![CDATA[Unter Anreicherung]]>
					</value>
					<value language="sv">
						<![CDATA[Enligt berikning]]>
					</value>
				</string>
			</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>ItemStatus</CVLId>
			<Key>ready</Key>
			<Index>3</Index>
			<ParentKey />
			<Value>
				<string>
					<value language="en">
						<![CDATA[Ready]]>
					</value>
					<value language="nl">
						<![CDATA[Klaar]]>
					</value>
					<value language="fr">
						<![CDATA[Prêt]]>
					</value>
					<value language="de">
						<![CDATA[Bereit]]>
					</value>
					<value language="sv">
						<![CDATA[Redo]]>
					</value>
				</string>
			</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>ItemType</CVLId>
			<Key>Tall</Key>
			<Index>0</Index>
			<ParentKey />
			<Value>Tall</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>ItemType</CVLId>
			<Key>Short</Key>
			<Index>0</Index>
			<ParentKey />
			<Value>Short</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>LawnMowerType</CVLId>
			<Key>pushmowers</Key>
			<Index>0</Index>
			<ParentKey />
			<Value>Push Mower</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>LawnMowerType</CVLId>
			<Key>SelfPropelledMower</Key>
			<Index>1</Index>
			<ParentKey />
			<Value>Self Propelled Mower</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>ManufacturingProductType</CVLId>
			<Key>brakes</Key>
			<Index>4001</Index>
			<ParentKey />
			<Value>
				<string>
					<value language="en">
						<![CDATA[Brakes]]>
					</value>
					<value language="nl">
						<![CDATA[Remmen]]>
					</value>
					<value language="fr">
						<![CDATA[Freins]]>
					</value>
					<value language="de">
						<![CDATA[Bremsen]]>
					</value>
					<value language="sv">
						<![CDATA[Bromsar]]>
					</value>
				</string>
			</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>ManufacturingProductType</CVLId>
			<Key>Lawnmowerbag</Key>
			<Index>4002</Index>
			<ParentKey />
			<Value>
				<string>
					<value language="en">
						<![CDATA[Lawn Mower Bag]]>
					</value>
					<value language="nl">
						<![CDATA[Grasmaaier tas]]>
					</value>
					<value language="fr">
						<![CDATA[Sac de tondeuse à gazon]]>
					</value>
					<value language="de">
						<![CDATA[Rasenmäher-Tasche]]>
					</value>
					<value language="sv">
						<![CDATA[Gräsklipparpåse]]>
					</value>
				</string>
			</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>ManufacturingProductType</CVLId>
			<Key>LiniarActuator</Key>
			<Index>4003</Index>
			<ParentKey />
			<Value>
				<string>
					<value language="en">
						<![CDATA[Linear Actuator]]>
					</value>
					<value language="nl">
						<![CDATA[Lineaire Actuator]]>
					</value>
					<value language="fr">
						<![CDATA[Actionneur linéaire]]>
					</value>
					<value language="de">
						<![CDATA[Linear-Verstellgerät]]>
					</value>
					<value language="sv">
						<![CDATA[Linjära ställdon]]>
					</value>
				</string>
			</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>ManufacturingProductType</CVLId>
			<Key>SolarConnections</Key>
			<Index>4004</Index>
			<ParentKey />
			<Value>
				<string>
					<value language="en">
						<![CDATA[Solar Connections]]>
					</value>
					<value language="nl">
						<![CDATA[Zonne-verbindingen]]>
					</value>
					<value language="fr">
						<![CDATA[Connexions solaires]]>
					</value>
					<value language="de">
						<![CDATA[Solar-Verbindungen]]>
					</value>
					<value language="sv">
						<![CDATA[Solanslutningar]]>
					</value>
				</string>
			</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>ManufacturingProductType</CVLId>
			<Key>Waterheaters</Key>
			<Index>4005</Index>
			<ParentKey />
			<Value>
				<string>
					<value language="en">
						<![CDATA[Water Heaters]]>
					</value>
					<value language="nl">
						<![CDATA[Boilers]]>
					</value>
					<value language="fr">
						<![CDATA[Chauffes-eau]]>
					</value>
					<value language="de">
						<![CDATA[Wasser-Heizungen]]>
					</value>
					<value language="sv">
						<![CDATA[Varmvattenberedare]]>
					</value>
				</string>
			</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>ManufacturingProductType</CVLId>
			<Key>Wheels</Key>
			<Index>4006</Index>
			<ParentKey />
			<Value>
				<string>
					<value language="en">
						<![CDATA[Wheels]]>
					</value>
					<value language="nl">
						<![CDATA[Wielen]]>
					</value>
					<value language="fr">
						<![CDATA[Roues]]>
					</value>
					<value language="de">
						<![CDATA[Räder]]>
					</value>
					<value language="sv">
						<![CDATA[Hjul]]>
					</value>
				</string>
			</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>Market</CVLId>
			<Key>be</Key>
			<Index>1</Index>
			<ParentKey />
			<Value>
				<string>
					<value language="en">
						<![CDATA[Belgium]]>
					</value>
					<value language="nl">
						<![CDATA[België]]>
					</value>
					<value language="fr">
						<![CDATA[Belgique]]>
					</value>
					<value language="de">
						<![CDATA[Belgien]]>
					</value>
					<value language="sv">
						<![CDATA[Belgien]]>
					</value>
				</string>
			</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>Market</CVLId>
			<Key>dk</Key>
			<Index>2</Index>
			<ParentKey />
			<Value>
				<string>
					<value language="en">
						<![CDATA[Denmark]]>
					</value>
					<value language="nl">
						<![CDATA[Denemarken]]>
					</value>
					<value language="fr">
						<![CDATA[Danemark]]>
					</value>
					<value language="de">
						<![CDATA[Dänemark]]>
					</value>
					<value language="sv">
						<![CDATA[Danmark]]>
					</value>
				</string>
			</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>Market</CVLId>
			<Key>fi</Key>
			<Index>3</Index>
			<ParentKey />
			<Value>
				<string>
					<value language="en">
						<![CDATA[Finland]]>
					</value>
					<value language="nl">
						<![CDATA[Finland]]>
					</value>
					<value language="fr">
						<![CDATA[Finlande]]>
					</value>
					<value language="de">
						<![CDATA[Finnland]]>
					</value>
					<value language="sv">
						<![CDATA[Finland]]>
					</value>
				</string>
			</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>Market</CVLId>
			<Key>fr</Key>
			<Index>4</Index>
			<ParentKey />
			<Value>
				<string>
					<value language="en">
						<![CDATA[France]]>
					</value>
					<value language="nl">
						<![CDATA[Frankrijk]]>
					</value>
					<value language="fr">
						<![CDATA[France]]>
					</value>
					<value language="de">
						<![CDATA[Weißrussland]]>
					</value>
					<value language="sv">
						<![CDATA[Frankrike]]>
					</value>
				</string>
			</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>Market</CVLId>
			<Key>de</Key>
			<Index>5</Index>
			<ParentKey />
			<Value>
				<string>
					<value language="en">
						<![CDATA[Germany]]>
					</value>
					<value language="nl">
						<![CDATA[Duitsland]]>
					</value>
					<value language="fr">
						<![CDATA[Allemagne]]>
					</value>
					<value language="de">
						<![CDATA[Deutschland]]>
					</value>
					<value language="sv">
						<![CDATA[Tyskland]]>
					</value>
				</string>
			</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>Market</CVLId>
			<Key>nl</Key>
			<Index>6</Index>
			<ParentKey />
			<Value>
				<string>
					<value language="en">
						<![CDATA[Netherlands]]>
					</value>
					<value language="nl">
						<![CDATA[Nederland]]>
					</value>
					<value language="fr">
						<![CDATA[Pays-Bas]]>
					</value>
					<value language="de">
						<![CDATA[Niederlande]]>
					</value>
					<value language="sv">
						<![CDATA[Nederländerna]]>
					</value>
				</string>
			</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>Market</CVLId>
			<Key>no</Key>
			<Index>7</Index>
			<ParentKey />
			<Value>
				<string>
					<value language="en">
						<![CDATA[Norway]]>
					</value>
					<value language="nl">
						<![CDATA[Noorwegen]]>
					</value>
					<value language="fr">
						<![CDATA[Norvège]]>
					</value>
					<value language="de">
						<![CDATA[Norwegen]]>
					</value>
					<value language="sv">
						<![CDATA[Norge]]>
					</value>
				</string>
			</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>Market</CVLId>
			<Key>se</Key>
			<Index>8</Index>
			<ParentKey />
			<Value>
				<string>
					<value language="en">
						<![CDATA[Sweden]]>
					</value>
					<value language="nl">
						<![CDATA[Zweden]]>
					</value>
					<value language="fr">
						<![CDATA[Suède]]>
					</value>
					<value language="de">
						<![CDATA[Schweden]]>
					</value>
					<value language="sv">
						<![CDATA[Sverige]]>
					</value>
				</string>
			</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>Market</CVLId>
			<Key>gb</Key>
			<Index>9</Index>
			<ParentKey />
			<Value>
				<string>
					<value language="en">
						<![CDATA[United Kingdom]]>
					</value>
					<value language="nl">
						<![CDATA[Verenigd Koninkrijk]]>
					</value>
					<value language="fr">
						<![CDATA[Biélorussie]]>
					</value>
					<value language="de">
						<![CDATA[Vereinigtes Königreich]]>
					</value>
					<value language="sv">
						<![CDATA[Storbritannien]]>
					</value>
				</string>
			</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>Market</CVLId>
			<Key>us</Key>
			<Index>10</Index>
			<ParentKey />
			<Value>
				<string>
					<value language="en">
						<![CDATA[United States]]>
					</value>
					<value language="nl">
						<![CDATA[Verenigde Staten]]>
					</value>
					<value language="fr">
						<![CDATA[Etats-Unis]]>
					</value>
					<value language="de">
						<![CDATA[Vereinigte Staaten von Amerika]]>
					</value>
					<value language="sv">
						<![CDATA[Amerikas Förenta Stater]]>
					</value>
				</string>
			</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>Media</CVLId>
			<Key>image</Key>
			<Index>1</Index>
			<ParentKey />
			<Value>
				<string>
					<value language="en">
						<![CDATA[Image]]>
					</value>
					<value language="nl">
						<![CDATA[Beeld]]>
					</value>
					<value language="fr">
						<![CDATA[Image]]>
					</value>
					<value language="de">
						<![CDATA[Bild]]>
					</value>
					<value language="sv">
						<![CDATA[Bild]]>
					</value>
				</string>
			</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>Media</CVLId>
			<Key>video</Key>
			<Index>2</Index>
			<ParentKey />
			<Value>
				<string>
					<value language="en">
						<![CDATA[Video]]>
					</value>
					<value language="nl">
						<![CDATA[Video]]>
					</value>
					<value language="fr">
						<![CDATA[Vidéo]]>
					</value>
					<value language="de">
						<![CDATA[Video]]>
					</value>
					<value language="sv">
						<![CDATA[Video]]>
					</value>
				</string>
			</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>Media</CVLId>
			<Key>datasheet</Key>
			<Index>3</Index>
			<ParentKey />
			<Value>
				<string>
					<value language="en">
						<![CDATA[Data sheet]]>
					</value>
					<value language="nl">
						<![CDATA[Data papier]]>
					</value>
					<value language="fr">
						<![CDATA[Fiche de données]]>
					</value>
					<value language="de">
						<![CDATA[Datenblatt]]>
					</value>
					<value language="sv">
						<![CDATA[Datablad]]>
					</value>
				</string>
			</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>Media</CVLId>
			<Key>PDF</Key>
			<Index>4</Index>
			<ParentKey />
			<Value>
				<string>
					<value language="en">
						<![CDATA[PDF]]>
					</value>
					<value language="nl">
						<![CDATA[PDF]]>
					</value>
					<value language="fr">
						<![CDATA[PDF]]>
					</value>
					<value language="de">
						<![CDATA[PDF]]>
					</value>
					<value language="sv">
						<![CDATA[PDF]]>
					</value>
				</string>
			</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>MediaChannel</CVLId>
			<Key>SocialPintrest</Key>
			<Index>0</Index>
			<ParentKey />
			<Value>Pintrest</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>MediaChannel</CVLId>
			<Key>SocialFacebook</Key>
			<Index>0</Index>
			<ParentKey />
			<Value>Facebook</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>MediaChannel</CVLId>
			<Key>SocialInstagram</Key>
			<Index>0</Index>
			<ParentKey />
			<Value>Instagram</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>MediaChannel</CVLId>
			<Key>SocialTwitter</Key>
			<Index>0</Index>
			<ParentKey />
			<Value>Twitter</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>MediaChannel</CVLId>
			<Key>AD</Key>
			<Index>1</Index>
			<ParentKey />
			<Value>Ad</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>MediaChannel</CVLId>
			<Key>Brochure</Key>
			<Index>2</Index>
			<ParentKey />
			<Value>Brochure</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>MediaChannel</CVLId>
			<Key>Email</Key>
			<Index>3</Index>
			<ParentKey />
			<Value>E-mail </Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>MediaChannel</CVLId>
			<Key>EmailBlast</Key>
			<Index>4</Index>
			<ParentKey />
			<Value>Email blast</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>MediaChannel</CVLId>
			<Key>EmailWeekly</Key>
			<Index>5</Index>
			<ParentKey />
			<Value>Email weekly</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>MediaChannel</CVLId>
			<Key>Flyer</Key>
			<Index>6</Index>
			<ParentKey />
			<Value>Flyer </Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>MediaChannel</CVLId>
			<Key>Giftcard</Key>
			<Index>7</Index>
			<ParentKey />
			<Value>Gift card</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>MediaChannel</CVLId>
			<Key>Youtube</Key>
			<Index>8</Index>
			<ParentKey />
			<Value>Youtube</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>MediaChannel</CVLId>
			<Key>Onlineflyer</Key>
			<Index>8</Index>
			<ParentKey />
			<Value>Online flyer</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>MediaChannel</CVLId>
			<Key>Postcard</Key>
			<Index>9</Index>
			<ParentKey />
			<Value>Postcard</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>MediaChannel</CVLId>
			<Key>SMS</Key>
			<Index>10</Index>
			<ParentKey />
			<Value>SMS</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>MediaChannel</CVLId>
			<Key>Store</Key>
			<Index>11</Index>
			<ParentKey />
			<Value>Store</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>MediaChannel</CVLId>
			<Key>Window</Key>
			<Index>12</Index>
			<ParentKey />
			<Value>Window</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>MediaChannel</CVLId>
			<Key>www</Key>
			<Index>13</Index>
			<ParentKey />
			<Value>Web site </Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>MediaChannel</CVLId>
			<Key>Magazine</Key>
			<Index>14</Index>
			<ParentKey />
			<Value>Magazine</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>MediaChannel</CVLId>
			<Key>TelevisionAdvertising</Key>
			<Index>15</Index>
			<ParentKey />
			<Value>Television advertising</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>MediaChannelStatus</CVLId>
			<Key>Draft</Key>
			<Index>1</Index>
			<ParentKey />
			<Value>Draft</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>MediaChannelStatus</CVLId>
			<Key>Confirmed</Key>
			<Index>2</Index>
			<ParentKey />
			<Value>Confirmed</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>MediaChannelStatus</CVLId>
			<Key>Development</Key>
			<Index>3</Index>
			<ParentKey />
			<Value>Development</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>MediaChannelStatus</CVLId>
			<Key>Production</Key>
			<Index>4</Index>
			<ParentKey />
			<Value>Production</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>MediaChannelStatus</CVLId>
			<Key>Completed</Key>
			<Index>4</Index>
			<ParentKey />
			<Value>Completed</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>MediaChannelStatus</CVLId>
			<Key>Cancelled</Key>
			<Index>5</Index>
			<ParentKey />
			<Value>Cancelled</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>MediaChannelStatus</CVLId>
			<Key>Framework</Key>
			<Index>6</Index>
			<ParentKey />
			<Value>Planning framework</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>MediaChannelTargetGroup</CVLId>
			<Key>TargetGroup1</Key>
			<Index>0</Index>
			<ParentKey />
			<Value>Target Group 1</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>MediaChannelTargetGroup</CVLId>
			<Key>TargetGroup2</Key>
			<Index>1</Index>
			<ParentKey />
			<Value>Target Group 2</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>MediaType</CVLId>
			<Key>product</Key>
			<Index>1</Index>
			<ParentKey>image</ParentKey>
			<Value>
				<string>
					<value language="en">
						<![CDATA[Product]]>
					</value>
					<value language="nl">
						<![CDATA[Product]]>
					</value>
					<value language="fr">
						<![CDATA[Produit]]>
					</value>
					<value language="de">
						<![CDATA[Produkt]]>
					</value>
					<value language="sv">
						<![CDATA[Produkt]]>
					</value>
				</string>
			</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>MediaType</CVLId>
			<Key>environment</Key>
			<Index>2</Index>
			<ParentKey>image</ParentKey>
			<Value>
				<string>
					<value language="en">
						<![CDATA[Environment]]>
					</value>
					<value language="nl">
						<![CDATA[Milieu]]>
					</value>
					<value language="fr">
						<![CDATA[Environnement]]>
					</value>
					<value language="de">
						<![CDATA[Umgebung]]>
					</value>
					<value language="sv">
						<![CDATA[Miljö]]>
					</value>
				</string>
			</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>MediaType</CVLId>
			<Key>howto</Key>
			<Index>3</Index>
			<ParentKey>datasheet</ParentKey>
			<Value>
				<string>
					<value language="en">
						<![CDATA[How to use]]>
					</value>
					<value language="nl">
						<![CDATA[Hoe te gebruiken]]>
					</value>
					<value language="fr">
						<![CDATA[Mode d'emploi]]>
					</value>
					<value language="de">
						<![CDATA[Verwendung]]>
					</value>
					<value language="sv">
						<![CDATA[Hur man använder]]>
					</value>
				</string>
			</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>MediaType</CVLId>
			<Key>Lifestyle</Key>
			<Index>3</Index>
			<ParentKey />
			<Value>
				<string>
					<value language="en">
						<![CDATA[Lifestyle]]>
					</value>
					<value language="nl">
						<![CDATA[Levensstijl]]>
					</value>
					<value language="fr">
						<![CDATA[Mode de vie]]>
					</value>
					<value language="de">
						<![CDATA[Lebensstil]]>
					</value>
					<value language="sv">
						<![CDATA[Livsstil]]>
					</value>
				</string>
			</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>MediaType</CVLId>
			<Key>model</Key>
			<Index>4</Index>
			<ParentKey />
			<Value>
				<string>
					<value language="en">
						<![CDATA[On model]]>
					</value>
					<value language="nl">
						<![CDATA[Op model]]>
					</value>
					<value language="fr">
						<![CDATA[Sur le modèle]]>
					</value>
					<value language="de">
						<![CDATA[Am Modell]]>
					</value>
					<value language="sv">
						<![CDATA[På modell]]>
					</value>
				</string>
			</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>MediaType</CVLId>
			<Key>SafetySheet</Key>
			<Index>6</Index>
			<ParentKey />
			<Value>
				<string>
					<value language="en">
						<![CDATA[Safety Sheet]]>
					</value>
					<value language="nl">
						<![CDATA[Safety Sheet]]>
					</value>
					<value language="fr">
						<![CDATA[Fiche de sécurité]]>
					</value>
					<value language="de">
						<![CDATA[Sicherheitsdatenblatt]]>
					</value>
					<value language="sv">
						<![CDATA[Säkerhetsdatablad]]>
					</value>
				</string>
			</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>MediaType</CVLId>
			<Key>sketch</Key>
			<Index>7</Index>
			<ParentKey />
			<Value>
				<string>
					<value language="en">
						<![CDATA[Sketch]]>
					</value>
					<value language="nl">
						<![CDATA[Schetsen]]>
					</value>
					<value language="fr">
						<![CDATA[Croquis]]>
					</value>
					<value language="de">
						<![CDATA[Skizze]]>
					</value>
					<value language="sv">
						<![CDATA[Skiss]]>
					</value>
				</string>
			</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>MediaType</CVLId>
			<Key>Warranty</Key>
			<Index>8</Index>
			<ParentKey />
			<Value>
				<string>
					<value language="en">
						<![CDATA[Warranty]]>
					</value>
					<value language="nl">
						<![CDATA[Garantie]]>
					</value>
					<value language="fr">
						<![CDATA[Garantie]]>
					</value>
					<value language="de">
						<![CDATA[Garantie]]>
					</value>
					<value language="sv">
						<![CDATA[Garanti]]>
					</value>
				</string>
			</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>MediaType</CVLId>
			<Key>na</Key>
			<Index>100</Index>
			<ParentKey />
			<Value>
				<string>
					<value language="en">
						<![CDATA[N/A]]>
					</value>
					<value language="nl">
						<![CDATA[N / A]]>
					</value>
					<value language="fr">
						<![CDATA[N/A]]>
					</value>
					<value language="de">
						<![CDATA[k. A.]]>
					</value>
					<value language="sv">
						<![CDATA[N / A]]>
					</value>
				</string>
			</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>Milestone</CVLId>
			<Key>Copy</Key>
			<Index>1</Index>
			<ParentKey />
			<Value>Copy</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>Milestone</CVLId>
			<Key>Editimages</Key>
			<Index>2</Index>
			<ParentKey />
			<Value>Edit images</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>Milestone</CVLId>
			<Key>Imageapproval</Key>
			<Index>3</Index>
			<ParentKey />
			<Value>Image approval</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>Milestone</CVLId>
			<Key>Imageproduction</Key>
			<Index>4</Index>
			<ParentKey />
			<Value>Image production</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>Milestone</CVLId>
			<Key>Meeting</Key>
			<Index>5</Index>
			<ParentKey />
			<Value>Meeting</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>Milestone</CVLId>
			<Key>Movieapproval</Key>
			<Index>6</Index>
			<ParentKey />
			<Value>Movie approval</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>Milestone</CVLId>
			<Key>Movieproduction</Key>
			<Index>7</Index>
			<ParentKey />
			<Value>Movie production</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>Milestone</CVLId>
			<Key>Preparation</Key>
			<Index>8</Index>
			<ParentKey />
			<Value>Preparation</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>Milestone</CVLId>
			<Key>Seasonalmeeting</Key>
			<Index>9</Index>
			<ParentKey />
			<Value>Seasonal meeting</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>Milestone</CVLId>
			<Key>Strategicplanning</Key>
			<Index>10</Index>
			<ParentKey />
			<Value>Strategic planning</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>Milestone</CVLId>
			<Key>workshop</Key>
			<Index>11</Index>
			<ParentKey />
			<Value>Workshop</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>MilestoneResponsibleRole</CVLId>
			<Key>Coordinator</Key>
			<Index>1</Index>
			<ParentKey />
			<Value>Coordinator</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>MilestoneResponsibleRole</CVLId>
			<Key>Copywriter</Key>
			<Index>2</Index>
			<ParentKey />
			<Value>Copywriter</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>MilestoneResponsibleRole</CVLId>
			<Key>CRMspecialist</Key>
			<Index>3</Index>
			<ParentKey />
			<Value>CRM specialist</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>MilestoneResponsibleRole</CVLId>
			<Key>Digitalexecutive</Key>
			<Index>4</Index>
			<ParentKey />
			<Value>Digital executive</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>MilestoneResponsibleRole</CVLId>
			<Key>Marketresponsible</Key>
			<Index>5</Index>
			<ParentKey />
			<Value>Market Responsible</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>MilestoneResponsibleRole</CVLId>
			<Key>Productcopy</Key>
			<Index>7</Index>
			<ParentKey />
			<Value>Product copy</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>MilestoneResponsibleRole</CVLId>
			<Key>Productionplanner</Key>
			<Index>8</Index>
			<ParentKey />
			<Value>Production Planner</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>MilestoneResponsibleRole</CVLId>
			<Key>Projectexecutive</Key>
			<Index>9</Index>
			<ParentKey />
			<Value>Project executive</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>MilestoneResponsibleRole</CVLId>
			<Key>Seniordesigner</Key>
			<Index>10</Index>
			<ParentKey />
			<Value>Senior designer</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>MilestoneResponsibleRole</CVLId>
			<Key>Socialmediaexecutive</Key>
			<Index>11</Index>
			<ParentKey />
			<Value>Social media executive</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>MilestoneResponsibleRole</CVLId>
			<Key>Webdesigner</Key>
			<Index>12</Index>
			<ParentKey />
			<Value>Web designer</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>MilestoneResponsibleRole</CVLId>
			<Key>Webmaster</Key>
			<Index>13</Index>
			<ParentKey />
			<Value>Web master</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>MilestoneStatus</CVLId>
			<Key>Draft</Key>
			<Index>0</Index>
			<ParentKey />
			<Value>Draft</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>MilestoneStatus</CVLId>
			<Key>New</Key>
			<Index>1</Index>
			<ParentKey />
			<Value>New</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>MilestoneStatus</CVLId>
			<Key>Ongoing</Key>
			<Index>2</Index>
			<ParentKey />
			<Value>Ongoing</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>MilestoneStatus</CVLId>
			<Key>Complete</Key>
			<Index>3</Index>
			<ParentKey />
			<Value>Complete</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>MilestoneStatus</CVLId>
			<Key>Final</Key>
			<Index>4</Index>
			<ParentKey />
			<Value>Final</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>MilestoneStatus</CVLId>
			<Key>Cancelled</Key>
			<Index>5</Index>
			<ParentKey />
			<Value>Cancelled</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>MilestoneType</CVLId>
			<Key>Planning</Key>
			<Index>0</Index>
			<ParentKey />
			<Value>Planning</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>MilestoneType</CVLId>
			<Key>Development</Key>
			<Index>2</Index>
			<ParentKey />
			<Value>Development</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>MilestoneType</CVLId>
			<Key>Preproduction</Key>
			<Index>3</Index>
			<ParentKey />
			<Value>Pre-production</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>MilestoneType</CVLId>
			<Key>Production</Key>
			<Index>4</Index>
			<ParentKey />
			<Value>Production</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>Month</CVLId>
			<Key>1</Key>
			<Index>1</Index>
			<ParentKey />
			<Value>January</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>Month</CVLId>
			<Key>2</Key>
			<Index>2</Index>
			<ParentKey />
			<Value>February</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>Month</CVLId>
			<Key>3</Key>
			<Index>3</Index>
			<ParentKey />
			<Value>March</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>Month</CVLId>
			<Key>4</Key>
			<Index>4</Index>
			<ParentKey />
			<Value>April</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>Month</CVLId>
			<Key>5</Key>
			<Index>5</Index>
			<ParentKey />
			<Value>May</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>Month</CVLId>
			<Key>6</Key>
			<Index>6</Index>
			<ParentKey />
			<Value>June</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>Month</CVLId>
			<Key>7</Key>
			<Index>7</Index>
			<ParentKey />
			<Value>July</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>Month</CVLId>
			<Key>8</Key>
			<Index>8</Index>
			<ParentKey />
			<Value>August</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>Month</CVLId>
			<Key>9</Key>
			<Index>9</Index>
			<ParentKey />
			<Value>September</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>Month</CVLId>
			<Key>10</Key>
			<Index>10</Index>
			<ParentKey />
			<Value>October</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>Month</CVLId>
			<Key>11</Key>
			<Index>11</Index>
			<ParentKey />
			<Value>November</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>Month</CVLId>
			<Key>12</Key>
			<Index>12</Index>
			<ParentKey />
			<Value>December</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>ProductStatus</CVLId>
			<Key>new</Key>
			<Index>1</Index>
			<ParentKey />
			<Value>
				<string>
					<value language="en">
						<![CDATA[New]]>
					</value>
					<value language="nl">
						<![CDATA[Nieuw]]>
					</value>
					<value language="fr">
						<![CDATA[Nouveau]]>
					</value>
					<value language="de">
						<![CDATA[Neu]]>
					</value>
					<value language="sv">
						<![CDATA[Ny]]>
					</value>
				</string>
			</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>ProductStatus</CVLId>
			<Key>underenrichment</Key>
			<Index>2</Index>
			<ParentKey />
			<Value>
				<string>
					<value language="en">
						<![CDATA[Under enrichment]]>
					</value>
					<value language="nl">
						<![CDATA[Onder verrijking]]>
					</value>
					<value language="fr">
						<![CDATA[Sous enrichissement]]>
					</value>
					<value language="de">
						<![CDATA[Unter Anreicherung]]>
					</value>
					<value language="sv">
						<![CDATA[Under berikning]]>
					</value>
				</string>
			</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>ProductStatus</CVLId>
			<Key>Redyforpublish</Key>
			<Index>5</Index>
			<ParentKey />
			<Value>
				<string>
					<value language="en">
						<![CDATA[Ready to Publish]]>
					</value>
					<value language="nl">
						<![CDATA[Klaar om te publiceren]]>
					</value>
					<value language="fr">
						<![CDATA[Prêt pour la publication]]>
					</value>
					<value language="de">
						<![CDATA[Jetzt veröffentlicht]]>
					</value>
					<value language="sv">
						<![CDATA[Färdig för publicering]]>
					</value>
				</string>
			</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>ProductStatus</CVLId>
			<Key>Archived</Key>
			<Index>6</Index>
			<ParentKey />
			<Value>
				<string>
					<value language="en">
						<![CDATA[Archived]]>
					</value>
					<value language="nl">
						<![CDATA[Gearchiveerd]]>
					</value>
					<value language="fr">
						<![CDATA[Archivée]]>
					</value>
					<value language="de">
						<![CDATA[Archiviert]]>
					</value>
					<value language="sv">
						<![CDATA[Arkiverad]]>
					</value>
				</string>
			</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>PromotionOffer</CVLId>
			<Key>pricedeal20off</Key>
			<Index>1</Index>
			<ParentKey />
			<Value>20% off</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>PromotionOffer</CVLId>
			<Key>pricedeal25off</Key>
			<Index>2</Index>
			<ParentKey />
			<Value>25% off</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>PromotionOffer</CVLId>
			<Key>pricedeal30off</Key>
			<Index>3</Index>
			<ParentKey />
			<Value>30% off</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>PromotionOffer</CVLId>
			<Key>pricedeal40off</Key>
			<Index>4</Index>
			<ParentKey />
			<Value>40% off</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>PromotionOffer</CVLId>
			<Key>pricedeal50off</Key>
			<Index>5</Index>
			<ParentKey />
			<Value>50% off</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>PromotionOffer</CVLId>
			<Key>christmas</Key>
			<Index>6</Index>
			<ParentKey />
			<Value>Christmas special</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>PromotionOffer</CVLId>
			<Key>cybermonday</Key>
			<Index>7</Index>
			<ParentKey />
			<Value>Cyber Monday</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>PromotionOffer</CVLId>
			<Key>blackfriday</Key>
			<Index>8</Index>
			<ParentKey />
			<Value>Black Friday</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>PromotionOffer</CVLId>
			<Key>3for2</Key>
			<Index>9</Index>
			<ParentKey />
			<Value>3 for 2 on</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>PromotionOffer</CVLId>
			<Key>freeshipping</Key>
			<Index>10</Index>
			<ParentKey />
			<Value>Free shipping</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>PromotionRestriction</CVLId>
			<Key>Accessories</Key>
			<Index>1</Index>
			<ParentKey />
			<Value>Accessories</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>PromotionRestriction</CVLId>
			<Key>Baby</Key>
			<Index>2</Index>
			<ParentKey />
			<Value>Baby</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>PromotionRestriction</CVLId>
			<Key>Kidswear</Key>
			<Index>3</Index>
			<ParentKey />
			<Value>Kids wear</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>PromotionRestriction</CVLId>
			<Key>Outerwear</Key>
			<Index>4</Index>
			<ParentKey />
			<Value>Outerwear</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>PromotionRestriction</CVLId>
			<Key>Pants</Key>
			<Index>5</Index>
			<ParentKey />
			<Value>Pants</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>PromotionRestriction</CVLId>
			<Key>Sport</Key>
			<Index>6</Index>
			<ParentKey />
			<Value>Sport</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>PromotionRestriction</CVLId>
			<Key>Sweaters</Key>
			<Index>7</Index>
			<ParentKey />
			<Value>Sweathers</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>PromotionRestriction</CVLId>
			<Key>Tops</Key>
			<Index>8</Index>
			<ParentKey />
			<Value>Tops </Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>PromotionRestriction</CVLId>
			<Key>Trousers</Key>
			<Index>9</Index>
			<ParentKey />
			<Value>Trousers</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>PromotionRestriction</CVLId>
			<Key>Womenwear</Key>
			<Index>9</Index>
			<ParentKey />
			<Value>Womens wear</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>PromotionStatus</CVLId>
			<Key>Draft</Key>
			<Index>1</Index>
			<ParentKey />
			<Value>Draft</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>PromotionStatus</CVLId>
			<Key>Confirmed</Key>
			<Index>2</Index>
			<ParentKey />
			<Value>Confirmed</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>PromotionStatus</CVLId>
			<Key>Development</Key>
			<Index>3</Index>
			<ParentKey />
			<Value>Development</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>PromotionStatus</CVLId>
			<Key>Production</Key>
			<Index>4</Index>
			<ParentKey />
			<Value>Production</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>PromotionStatus</CVLId>
			<Key>Completed</Key>
			<Index>4</Index>
			<ParentKey />
			<Value>Completed</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>PromotionStatus</CVLId>
			<Key>Cancelled</Key>
			<Index>5</Index>
			<ParentKey />
			<Value>Cancelled</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>PromotionStatus</CVLId>
			<Key>Framework</Key>
			<Index>6</Index>
			<ParentKey />
			<Value>Planning framework</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>Quarter</CVLId>
			<Key>Q1</Key>
			<Index>0</Index>
			<ParentKey />
			<Value>Q1</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>Quarter</CVLId>
			<Key>Q2</Key>
			<Index>1</Index>
			<ParentKey />
			<Value>Q2</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>Quarter</CVLId>
			<Key>Q3</Key>
			<Index>2</Index>
			<ParentKey />
			<Value>Q3</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>Quarter</CVLId>
			<Key>Q4</Key>
			<Index>3</Index>
			<ParentKey />
			<Value>Q4</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>RegionUsage</CVLId>
			<Key>APAC</Key>
			<Index>0</Index>
			<ParentKey />
			<Value>APAC</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>RegionUsage</CVLId>
			<Key>EMEA</Key>
			<Index>1</Index>
			<ParentKey />
			<Value>EMEA</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>RegionUsage</CVLId>
			<Key>SouthAmerica</Key>
			<Index>2</Index>
			<ParentKey />
			<Value>South America</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>RegionUsage</CVLId>
			<Key>NorthAmerica</Key>
			<Index>3</Index>
			<ParentKey />
			<Value>North America</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>ResourceApproval</CVLId>
			<Key>New</Key>
			<Index>0</Index>
			<ParentKey />
			<Value>New</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>ResourceApproval</CVLId>
			<Key>Pending</Key>
			<Index>0</Index>
			<ParentKey />
			<Value>Pending</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>ResourceApproval</CVLId>
			<Key>InProgress</Key>
			<Index>0</Index>
			<ParentKey />
			<Value>In Progress</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>ResourceApproval</CVLId>
			<Key>Approved</Key>
			<Index>0</Index>
			<ParentKey />
			<Value>Approved</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>SourceMedia</CVLId>
			<Key>Corbis</Key>
			<Index>1</Index>
			<ParentKey />
			<Value>Corbis</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>SourceMedia</CVLId>
			<Key>iStock</Key>
			<Index>2</Index>
			<ParentKey />
			<Value>iStock</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>SourceMediaType</CVLId>
			<Key>Travel</Key>
			<Index>1</Index>
			<ParentKey />
			<Value>Travel</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>SourceMediaType</CVLId>
			<Key>LifeStyle</Key>
			<Index>2</Index>
			<ParentKey />
			<Value>Life Style</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>SourceMediaType</CVLId>
			<Key>Home</Key>
			<Index>3</Index>
			<ParentKey />
			<Value>Home</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>SourceMediaType</CVLId>
			<Key>Pets</Key>
			<Index>4</Index>
			<ParentKey />
			<Value>Pets</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>StaffName</CVLId>
			<Key>joedoe</Key>
			<Index>0</Index>
			<ParentKey />
			<Value>Joe Doe</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>StaffName</CVLId>
			<Key>jamessmith</Key>
			<Index>0</Index>
			<ParentKey />
			<Value>James Smith</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>StaffName</CVLId>
			<Key>michaelwilliams</Key>
			<Index>0</Index>
			<ParentKey />
			<Value>Michael Williams</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>StaffName</CVLId>
			<Key>maryjohnson</Key>
			<Index>0</Index>
			<ParentKey />
			<Value>Mary Johnson</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>StaffRole</CVLId>
			<Key>Seniordesigner</Key>
			<Index>1</Index>
			<ParentKey />
			<Value>Senior designer</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>StaffRole</CVLId>
			<Key>Copywriter</Key>
			<Index>2</Index>
			<ParentKey />
			<Value>Copywriter</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>StaffRole</CVLId>
			<Key>Corporatestylist</Key>
			<Index>3</Index>
			<ParentKey />
			<Value>Corporate stylist</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>StaffRole</CVLId>
			<Key>Productionartist</Key>
			<Index>4</Index>
			<ParentKey />
			<Value>Production artist</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>StaffRole</CVLId>
			<Key>Webdesigner</Key>
			<Index>5</Index>
			<ParentKey />
			<Value>Web designer</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>StaffRole</CVLId>
			<Key>Webmaster</Key>
			<Index>6</Index>
			<ParentKey />
			<Value>Web master</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>TaskStatus</CVLId>
			<Key>new</Key>
			<Index>0</Index>
			<ParentKey />
			<Value>New</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>TaskStatus</CVLId>
			<Key>ongoing</Key>
			<Index>1</Index>
			<ParentKey />
			<Value>Ongoing</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>TaskStatus</CVLId>
			<Key>resolved</Key>
			<Index>2</Index>
			<ParentKey />
			<Value>Resolved</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>TaskStatus</CVLId>
			<Key>rejected</Key>
			<Index>3</Index>
			<ParentKey />
			<Value>Rejected</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>TaskStatus</CVLId>
			<Key>closed</Key>
			<Index>4</Index>
			<ParentKey />
			<Value>Closed</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>TaskStatus</CVLId>
			<Key>reopened</Key>
			<Index>5</Index>
			<ParentKey />
			<Value>Reopened</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>Territory</CVLId>
			<Key>NorthAmerica</Key>
			<Index>1</Index>
			<ParentKey />
			<Value>North America</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>Territory</CVLId>
			<Key>EMEA</Key>
			<Index>2</Index>
			<ParentKey />
			<Value>EMEA</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>Territory</CVLId>
			<Key>APAC</Key>
			<Index>3</Index>
			<ParentKey />
			<Value>APAC</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>Territory</CVLId>
			<Key>SouthAmerica</Key>
			<Index>4</Index>
			<ParentKey />
			<Value>South America</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>Unit</CVLId>
			<Key>Nm</Key>
			<Index>0</Index>
			<ParentKey />
			<Value>Nm</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>Unit</CVLId>
			<Key>gram</Key>
			<Index>0</Index>
			<ParentKey />
			<Value>g</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>Unit</CVLId>
			<Key>kJ</Key>
			<Index>0</Index>
			<ParentKey />
			<Value>kJ</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>Unit</CVLId>
			<Key>kcal</Key>
			<Index>0</Index>
			<ParentKey />
			<Value>kcal</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>Unit</CVLId>
			<Key>psi</Key>
			<Index>0</Index>
			<ParentKey />
			<Value>PSI</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>Unit</CVLId>
			<Key>inches</Key>
			<Index>0</Index>
			<ParentKey />
			<Value>inches</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>Unit</CVLId>
			<Key>hours</Key>
			<Index>0</Index>
			<ParentKey />
			<Value>hours</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>Unit</CVLId>
			<Key>gr</Key>
			<Index>0</Index>
			<ParentKey />
			<Value>gr</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>Unit</CVLId>
			<Key>ohm</Key>
			<Index>0</Index>
			<ParentKey />
			<Value>ohm</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>Unit</CVLId>
			<Key>Power</Key>
			<Index>0</Index>
			<ParentKey />
			<Value>W</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>Unit</CVLId>
			<Key>ms2</Key>
			<Index>0</Index>
			<ParentKey />
			<Value>m/s²</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>Unit</CVLId>
			<Key>millimeter</Key>
			<Index>0</Index>
			<ParentKey />
			<Value>mm</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>Unit</CVLId>
			<Key>capacity</Key>
			<Index>0</Index>
			<ParentKey />
			<Value>lbs</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>Unit</CVLId>
			<Key>kilogram</Key>
			<Index>0</Index>
			<ParentKey />
			<Value>kg</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>Unit</CVLId>
			<Key>voltage</Key>
			<Index>0</Index>
			<ParentKey />
			<Value>V</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>Unit</CVLId>
			<Key>rpm</Key>
			<Index>0</Index>
			<ParentKey />
			<Value>rpm</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>Unit</CVLId>
			<Key>milligram</Key>
			<Index>0</Index>
			<ParentKey />
			<Value>mg</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>Unit</CVLId>
			<Key>microgram</Key>
			<Index>0</Index>
			<ParentKey />
			<Value>μg</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>UsageRightsByChannel</CVLId>
			<Key>Print</Key>
			<Index>1</Index>
			<ParentKey />
			<Value>Print</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>UsageRightsByChannel</CVLId>
			<Key>Web</Key>
			<Index>2</Index>
			<ParentKey />
			<Value>Web</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>UsageRightsByChannel</CVLId>
			<Key>Social</Key>
			<Index>3</Index>
			<ParentKey />
			<Value>Social</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>UsageRightsByChannel</CVLId>
			<Key>Mobile</Key>
			<Index>4</Index>
			<ParentKey />
			<Value>Mobile</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>Weeks</CVLId>
			<Key>1</Key>
			<Index>1</Index>
			<ParentKey />
			<Value>1</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>Weeks</CVLId>
			<Key>2</Key>
			<Index>2</Index>
			<ParentKey />
			<Value>2</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>Weeks</CVLId>
			<Key>3</Key>
			<Index>3</Index>
			<ParentKey />
			<Value>3</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>Weeks</CVLId>
			<Key>4</Key>
			<Index>4</Index>
			<ParentKey />
			<Value>4</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>Weeks</CVLId>
			<Key>5</Key>
			<Index>5</Index>
			<ParentKey />
			<Value>5</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>Weeks</CVLId>
			<Key>6</Key>
			<Index>6</Index>
			<ParentKey />
			<Value>6</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>Weeks</CVLId>
			<Key>7</Key>
			<Index>7</Index>
			<ParentKey />
			<Value>7</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>Weeks</CVLId>
			<Key>8</Key>
			<Index>8</Index>
			<ParentKey />
			<Value>8</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>Weeks</CVLId>
			<Key>9</Key>
			<Index>9</Index>
			<ParentKey />
			<Value>9</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>Weeks</CVLId>
			<Key>10</Key>
			<Index>10</Index>
			<ParentKey />
			<Value>10</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>Weeks</CVLId>
			<Key>11</Key>
			<Index>11</Index>
			<ParentKey />
			<Value>11</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>Weeks</CVLId>
			<Key>12</Key>
			<Index>12</Index>
			<ParentKey />
			<Value>12</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>Weeks</CVLId>
			<Key>13</Key>
			<Index>13</Index>
			<ParentKey />
			<Value>13</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>Weeks</CVLId>
			<Key>14</Key>
			<Index>14</Index>
			<ParentKey />
			<Value>14</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>Weeks</CVLId>
			<Key>15</Key>
			<Index>15</Index>
			<ParentKey />
			<Value>15</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>Weeks</CVLId>
			<Key>16</Key>
			<Index>16</Index>
			<ParentKey />
			<Value>16</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>Weeks</CVLId>
			<Key>17</Key>
			<Index>17</Index>
			<ParentKey />
			<Value>17</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>Weeks</CVLId>
			<Key>18</Key>
			<Index>18</Index>
			<ParentKey />
			<Value>18</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>Weeks</CVLId>
			<Key>19</Key>
			<Index>19</Index>
			<ParentKey />
			<Value>19</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>Weeks</CVLId>
			<Key>20</Key>
			<Index>20</Index>
			<ParentKey />
			<Value>20</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>Weeks</CVLId>
			<Key>21</Key>
			<Index>21</Index>
			<ParentKey />
			<Value>21</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>Weeks</CVLId>
			<Key>22</Key>
			<Index>22</Index>
			<ParentKey />
			<Value>22</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>Weeks</CVLId>
			<Key>23</Key>
			<Index>23</Index>
			<ParentKey />
			<Value>23</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>Weeks</CVLId>
			<Key>24</Key>
			<Index>24</Index>
			<ParentKey />
			<Value>24</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>Weeks</CVLId>
			<Key>25</Key>
			<Index>25</Index>
			<ParentKey />
			<Value>25</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>Weeks</CVLId>
			<Key>26</Key>
			<Index>26</Index>
			<ParentKey />
			<Value>26</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>Weeks</CVLId>
			<Key>27</Key>
			<Index>27</Index>
			<ParentKey />
			<Value>27</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>Weeks</CVLId>
			<Key>28</Key>
			<Index>28</Index>
			<ParentKey />
			<Value>28</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>Weeks</CVLId>
			<Key>29</Key>
			<Index>29</Index>
			<ParentKey />
			<Value>29</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>Weeks</CVLId>
			<Key>30</Key>
			<Index>30</Index>
			<ParentKey />
			<Value>30</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>Weeks</CVLId>
			<Key>31</Key>
			<Index>31</Index>
			<ParentKey />
			<Value>31</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>Weeks</CVLId>
			<Key>32</Key>
			<Index>32</Index>
			<ParentKey />
			<Value>32</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>Weeks</CVLId>
			<Key>33</Key>
			<Index>33</Index>
			<ParentKey />
			<Value>33</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>Weeks</CVLId>
			<Key>34</Key>
			<Index>34</Index>
			<ParentKey />
			<Value>34</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>Weeks</CVLId>
			<Key>35</Key>
			<Index>35</Index>
			<ParentKey />
			<Value>35</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>Weeks</CVLId>
			<Key>36</Key>
			<Index>36</Index>
			<ParentKey />
			<Value>36</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>Weeks</CVLId>
			<Key>37</Key>
			<Index>37</Index>
			<ParentKey />
			<Value>37</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>Weeks</CVLId>
			<Key>38</Key>
			<Index>38</Index>
			<ParentKey />
			<Value>38</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>Weeks</CVLId>
			<Key>39</Key>
			<Index>39</Index>
			<ParentKey />
			<Value>39</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>Weeks</CVLId>
			<Key>40</Key>
			<Index>40</Index>
			<ParentKey />
			<Value>40</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>Weeks</CVLId>
			<Key>41</Key>
			<Index>41</Index>
			<ParentKey />
			<Value>41</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>Weeks</CVLId>
			<Key>42</Key>
			<Index>42</Index>
			<ParentKey />
			<Value>42</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>Weeks</CVLId>
			<Key>43</Key>
			<Index>43</Index>
			<ParentKey />
			<Value>43</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>Weeks</CVLId>
			<Key>44</Key>
			<Index>44</Index>
			<ParentKey />
			<Value>44</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>Weeks</CVLId>
			<Key>45</Key>
			<Index>45</Index>
			<ParentKey />
			<Value>45</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>Weeks</CVLId>
			<Key>46</Key>
			<Index>46</Index>
			<ParentKey />
			<Value>46</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>Weeks</CVLId>
			<Key>47</Key>
			<Index>47</Index>
			<ParentKey />
			<Value>47</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>Weeks</CVLId>
			<Key>48</Key>
			<Index>48</Index>
			<ParentKey />
			<Value>48</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>Weeks</CVLId>
			<Key>49</Key>
			<Index>49</Index>
			<ParentKey />
			<Value>49</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>Weeks</CVLId>
			<Key>50</Key>
			<Index>50</Index>
			<ParentKey />
			<Value>50</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>Weeks</CVLId>
			<Key>51</Key>
			<Index>51</Index>
			<ParentKey />
			<Value>51</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>Weeks</CVLId>
			<Key>52</Key>
			<Index>52</Index>
			<ParentKey />
			<Value>52</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>Weeks</CVLId>
			<Key>53</Key>
			<Index>53</Index>
			<ParentKey />
			<Value>53</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>Year</CVLId>
			<Key>2016</Key>
			<Index>2016</Index>
			<ParentKey />
			<Value>2016</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>Year</CVLId>
			<Key>2017</Key>
			<Index>2017</Index>
			<ParentKey />
			<Value>2017</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>Year</CVLId>
			<Key>2018</Key>
			<Index>2018</Index>
			<ParentKey />
			<Value>2018</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>Year</CVLId>
			<Key>2019</Key>
			<Index>2019</Index>
			<ParentKey />
			<Value>2019</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>YesNo</CVLId>
			<Key>0</Key>
			<Index>0</Index>
			<ParentKey />
			<Value>No</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>YesNo</CVLId>
			<Key>1</Key>
			<Index>0</Index>
			<ParentKey />
			<Value>Yes</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>Brand</CVLId>
			<Key>schreiber</Key>
			<Index>0</Index>
			<ParentKey>diy</ParentKey>
			<Value>Schreiber</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>Brand</CVLId>
			<Key>ManufacturAOsmith</Key>
			<Index>0</Index>
			<ParentKey>manufacturing</ParentKey>
			<Value>AOSmith</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>Brand</CVLId>
			<Key>ManuufactProMax</Key>
			<Index>0</Index>
			<ParentKey>manufacturing</ParentKey>
			<Value>Promax</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>Brand</CVLId>
			<Key>ManufactState</Key>
			<Index>0</Index>
			<ParentKey>manufacturing</ParentKey>
			<Value>State</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>Brand</CVLId>
			<Key>Kroehler</Key>
			<Index>0</Index>
			<ParentKey>furniture</ParentKey>
			<Value>Kroehler </Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>Brand</CVLId>
			<Key>rosmarygoodenough</Key>
			<Index>0</Index>
			<ParentKey>fashionretail</ParentKey>
			<Value>Rosmary Goodenought</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>Brand</CVLId>
			<Key>xDIY</Key>
			<Index>0</Index>
			<ParentKey>diy</ParentKey>
			<Value>xDIY</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>Brand</CVLId>
			<Key>EGO</Key>
			<Index>0</Index>
			<ParentKey>diy</ParentKey>
			<Value>EGO</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>Brand</CVLId>
			<Key>xFurniture</Key>
			<Index>0</Index>
			<ParentKey>furniture</ParentKey>
			<Value>xFurniture</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>Brand</CVLId>
			<Key>iFurniture</Key>
			<Index>0</Index>
			<ParentKey>furniture</ParentKey>
			<Value>iFurniture</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>Brand</CVLId>
			<Key>ifashion</Key>
			<Index>0</Index>
			<ParentKey>fashionretail</ParentKey>
			<Value>iFashion</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>Brand</CVLId>
			<Key>bosch</Key>
			<Index>0</Index>
			<ParentKey>diy</ParentKey>
			<Value>Bosch</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>Brand</CVLId>
			<Key>dremel</Key>
			<Index>0</Index>
			<ParentKey>diy</ParentKey>
			<Value>Dremel</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>Brand</CVLId>
			<Key>makita</Key>
			<Index>0</Index>
			<ParentKey>diy</ParentKey>
			<Value>Makita</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>Brand</CVLId>
			<Key>blackdecker</Key>
			<Index>0</Index>
			<ParentKey>diy</ParentKey>
			<Value>Black &amp; Decker</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>Brand</CVLId>
			<Key>xfashion</Key>
			<Index>0</Index>
			<ParentKey>fashionretail</ParentKey>
			<Value>xFashion</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>Brand</CVLId>
			<Key>milwaukee</Key>
			<Index>0</Index>
			<ParentKey>diy</ParentKey>
			<Value>Milwaukee</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>FoodAllergensDetailed</CVLId>
			<Key>Barley</Key>
			<Index>1</Index>
			<ParentKey>Cereals</ParentKey>
			<Value>
				<string>
					<value language="en">
						<![CDATA[Barley]]>
					</value>
					<value language="nl">
						<![CDATA[Gerst]]>
					</value>
					<value language="fr">
						<![CDATA[Orge]]>
					</value>
					<value language="de">
						<![CDATA[Gerste]]>
					</value>
					<value language="sv">
						<![CDATA[Korn]]>
					</value>
				</string>
			</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>FoodAllergensDetailed</CVLId>
			<Key>Groundnuts</Key>
			<Index>1</Index>
			<ParentKey>Nuts</ParentKey>
			<Value>
				<string>
					<value language="en">
						<![CDATA[Groundnuts (Peanuts)]]>
					</value>
					<value language="nl">
						<![CDATA[Aardnoten (Pinda's)]]>
					</value>
					<value language="fr">
						<![CDATA[Arachides (Cacahuètes)]]>
					</value>
					<value language="de">
						<![CDATA[Erdnüsse (Erdnüsse)]]>
					</value>
					<value language="sv">
						<![CDATA[Jord (Jordnötter)]]>
					</value>
				</string>
			</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>FoodAllergensDetailed</CVLId>
			<Key>Oats</Key>
			<Index>2</Index>
			<ParentKey>Cereals</ParentKey>
			<Value>
				<string>
					<value language="en">
						<![CDATA[Oats]]>
					</value>
					<value language="nl">
						<![CDATA[Haver]]>
					</value>
					<value language="fr">
						<![CDATA[L'Avoine]]>
					</value>
					<value language="de">
						<![CDATA[Hafer]]>
					</value>
					<value language="sv">
						<![CDATA[Havre]]>
					</value>
				</string>
			</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>FoodAllergensDetailed</CVLId>
			<Key>Almonds</Key>
			<Index>2</Index>
			<ParentKey>Nuts</ParentKey>
			<Value>
				<string>
					<value language="en">
						<![CDATA[Almonds]]>
					</value>
					<value language="nl">
						<![CDATA[Amandelen]]>
					</value>
					<value language="fr">
						<![CDATA[Amandes]]>
					</value>
					<value language="de">
						<![CDATA[Mandeln]]>
					</value>
					<value language="sv">
						<![CDATA[Mandlar]]>
					</value>
				</string>
			</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>FoodAllergensDetailed</CVLId>
			<Key>Kamut</Key>
			<Index>3</Index>
			<ParentKey>Cereals</ParentKey>
			<Value>
				<string>
					<value language="en">
						<![CDATA[Kamut]]>
					</value>
					<value language="nl">
						<![CDATA[Kamut]]>
					</value>
					<value language="fr">
						<![CDATA[Kamut]]>
					</value>
					<value language="de">
						<![CDATA[Kamut]]>
					</value>
					<value language="sv">
						<![CDATA[Kamut]]>
					</value>
				</string>
			</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>FoodAllergensDetailed</CVLId>
			<Key>Cashews</Key>
			<Index>3</Index>
			<ParentKey>Nuts</ParentKey>
			<Value>
				<string>
					<value language="en">
						<![CDATA[Cashews]]>
					</value>
					<value language="nl">
						<![CDATA[Cashewnoten]]>
					</value>
					<value language="fr">
						<![CDATA[Cajous]]>
					</value>
					<value language="de">
						<![CDATA[Cashewnüsse]]>
					</value>
					<value language="sv">
						<![CDATA[Cashewnötter]]>
					</value>
				</string>
			</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>FoodAllergensDetailed</CVLId>
			<Key>Rye</Key>
			<Index>4</Index>
			<ParentKey>Cereals</ParentKey>
			<Value>
				<string>
					<value language="en">
						<![CDATA[Rye]]>
					</value>
					<value language="nl">
						<![CDATA[Rogge]]>
					</value>
					<value language="fr">
						<![CDATA[Seigle]]>
					</value>
					<value language="de">
						<![CDATA[Roggen]]>
					</value>
					<value language="sv">
						<![CDATA[Råg]]>
					</value>
				</string>
			</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>FoodAllergensDetailed</CVLId>
			<Key>Hazelnuts</Key>
			<Index>4</Index>
			<ParentKey>Nuts</ParentKey>
			<Value>
				<string>
					<value language="en">
						<![CDATA[Hazelnuts]]>
					</value>
					<value language="nl">
						<![CDATA[Hazelnoten]]>
					</value>
					<value language="fr">
						<![CDATA[Noisettes]]>
					</value>
					<value language="de">
						<![CDATA[Haselnüsse]]>
					</value>
					<value language="sv">
						<![CDATA[Hasselnötter]]>
					</value>
				</string>
			</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>FoodAllergensDetailed</CVLId>
			<Key>Spelt</Key>
			<Index>5</Index>
			<ParentKey>Cereals</ParentKey>
			<Value>
				<string>
					<value language="en">
						<![CDATA[Spelt]]>
					</value>
					<value language="nl">
						<![CDATA[Spelt]]>
					</value>
					<value language="fr">
						<![CDATA[Épeautre]]>
					</value>
					<value language="de">
						<![CDATA[Dinkel]]>
					</value>
					<value language="sv">
						<![CDATA[Stavat]]>
					</value>
				</string>
			</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>FoodAllergensDetailed</CVLId>
			<Key>Macadamia</Key>
			<Index>5</Index>
			<ParentKey>Nuts</ParentKey>
			<Value>
				<string>
					<value language="en">
						<![CDATA[Macadamia]]>
					</value>
					<value language="nl">
						<![CDATA[Macademianoten]]>
					</value>
					<value language="fr">
						<![CDATA[Macadamia]]>
					</value>
					<value language="de">
						<![CDATA[Macadamia]]>
					</value>
					<value language="sv">
						<![CDATA[Macadamia]]>
					</value>
				</string>
			</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>FoodAllergensDetailed</CVLId>
			<Key>Wheat</Key>
			<Index>6</Index>
			<ParentKey>Cereals</ParentKey>
			<Value>
				<string>
					<value language="en">
						<![CDATA[Wheat]]>
					</value>
					<value language="nl">
						<![CDATA[Tarwe]]>
					</value>
					<value language="fr">
						<![CDATA[Blé]]>
					</value>
					<value language="de">
						<![CDATA[Weizen]]>
					</value>
					<value language="sv">
						<![CDATA[Vete]]>
					</value>
				</string>
			</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>FoodAllergensDetailed</CVLId>
			<Key>Brazilnuts</Key>
			<Index>6</Index>
			<ParentKey>Nuts</ParentKey>
			<Value>
				<string>
					<value language="en">
						<![CDATA[Brazil Nuts]]>
					</value>
					<value language="nl">
						<![CDATA[Paranoten]]>
					</value>
					<value language="fr">
						<![CDATA[Noix Du Brésil]]>
					</value>
					<value language="de">
						<![CDATA[Paranuss]]>
					</value>
					<value language="sv">
						<![CDATA[Paranötter]]>
					</value>
				</string>
			</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>FoodAllergensDetailed</CVLId>
			<Key>Pecans</Key>
			<Index>7</Index>
			<ParentKey>Nuts</ParentKey>
			<Value>
				<string>
					<value language="en">
						<![CDATA[Pecans]]>
					</value>
					<value language="nl">
						<![CDATA[Pecannoten]]>
					</value>
					<value language="fr">
						<![CDATA[Noix De Pécan]]>
					</value>
					<value language="de">
						<![CDATA[Pecannüsse]]>
					</value>
					<value language="sv">
						<![CDATA[Pekannötter]]>
					</value>
				</string>
			</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>FoodAllergensDetailed</CVLId>
			<Key>Pistachios</Key>
			<Index>9</Index>
			<ParentKey>Nuts</ParentKey>
			<Value>
				<string>
					<value language="en">
						<![CDATA[Pistachios]]>
					</value>
					<value language="nl">
						<![CDATA[Pistachenoten]]>
					</value>
					<value language="fr">
						<![CDATA[Pistaches]]>
					</value>
					<value language="de">
						<![CDATA[Pistazien]]>
					</value>
					<value language="sv">
						<![CDATA[Pistaschnötter]]>
					</value>
				</string>
			</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>FoodAllergensDetailed</CVLId>
			<Key>Walnuts</Key>
			<Index>10</Index>
			<ParentKey>Nuts</ParentKey>
			<Value>
				<string>
					<value language="en">
						<![CDATA[Walnuts]]>
					</value>
					<value language="nl">
						<![CDATA[Walnoten]]>
					</value>
					<value language="fr">
						<![CDATA[Noix]]>
					</value>
					<value language="de">
						<![CDATA[Walnüsse]]>
					</value>
					<value language="sv">
						<![CDATA[Valnötter]]>
					</value>
				</string>
			</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>ImageAngle</CVLId>
			<Key>front</Key>
			<Index>1</Index>
			<ParentKey>image</ParentKey>
			<Value>
				<string>
					<value language="en">
						<![CDATA[Front]]>
					</value>
					<value language="nl">
						<![CDATA[Voorkant]]>
					</value>
					<value language="fr">
						<![CDATA[Avant]]>
					</value>
					<value language="de">
						<![CDATA[Vorne]]>
					</value>
					<value language="sv">
						<![CDATA[Främre]]>
					</value>
				</string>
			</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>ImageAngle</CVLId>
			<Key>back</Key>
			<Index>2</Index>
			<ParentKey>image</ParentKey>
			<Value>
				<string>
					<value language="en">
						<![CDATA[Back]]>
					</value>
					<value language="nl">
						<![CDATA[Terug]]>
					</value>
					<value language="fr">
						<![CDATA[Arrière]]>
					</value>
					<value language="de">
						<![CDATA[Hinten]]>
					</value>
					<value language="sv">
						<![CDATA[Tillbaka]]>
					</value>
				</string>
			</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>ImageAngle</CVLId>
			<Key>left</Key>
			<Index>3</Index>
			<ParentKey>image</ParentKey>
			<Value>
				<string>
					<value language="en">
						<![CDATA[Left]]>
					</value>
					<value language="nl">
						<![CDATA[Links]]>
					</value>
					<value language="fr">
						<![CDATA[Gauche]]>
					</value>
					<value language="de">
						<![CDATA[Links]]>
					</value>
					<value language="sv">
						<![CDATA[Vänster]]>
					</value>
				</string>
			</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>ImageAngle</CVLId>
			<Key>right</Key>
			<Index>4</Index>
			<ParentKey>image</ParentKey>
			<Value>
				<string>
					<value language="en">
						<![CDATA[Right]]>
					</value>
					<value language="nl">
						<![CDATA[Rechts]]>
					</value>
					<value language="fr">
						<![CDATA[Droite]]>
					</value>
					<value language="de">
						<![CDATA[Rechts]]>
					</value>
					<value language="sv">
						<![CDATA[Höger]]>
					</value>
				</string>
			</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>ImageAngle</CVLId>
			<Key>360</Key>
			<Index>5</Index>
			<ParentKey>image</ParentKey>
			<Value>
				<string>
					<value language="en">
						<![CDATA[360 view]]>
					</value>
					<value language="nl">
						<![CDATA[360 view]]>
					</value>
					<value language="fr">
						<![CDATA[Vue à 360°]]>
					</value>
					<value language="de">
						<![CDATA[360-Grad-Blick]]>
					</value>
					<value language="sv">
						<![CDATA[360 visa]]>
					</value>
				</string>
			</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>ImageAngle</CVLId>
			<Key>Closeup</Key>
			<Index>6</Index>
			<ParentKey>image</ParentKey>
			<Value>
				<string>
					<value language="en">
						<![CDATA[Close up]]>
					</value>
					<value language="nl">
						<![CDATA[Close up]]>
					</value>
					<value language="fr">
						<![CDATA[Close up]]>
					</value>
					<value language="de">
						<![CDATA[Close up]]>
					</value>
					<value language="sv">
						<![CDATA[Close up]]>
					</value>
				</string>
			</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>ImageOrientation</CVLId>
			<Key>portrait</Key>
			<Index>1</Index>
			<ParentKey>image</ParentKey>
			<Value>
				<string>
					<value language="en">
						<![CDATA[Portrait]]>
					</value>
					<value language="nl">
						<![CDATA[Portret]]>
					</value>
					<value language="fr">
						<![CDATA[Portrait]]>
					</value>
					<value language="de">
						<![CDATA[Porträt]]>
					</value>
					<value language="sv">
						<![CDATA[Porträtt]]>
					</value>
				</string>
			</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>ImageOrientation</CVLId>
			<Key>landscape</Key>
			<Index>2</Index>
			<ParentKey>image</ParentKey>
			<Value>
				<string>
					<value language="en">
						<![CDATA[Landscape]]>
					</value>
					<value language="nl">
						<![CDATA[Landschap]]>
					</value>
					<value language="fr">
						<![CDATA[Paysage]]>
					</value>
					<value language="de">
						<![CDATA[Landschaft]]>
					</value>
					<value language="sv">
						<![CDATA[Landskap]]>
					</value>
				</string>
			</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>ImageRes</CVLId>
			<Key>hires</Key>
			<Index>0</Index>
			<ParentKey>image</ParentKey>
			<Value>
				<string>
					<value language="en">
						<![CDATA[High Resolution]]>
					</value>
					<value language="nl">
						<![CDATA[Hoge resolutie]]>
					</value>
					<value language="fr">
						<![CDATA[Haute resolutie]]>
					</value>
					<value language="de">
						<![CDATA[Hohe Auflösung]]>
					</value>
					<value language="sv">
						<![CDATA[Högupplöst]]>
					</value>
				</string>
			</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>ImageRes</CVLId>
			<Key>lores</Key>
			<Index>0</Index>
			<ParentKey>image</ParentKey>
			<Value>
				<string>
					<value language="en">
						<![CDATA[Low Resolution]]>
					</value>
					<value language="nl">
						<![CDATA[Lage resolutie]]>
					</value>
					<value language="fr">
						<![CDATA[Basse resolutie]]>
					</value>
					<value language="de">
						<![CDATA[Niedrige Auflösung]]>
					</value>
					<value language="sv">
						<![CDATA[Lågupplöst]]>
					</value>
				</string>
			</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>ItemVariant</CVLId>
			<Key>fasionred</Key>
			<Index>1001</Index>
			<ParentKey>fashionretail</ParentKey>
			<Value>
				<string>
					<value language="en">
						<![CDATA[Red]]>
					</value>
					<value language="nl">
						<![CDATA[Rood]]>
					</value>
					<value language="fr">
						<![CDATA[Rouge]]>
					</value>
					<value language="de">
						<![CDATA[Rote]]>
					</value>
					<value language="sv">
						<![CDATA[Röd]]>
					</value>
				</string>
			</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>ItemVariant</CVLId>
			<Key>fashionorange</Key>
			<Index>1002</Index>
			<ParentKey>fashionretail</ParentKey>
			<Value>
				<string>
					<value language="en">
						<![CDATA[Orange]]>
					</value>
					<value language="nl">
						<![CDATA[Oranje]]>
					</value>
					<value language="fr">
						<![CDATA[Orange]]>
					</value>
					<value language="de">
						<![CDATA[Orange]]>
					</value>
					<value language="sv">
						<![CDATA[Orange]]>
					</value>
				</string>
			</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>ItemVariant</CVLId>
			<Key>fashionyellow</Key>
			<Index>1003</Index>
			<ParentKey>fashionretail</ParentKey>
			<Value>
				<string>
					<value language="en">
						<![CDATA[Yellow]]>
					</value>
					<value language="nl">
						<![CDATA[Geel]]>
					</value>
					<value language="fr">
						<![CDATA[Jaune]]>
					</value>
					<value language="de">
						<![CDATA[Gelb]]>
					</value>
					<value language="sv">
						<![CDATA[Gul]]>
					</value>
				</string>
			</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>ItemVariant</CVLId>
			<Key>fashiongreen</Key>
			<Index>1004</Index>
			<ParentKey>fashionretail</ParentKey>
			<Value>
				<string>
					<value language="en">
						<![CDATA[Green]]>
					</value>
					<value language="nl">
						<![CDATA[Groen]]>
					</value>
					<value language="fr">
						<![CDATA[Vert]]>
					</value>
					<value language="de">
						<![CDATA[Grün]]>
					</value>
					<value language="sv">
						<![CDATA[Grön]]>
					</value>
				</string>
			</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>ItemVariant</CVLId>
			<Key>fashionblue</Key>
			<Index>1005</Index>
			<ParentKey>fashionretail</ParentKey>
			<Value>
				<string>
					<value language="en">
						<![CDATA[Blue]]>
					</value>
					<value language="nl">
						<![CDATA[Blauw]]>
					</value>
					<value language="fr">
						<![CDATA[Bleu]]>
					</value>
					<value language="de">
						<![CDATA[Blau]]>
					</value>
					<value language="sv">
						<![CDATA[Blå]]>
					</value>
				</string>
			</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>ItemVariant</CVLId>
			<Key>fashionpurple</Key>
			<Index>1006</Index>
			<ParentKey>fashionretail</ParentKey>
			<Value>
				<string>
					<value language="en">
						<![CDATA[Purple]]>
					</value>
					<value language="nl">
						<![CDATA[Purper]]>
					</value>
					<value language="fr">
						<![CDATA[Pourpre]]>
					</value>
					<value language="de">
						<![CDATA[Lila]]>
					</value>
					<value language="sv">
						<![CDATA[Lila]]>
					</value>
				</string>
			</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>ItemVariant</CVLId>
			<Key>fashionbeige</Key>
			<Index>1007</Index>
			<ParentKey>fashionretail</ParentKey>
			<Value>
				<string>
					<value language="en">
						<![CDATA[Beige]]>
					</value>
					<value language="nl">
						<![CDATA[Beige]]>
					</value>
					<value language="fr">
						<![CDATA[Beige]]>
					</value>
					<value language="de">
						<![CDATA[Beige]]>
					</value>
					<value language="sv">
						<![CDATA[Beige]]>
					</value>
				</string>
			</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>ItemVariant</CVLId>
			<Key>fashionwhite</Key>
			<Index>1008</Index>
			<ParentKey>fashionretail</ParentKey>
			<Value>
				<string>
					<value language="en">
						<![CDATA[White]]>
					</value>
					<value language="nl">
						<![CDATA[Wit]]>
					</value>
					<value language="fr">
						<![CDATA[Blanc]]>
					</value>
					<value language="de">
						<![CDATA[Weiß]]>
					</value>
					<value language="sv">
						<![CDATA[Vit]]>
					</value>
				</string>
			</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>ItemVariant</CVLId>
			<Key>fashiongrey</Key>
			<Index>1009</Index>
			<ParentKey>fashionretail</ParentKey>
			<Value>
				<string>
					<value language="en">
						<![CDATA[Grey]]>
					</value>
					<value language="nl">
						<![CDATA[Grijs]]>
					</value>
					<value language="fr">
						<![CDATA[Gris]]>
					</value>
					<value language="de">
						<![CDATA[Grau]]>
					</value>
					<value language="sv">
						<![CDATA[Grå]]>
					</value>
				</string>
			</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>ItemVariant</CVLId>
			<Key>fashionblack</Key>
			<Index>1010</Index>
			<ParentKey>fashionretail</ParentKey>
			<Value>
				<string>
					<value language="en">
						<![CDATA[Black]]>
					</value>
					<value language="nl">
						<![CDATA[Zwart]]>
					</value>
					<value language="fr">
						<![CDATA[Noir]]>
					</value>
					<value language="de">
						<![CDATA[Schwarz]]>
					</value>
					<value language="sv">
						<![CDATA[Svart]]>
					</value>
				</string>
			</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>ItemVariant</CVLId>
			<Key>diyna</Key>
			<Index>2001</Index>
			<ParentKey>diy</ParentKey>
			<Value>
				<string>
					<value language="en">
						<![CDATA[N/A]]>
					</value>
					<value language="nl">
						<![CDATA[N / A]]>
					</value>
					<value language="fr">
						<![CDATA[N/A]]>
					</value>
					<value language="de">
						<![CDATA[K. A.]]>
					</value>
					<value language="sv">
						<![CDATA[N / A]]>
					</value>
				</string>
			</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>ItemVariant</CVLId>
			<Key>diyblack</Key>
			<Index>2002</Index>
			<ParentKey>diy</ParentKey>
			<Value>
				<string>
					<value language="en">
						<![CDATA[Black]]>
					</value>
					<value language="nl">
						<![CDATA[Zwart]]>
					</value>
					<value language="fr">
						<![CDATA[Noir]]>
					</value>
					<value language="de">
						<![CDATA[Schwarz]]>
					</value>
					<value language="sv">
						<![CDATA[Svart]]>
					</value>
				</string>
			</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>ItemVariant</CVLId>
			<Key>diysilver</Key>
			<Index>2003</Index>
			<ParentKey>diy</ParentKey>
			<Value>
				<string>
					<value language="en">
						<![CDATA[Silver]]>
					</value>
					<value language="nl">
						<![CDATA[Zilver]]>
					</value>
					<value language="fr">
						<![CDATA[Argent]]>
					</value>
					<value language="de">
						<![CDATA[Silber]]>
					</value>
					<value language="sv">
						<![CDATA[Silver]]>
					</value>
				</string>
			</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>ItemVariant</CVLId>
			<Key>diylightbrown</Key>
			<Index>2004</Index>
			<ParentKey>diy</ParentKey>
			<Value>
				<string>
					<value language="en">
						<![CDATA[Light Brown]]>
					</value>
					<value language="nl">
						<![CDATA[Lichtbruin]]>
					</value>
					<value language="fr">
						<![CDATA[Brun Clair]]>
					</value>
					<value language="de">
						<![CDATA[Hellbraun Braun]]>
					</value>
					<value language="sv">
						<![CDATA[Ijusbrun]]>
					</value>
				</string>
			</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>ItemVariant</CVLId>
			<Key>diydarkbrown</Key>
			<Index>2005</Index>
			<ParentKey>diy</ParentKey>
			<Value>
				<string>
					<value language="en">
						<![CDATA[Dark Brown]]>
					</value>
					<value language="nl">
						<![CDATA[Donkerbruin]]>
					</value>
					<value language="fr">
						<![CDATA[Brun Foncé]]>
					</value>
					<value language="de">
						<![CDATA[Dunkelbraun Braun~~Pos=Headcomp]]>
					</value>
					<value language="sv">
						<![CDATA[Mörkbrun]]>
					</value>
				</string>
			</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>ItemVariant</CVLId>
			<Key>diybrown</Key>
			<Index>2006</Index>
			<ParentKey>diy</ParentKey>
			<Value>
				<string>
					<value language="en">
						<![CDATA[Brown]]>
					</value>
					<value language="nl">
						<![CDATA[Bruin]]>
					</value>
					<value language="fr">
						<![CDATA[Brun]]>
					</value>
					<value language="de">
						<![CDATA[Braun]]>
					</value>
					<value language="sv">
						<![CDATA[Brun]]>
					</value>
				</string>
			</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>ItemVariant</CVLId>
			<Key>furniturepersimmon</Key>
			<Index>3001</Index>
			<ParentKey>furniture</ParentKey>
			<Value>
				<string>
					<value language="en">
						<![CDATA[Persimmon]]>
					</value>
					<value language="nl">
						<![CDATA[Persimmon]]>
					</value>
					<value language="fr">
						<![CDATA[Persimmon]]>
					</value>
					<value language="de">
						<![CDATA[Persimmon]]>
					</value>
					<value language="sv">
						<![CDATA[Persimon]]>
					</value>
				</string>
			</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>ItemVariant</CVLId>
			<Key>furniturewheat</Key>
			<Index>3002</Index>
			<ParentKey>furniture</ParentKey>
			<Value>
				<string>
					<value language="en">
						<![CDATA[Wheat]]>
					</value>
					<value language="nl">
						<![CDATA[Tarwe]]>
					</value>
					<value language="fr">
						<![CDATA[Blé]]>
					</value>
					<value language="de">
						<![CDATA[Weizen]]>
					</value>
					<value language="sv">
						<![CDATA[Vete]]>
					</value>
				</string>
			</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>ItemVariant</CVLId>
			<Key>furniturerobinsegg</Key>
			<Index>3003</Index>
			<ParentKey>furniture</ParentKey>
			<Value>
				<string>
					<value language="en">
						<![CDATA[Robins Egg]]>
					</value>
					<value language="nl">
						<![CDATA[Robins Egg]]>
					</value>
					<value language="fr">
						<![CDATA[Robins Egg]]>
					</value>
					<value language="de">
						<![CDATA[Robins Egg]]>
					</value>
					<value language="sv">
						<![CDATA[Robins Egg]]>
					</value>
				</string>
			</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>ItemVariant</CVLId>
			<Key>furnitureorange</Key>
			<Index>3004</Index>
			<ParentKey>furniture</ParentKey>
			<Value>
				<string>
					<value language="en">
						<![CDATA[Orange]]>
					</value>
					<value language="nl">
						<![CDATA[Oranje]]>
					</value>
					<value language="fr">
						<![CDATA[Orange]]>
					</value>
					<value language="de">
						<![CDATA[Orange]]>
					</value>
					<value language="sv">
						<![CDATA[Orange]]>
					</value>
				</string>
			</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>ItemVariant</CVLId>
			<Key>furnitureautumn</Key>
			<Index>3005</Index>
			<ParentKey>furniture</ParentKey>
			<Value>
				<string>
					<value language="en">
						<![CDATA[Autumn]]>
					</value>
					<value language="nl">
						<![CDATA[Herfst]]>
					</value>
					<value language="fr">
						<![CDATA[Automne]]>
					</value>
					<value language="de">
						<![CDATA[Herbst]]>
					</value>
					<value language="sv">
						<![CDATA[Höst]]>
					</value>
				</string>
			</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>ItemVariant</CVLId>
			<Key>furniturelightgrey</Key>
			<Index>3006</Index>
			<ParentKey>furniture</ParentKey>
			<Value>
				<string>
					<value language="en">
						<![CDATA[Light Grey]]>
					</value>
					<value language="nl">
						<![CDATA[Lichtgrijs]]>
					</value>
					<value language="fr">
						<![CDATA[Gris Clair]]>
					</value>
					<value language="de">
						<![CDATA[Hellgrau Grau]]>
					</value>
					<value language="sv">
						<![CDATA[Ljusgrå]]>
					</value>
				</string>
			</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>ItemVariant</CVLId>
			<Key>furnituretricolor</Key>
			<Index>3007</Index>
			<ParentKey>furniture</ParentKey>
			<Value>
				<string>
					<value language="en">
						<![CDATA[Tricolor]]>
					</value>
					<value language="nl">
						<![CDATA[Driekleur]]>
					</value>
					<value language="fr">
						<![CDATA[Tricolore]]>
					</value>
					<value language="de">
						<![CDATA[Tricolor]]>
					</value>
					<value language="sv">
						<![CDATA[Multi]]>
					</value>
				</string>
			</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>ItemVariant</CVLId>
			<Key>furniturefog</Key>
			<Index>3008</Index>
			<ParentKey>furniture</ParentKey>
			<Value>
				<string>
					<value language="en">
						<![CDATA[Fog]]>
					</value>
					<value language="nl">
						<![CDATA[Mist]]>
					</value>
					<value language="fr">
						<![CDATA[Brouillard]]>
					</value>
					<value language="de">
						<![CDATA[Nebel]]>
					</value>
					<value language="sv">
						<![CDATA[Dimma]]>
					</value>
				</string>
			</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>ItemVariant</CVLId>
			<Key>furnitureblack</Key>
			<Index>3009</Index>
			<ParentKey>furniture</ParentKey>
			<Value>
				<string>
					<value language="en">
						<![CDATA[Black]]>
					</value>
					<value language="nl">
						<![CDATA[Zwart]]>
					</value>
					<value language="fr">
						<![CDATA[Noir]]>
					</value>
					<value language="de">
						<![CDATA[Schwarz]]>
					</value>
					<value language="sv">
						<![CDATA[Svart]]>
					</value>
				</string>
			</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>ItemVariant</CVLId>
			<Key>furniturebuff</Key>
			<Index>3010</Index>
			<ParentKey>furniture</ParentKey>
			<Value>
				<string>
					<value language="en">
						<![CDATA[Buff]]>
					</value>
					<value language="nl">
						<![CDATA[Bruingeel]]>
					</value>
					<value language="fr">
						<![CDATA[Chamois]]>
					</value>
					<value language="de">
						<![CDATA[Schwabbelscheibe]]>
					</value>
					<value language="sv">
						<![CDATA[Buff]]>
					</value>
				</string>
			</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>ItemVariant</CVLId>
			<Key>furnituregrey</Key>
			<Index>3011</Index>
			<ParentKey>furniture</ParentKey>
			<Value>
				<string>
					<value language="en">
						<![CDATA[Grey]]>
					</value>
					<value language="nl">
						<![CDATA[Grey]]>
					</value>
					<value language="fr">
						<![CDATA[Gris]]>
					</value>
					<value language="de">
						<![CDATA[Grau]]>
					</value>
					<value language="sv">
						<![CDATA[Grå]]>
					</value>
				</string>
			</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>ItemVariant</CVLId>
			<Key>furniturebark</Key>
			<Index>3012</Index>
			<ParentKey>furniture</ParentKey>
			<Value>
				<string>
					<value language="en">
						<![CDATA[Bark]]>
					</value>
					<value language="nl">
						<![CDATA[Schors]]>
					</value>
					<value language="fr">
						<![CDATA[Écorce]]>
					</value>
					<value language="de">
						<![CDATA[Rinde]]>
					</value>
					<value language="sv">
						<![CDATA[Bark]]>
					</value>
				</string>
			</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>ItemVariant</CVLId>
			<Key>furnitureantracit</Key>
			<Index>3013</Index>
			<ParentKey>furniture</ParentKey>
			<Value>
				<string>
					<value language="en">
						<![CDATA[Antracit]]>
					</value>
					<value language="nl">
						<![CDATA[Antraciet]]>
					</value>
					<value language="fr">
						<![CDATA[Anthracite]]>
					</value>
					<value language="de">
						<![CDATA[Anthrazit]]>
					</value>
					<value language="sv">
						<![CDATA[Antracit]]>
					</value>
				</string>
			</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>ItemVariant</CVLId>
			<Key>furniturered</Key>
			<Index>3014</Index>
			<ParentKey>furniture</ParentKey>
			<Value>
				<string>
					<value language="en">
						<![CDATA[Red]]>
					</value>
					<value language="nl">
						<![CDATA[Rood]]>
					</value>
					<value language="fr">
						<![CDATA[Rouge]]>
					</value>
					<value language="de">
						<![CDATA[Rote]]>
					</value>
					<value language="sv">
						<![CDATA[Röd]]>
					</value>
				</string>
			</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>ItemVariant</CVLId>
			<Key>furniturenickel</Key>
			<Index>3015</Index>
			<ParentKey>furniture</ParentKey>
			<Value>
				<string>
					<value language="en">
						<![CDATA[Nickle]]>
					</value>
					<value language="nl">
						<![CDATA[Nikkel]]>
					</value>
					<value language="fr">
						<![CDATA[Nickle]]>
					</value>
					<value language="de">
						<![CDATA[Nickle]]>
					</value>
					<value language="sv">
						<![CDATA[Nickle]]>
					</value>
				</string>
			</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>ItemVariant</CVLId>
			<Key>furniturepumice</Key>
			<Index>3016</Index>
			<ParentKey>furniture</ParentKey>
			<Value>
				<string>
					<value language="en">
						<![CDATA[Pumice]]>
					</value>
					<value language="nl">
						<![CDATA[Puimsteen]]>
					</value>
					<value language="fr">
						<![CDATA[Pierre Ponce]]>
					</value>
					<value language="de">
						<![CDATA[Bimsstein]]>
					</value>
					<value language="sv">
						<![CDATA[Pimpsten]]>
					</value>
				</string>
			</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>ItemVariant</CVLId>
			<Key>furnitureivory</Key>
			<Index>3017</Index>
			<ParentKey>furniture</ParentKey>
			<Value>
				<string>
					<value language="en">
						<![CDATA[Ivory]]>
					</value>
					<value language="nl">
						<![CDATA[Ivoor]]>
					</value>
					<value language="fr">
						<![CDATA[Ivoire]]>
					</value>
					<value language="de">
						<![CDATA[Elfenbein]]>
					</value>
					<value language="sv">
						<![CDATA[Elfenben]]>
					</value>
				</string>
			</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>ItemVariant</CVLId>
			<Key>furniturewhiteash</Key>
			<Index>3018</Index>
			<ParentKey>furniture</ParentKey>
			<Value>
				<string>
					<value language="en">
						<![CDATA[White Ash]]>
					</value>
					<value language="nl">
						<![CDATA[Witte As]]>
					</value>
					<value language="fr">
						<![CDATA[Le Frêne Blanc]]>
					</value>
					<value language="de">
						<![CDATA[Esche Weiß]]>
					</value>
					<value language="sv">
						<![CDATA[Aska]]>
					</value>
				</string>
			</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>ItemVariant</CVLId>
			<Key>furniturenaturalcherry</Key>
			<Index>3019</Index>
			<ParentKey>furniture</ParentKey>
			<Value>
				<string>
					<value language="en">
						<![CDATA[Natural Cherry]]>
					</value>
					<value language="nl">
						<![CDATA[Natural Cherry]]>
					</value>
					<value language="fr">
						<![CDATA[Cerisier Naturel]]>
					</value>
					<value language="de">
						<![CDATA[Natürliche Kirsche]]>
					</value>
					<value language="sv">
						<![CDATA[Körsbärsröd]]>
					</value>
				</string>
			</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>ItemVariant</CVLId>
			<Key>furniturebronze</Key>
			<Index>3020</Index>
			<ParentKey>furniture</ParentKey>
			<Value>
				<string>
					<value language="en">
						<![CDATA[Bronze]]>
					</value>
					<value language="nl">
						<![CDATA[Bronzen]]>
					</value>
					<value language="fr">
						<![CDATA[Bronze]]>
					</value>
					<value language="de">
						<![CDATA[Bronze]]>
					</value>
					<value language="sv">
						<![CDATA[Brons]]>
					</value>
				</string>
			</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>ItemVariant</CVLId>
			<Key>furnituregold</Key>
			<Index>3021</Index>
			<ParentKey>furniture</ParentKey>
			<Value>
				<string>
					<value language="en">
						<![CDATA[Gold]]>
					</value>
					<value language="nl">
						<![CDATA[Goud]]>
					</value>
					<value language="fr">
						<![CDATA[Or]]>
					</value>
					<value language="de">
						<![CDATA[Gold]]>
					</value>
					<value language="sv">
						<![CDATA[Guld]]>
					</value>
				</string>
			</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>ItemVariant</CVLId>
			<Key>furnitureoak</Key>
			<Index>3022</Index>
			<ParentKey>furniture</ParentKey>
			<Value>
				<string>
					<value language="en">
						<![CDATA[Oak]]>
					</value>
					<value language="nl">
						<![CDATA[Eik]]>
					</value>
					<value language="fr">
						<![CDATA[Chêne]]>
					</value>
					<value language="de">
						<![CDATA[Eiche]]>
					</value>
					<value language="sv">
						<![CDATA[Ek]]>
					</value>
				</string>
			</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>MainCategory</CVLId>
			<Key>accessories</Key>
			<Index>1001</Index>
			<ParentKey>fashionretail</ParentKey>
			<Value>
				<string>
					<value language="en">
						<![CDATA[Accessories]]>
					</value>
					<value language="nl">
						<![CDATA[Accessoires]]>
					</value>
					<value language="fr">
						<![CDATA[Accessoires]]>
					</value>
					<value language="de">
						<![CDATA[Zubehör]]>
					</value>
					<value language="sv">
						<![CDATA[Tillbehör]]>
					</value>
				</string>
			</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>MainCategory</CVLId>
			<Key>FashionElectronics</Key>
			<Index>1002</Index>
			<ParentKey>fashionretail</ParentKey>
			<Value>
				<string>
					<value language="en">
						<![CDATA[Electronics]]>
					</value>
					<value language="nl">
						<![CDATA[Elektronica]]>
					</value>
					<value language="fr">
						<![CDATA[Electronics]]>
					</value>
					<value language="de">
						<![CDATA[Elektronik]]>
					</value>
					<value language="sv">
						<![CDATA[Elektronik]]>
					</value>
				</string>
			</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>MainCategory</CVLId>
			<Key>jacket</Key>
			<Index>1003</Index>
			<ParentKey>fashionretail</ParentKey>
			<Value>
				<string>
					<value language="en">
						<![CDATA[Jackets]]>
					</value>
					<value language="nl">
						<![CDATA[Jackets]]>
					</value>
					<value language="fr">
						<![CDATA[Vestes]]>
					</value>
					<value language="de">
						<![CDATA[Jacken]]>
					</value>
					<value language="sv">
						<![CDATA[Jackor]]>
					</value>
				</string>
			</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>MainCategory</CVLId>
			<Key>pant</Key>
			<Index>1004</Index>
			<ParentKey>fashionretail</ParentKey>
			<Value>
				<string>
					<value language="en">
						<![CDATA[Pants]]>
					</value>
					<value language="nl">
						<![CDATA[Broek]]>
					</value>
					<value language="fr">
						<![CDATA[Pantalon]]>
					</value>
					<value language="de">
						<![CDATA[Hose]]>
					</value>
					<value language="sv">
						<![CDATA[Byxor]]>
					</value>
				</string>
			</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>MainCategory</CVLId>
			<Key>topshirt</Key>
			<Index>1005</Index>
			<ParentKey>fashionretail</ParentKey>
			<Value>
				<string>
					<value language="en">
						<![CDATA[Tops & Shirts]]>
					</value>
					<value language="nl">
						<![CDATA[Tops & Shirts]]>
					</value>
					<value language="fr">
						<![CDATA[Tops & Chemises]]>
					</value>
					<value language="de">
						<![CDATA[Tops & Shirts]]>
					</value>
					<value language="sv">
						<![CDATA[Toppar Och Tröjor]]>
					</value>
				</string>
			</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>MainCategory</CVLId>
			<Key>electronics</Key>
			<Index>2001</Index>
			<ParentKey>diy</ParentKey>
			<Value>
				<string>
					<value language="en">
						<![CDATA[Electronics]]>
					</value>
					<value language="nl">
						<![CDATA[Elektronica]]>
					</value>
					<value language="fr">
						<![CDATA[Electronics]]>
					</value>
					<value language="de">
						<![CDATA[Elektronik]]>
					</value>
					<value language="sv">
						<![CDATA[Elektronik]]>
					</value>
				</string>
			</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>MainCategory</CVLId>
			<Key>flooring</Key>
			<Index>2002</Index>
			<ParentKey>diy</ParentKey>
			<Value>
				<string>
					<value language="en">
						<![CDATA[Flooring]]>
					</value>
					<value language="nl">
						<![CDATA[Bevloering]]>
					</value>
					<value language="fr">
						<![CDATA[Revêtement De Sol]]>
					</value>
					<value language="de">
						<![CDATA[Flooring]]>
					</value>
					<value language="sv">
						<![CDATA[Golv]]>
					</value>
				</string>
			</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>MainCategory</CVLId>
			<Key>powertools</Key>
			<Index>2003</Index>
			<ParentKey>diy</ParentKey>
			<Value>
				<string>
					<value language="en">
						<![CDATA[Power Tools]]>
					</value>
					<value language="nl">
						<![CDATA[Power Tools]]>
					</value>
					<value language="fr">
						<![CDATA[Outils Électriques]]>
					</value>
					<value language="de">
						<![CDATA[Power Tools]]>
					</value>
					<value language="sv">
						<![CDATA[Elverktyg]]>
					</value>
				</string>
			</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>MainCategory</CVLId>
			<Key>bathroom</Key>
			<Index>3001</Index>
			<ParentKey>furniture</ParentKey>
			<Value>
				<string>
					<value language="en">
						<![CDATA[Bathroom]]>
					</value>
					<value language="nl">
						<![CDATA[Badkamer]]>
					</value>
					<value language="fr">
						<![CDATA[Salle De Bain]]>
					</value>
					<value language="de">
						<![CDATA[Badezimmer]]>
					</value>
					<value language="sv">
						<![CDATA[Badrum]]>
					</value>
				</string>
			</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>MainCategory</CVLId>
			<Key>bedroom</Key>
			<Index>3002</Index>
			<ParentKey>furniture</ParentKey>
			<Value>
				<string>
					<value language="en">
						<![CDATA[Bedroom]]>
					</value>
					<value language="nl">
						<![CDATA[Slaapkamer]]>
					</value>
					<value language="fr">
						<![CDATA[Chambre À Coucher]]>
					</value>
					<value language="de">
						<![CDATA[Schlafzimmer]]>
					</value>
					<value language="sv">
						<![CDATA[Sovrum]]>
					</value>
				</string>
			</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>MainCategory</CVLId>
			<Key>kitchen</Key>
			<Index>3003</Index>
			<ParentKey>furniture</ParentKey>
			<Value>
				<string>
					<value language="en">
						<![CDATA[Kitchen]]>
					</value>
					<value language="nl">
						<![CDATA[Keuken]]>
					</value>
					<value language="fr">
						<![CDATA[Cuisine]]>
					</value>
					<value language="de">
						<![CDATA[Küche]]>
					</value>
					<value language="sv">
						<![CDATA[Kök]]>
					</value>
				</string>
			</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>MainCategory</CVLId>
			<Key>lighting</Key>
			<Index>3004</Index>
			<ParentKey>furniture</ParentKey>
			<Value>
				<string>
					<value language="en">
						<![CDATA[Lighting]]>
					</value>
					<value language="nl">
						<![CDATA[Verlichting]]>
					</value>
					<value language="fr">
						<![CDATA[Éclairage]]>
					</value>
					<value language="de">
						<![CDATA[Beleuchtung]]>
					</value>
					<value language="sv">
						<![CDATA[Belysning]]>
					</value>
				</string>
			</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>MainCategory</CVLId>
			<Key>living</Key>
			<Index>3005</Index>
			<ParentKey>furniture</ParentKey>
			<Value>
				<string>
					<value language="en">
						<![CDATA[Living Room]]>
					</value>
					<value language="nl">
						<![CDATA[Woonkamer]]>
					</value>
					<value language="fr">
						<![CDATA[Salle De Séjour]]>
					</value>
					<value language="de">
						<![CDATA[Wohnzimmer]]>
					</value>
					<value language="sv">
						<![CDATA[Vardagsrum]]>
					</value>
				</string>
			</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>MainCategory</CVLId>
			<Key>furnitureother</Key>
			<Index>3006</Index>
			<ParentKey>furniture</ParentKey>
			<Value>
				<string>
					<value language="en">
						<![CDATA[Other]]>
					</value>
					<value language="nl">
						<![CDATA[Anders]]>
					</value>
					<value language="fr">
						<![CDATA[Autre]]>
					</value>
					<value language="de">
						<![CDATA[Andere]]>
					</value>
					<value language="sv">
						<![CDATA[Andra]]>
					</value>
				</string>
			</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>MainCategory</CVLId>
			<Key>outdoor</Key>
			<Index>3007</Index>
			<ParentKey>furniture</ParentKey>
			<Value>
				<string>
					<value language="en">
						<![CDATA[Outdoor]]>
					</value>
					<value language="nl">
						<![CDATA[Outdoor]]>
					</value>
					<value language="fr">
						<![CDATA[De Plein Air]]>
					</value>
					<value language="de">
						<![CDATA[Im Freien]]>
					</value>
					<value language="sv">
						<![CDATA[Utomhus]]>
					</value>
				</string>
			</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>MainCategory</CVLId>
			<Key>storage</Key>
			<Index>3008</Index>
			<ParentKey>furniture</ParentKey>
			<Value>
				<string>
					<value language="en">
						<![CDATA[Storage]]>
					</value>
					<value language="nl">
						<![CDATA[Opslagruimte]]>
					</value>
					<value language="fr">
						<![CDATA[Stockage]]>
					</value>
					<value language="de">
						<![CDATA[Lagerung]]>
					</value>
					<value language="sv">
						<![CDATA[Lagring]]>
					</value>
				</string>
			</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>MainCategory</CVLId>
			<Key>AccesoriesSpareparts</Key>
			<Index>4001</Index>
			<ParentKey>manufacturing</ParentKey>
			<Value>
				<string>
					<value language="en">
						<![CDATA[Accessories and Spare Parts]]>
					</value>
					<value language="nl">
						<![CDATA[Accessoires en onderdelen]]>
					</value>
					<value language="fr">
						<![CDATA[Accessoires et pièces détachées]]>
					</value>
					<value language="de">
						<![CDATA[Zubehör und Ersatzteile]]>
					</value>
					<value language="sv">
						<![CDATA[Tillbehör och reservdelar]]>
					</value>
				</string>
			</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>MainCategory</CVLId>
			<Key>brakes</Key>
			<Index>4002</Index>
			<ParentKey>manufacturing</ParentKey>
			<Value>
				<string>
					<value language="en">
						<![CDATA[Brakes]]>
					</value>
					<value language="nl">
						<![CDATA[Remmen]]>
					</value>
					<value language="fr">
						<![CDATA[Freins]]>
					</value>
					<value language="de">
						<![CDATA[Bremsen]]>
					</value>
					<value language="sv">
						<![CDATA[Bromsar]]>
					</value>
				</string>
			</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>MainCategory</CVLId>
			<Key>LinearActuators</Key>
			<Index>4003</Index>
			<ParentKey>manufacturing</ParentKey>
			<Value>
				<string>
					<value language="en">
						<![CDATA[Linear Actuators]]>
					</value>
					<value language="nl">
						<![CDATA[Lineaire aandrijvingen]]>
					</value>
					<value language="fr">
						<![CDATA[Actionneurs linéaires]]>
					</value>
					<value language="de">
						<![CDATA[Linearaktuatoren]]>
					</value>
					<value language="sv">
						<![CDATA[Linjära ställdon]]>
					</value>
				</string>
			</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>MainCategory</CVLId>
			<Key>SolarConnections</Key>
			<Index>4004</Index>
			<ParentKey>manufacturing</ParentKey>
			<Value>
				<string>
					<value language="en">
						<![CDATA[Solar Connections]]>
					</value>
					<value language="nl">
						<![CDATA[Zonne-verbindingen]]>
					</value>
					<value language="fr">
						<![CDATA[Connexions solaires]]>
					</value>
					<value language="de">
						<![CDATA[Solar-Verbindungen]]>
					</value>
					<value language="sv">
						<![CDATA[Solanslutningar]]>
					</value>
				</string>
			</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>MainCategory</CVLId>
			<Key>Waterheaters</Key>
			<Index>4005</Index>
			<ParentKey>manufacturing</ParentKey>
			<Value>
				<string>
					<value language="en">
						<![CDATA[Water Heaters]]>
					</value>
					<value language="nl">
						<![CDATA[Waterkokers]]>
					</value>
					<value language="fr">
						<![CDATA[Chauffe-eau]]>
					</value>
					<value language="de">
						<![CDATA[Wasserkocher]]>
					</value>
					<value language="sv">
						<![CDATA[Varmvattenberedare]]>
					</value>
				</string>
			</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>TypeOfConfigurationPart</CVLId>
			<Key>BedMattress</Key>
			<Index>3001</Index>
			<ParentKey>furniture</ParentKey>
			<Value>
				<string>
					<value language="en">
						<![CDATA[Bed Mattress]]>
					</value>
					<value language="nl">
						<![CDATA[Matras]]>
					</value>
					<value language="fr">
						<![CDATA[Matelas De Lit]]>
					</value>
					<value language="de">
						<![CDATA[Bettmatratze]]>
					</value>
					<value language="sv">
						<![CDATA[Bäddmadrasser]]>
					</value>
				</string>
			</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>TypeOfConfigurationPart</CVLId>
			<Key>Legs</Key>
			<Index>3002</Index>
			<ParentKey>furniture</ParentKey>
			<Value>
				<string>
					<value language="en">
						<![CDATA[Legs]]>
					</value>
					<value language="nl">
						<![CDATA[Benen]]>
					</value>
					<value language="fr">
						<![CDATA[Jambes]]>
					</value>
					<value language="de">
						<![CDATA[Beine]]>
					</value>
					<value language="sv">
						<![CDATA[Ben]]>
					</value>
				</string>
			</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>TypeOfConfigurationPart</CVLId>
			<Key>Mattress</Key>
			<Index>3003</Index>
			<ParentKey>furniture</ParentKey>
			<Value>
				<string>
					<value language="en">
						<![CDATA[Mattress]]>
					</value>
					<value language="nl">
						<![CDATA[Matras]]>
					</value>
					<value language="fr">
						<![CDATA[Matelas]]>
					</value>
					<value language="de">
						<![CDATA[Matratze]]>
					</value>
					<value language="sv">
						<![CDATA[Madrasser]]>
					</value>
				</string>
			</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>SubCategory</CVLId>
			<Key>bags</Key>
			<Index>1101</Index>
			<ParentKey>accessories</ParentKey>
			<Value>
				<string>
					<value language="en">
						<![CDATA[Bags]]>
					</value>
					<value language="nl">
						<![CDATA[Tassen]]>
					</value>
					<value language="fr">
						<![CDATA[Des sacs]]>
					</value>
					<value language="de">
						<![CDATA[Taschen]]>
					</value>
					<value language="sv">
						<![CDATA[Väskor]]>
					</value>
				</string>
			</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>SubCategory</CVLId>
			<Key>gloves</Key>
			<Index>1102</Index>
			<ParentKey>accessories</ParentKey>
			<Value>
				<string>
					<value language="en">
						<![CDATA[Gloves]]>
					</value>
					<value language="nl">
						<![CDATA[Handschoenen]]>
					</value>
					<value language="fr">
						<![CDATA[Des gants]]>
					</value>
					<value language="de">
						<![CDATA[Handschuhe]]>
					</value>
					<value language="sv">
						<![CDATA[Handskar]]>
					</value>
				</string>
			</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>SubCategory</CVLId>
			<Key>scarfs</Key>
			<Index>1103</Index>
			<ParentKey>accessories</ParentKey>
			<Value>
				<string>
					<value language="en">
						<![CDATA[Scarfs]]>
					</value>
					<value language="nl">
						<![CDATA[Sjaal]]>
					</value>
					<value language="fr">
						<![CDATA[Écharpe]]>
					</value>
					<value language="de">
						<![CDATA[Schal]]>
					</value>
					<value language="sv">
						<![CDATA[Sjalar]]>
					</value>
				</string>
			</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>SubCategory</CVLId>
			<Key>other</Key>
			<Index>1199</Index>
			<ParentKey>accessories</ParentKey>
			<Value>
				<string>
					<value language="en">
						<![CDATA[Other]]>
					</value>
					<value language="nl">
						<![CDATA[Anders]]>
					</value>
					<value language="fr">
						<![CDATA[Autre]]>
					</value>
					<value language="de">
						<![CDATA[Andere]]>
					</value>
					<value language="sv">
						<![CDATA[Övrigt]]>
					</value>
				</string>
			</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>SubCategory</CVLId>
			<Key>blazers</Key>
			<Index>1201</Index>
			<ParentKey>jacket</ParentKey>
			<Value>
				<string>
					<value language="en">
						<![CDATA[Blazers]]>
					</value>
					<value language="nl">
						<![CDATA[Colbert]]>
					</value>
					<value language="fr">
						<![CDATA[Blazer]]>
					</value>
					<value language="de">
						<![CDATA[Sakko]]>
					</value>
					<value language="sv">
						<![CDATA[Kavaj]]>
					</value>
				</string>
			</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>SubCategory</CVLId>
			<Key>casual</Key>
			<Index>1202</Index>
			<ParentKey>jacket</ParentKey>
			<Value>
				<string>
					<value language="en">
						<![CDATA[Casual]]>
					</value>
					<value language="nl">
						<![CDATA[Toevallig]]>
					</value>
					<value language="fr">
						<![CDATA[Désinvolte]]>
					</value>
					<value language="de">
						<![CDATA[Lässig]]>
					</value>
					<value language="sv">
						<![CDATA[Casual]]>
					</value>
				</string>
			</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>SubCategory</CVLId>
			<Key>chinos</Key>
			<Index>1301</Index>
			<ParentKey>pant</ParentKey>
			<Value>
				<string>
					<value language="en">
						<![CDATA[Chinos]]>
					</value>
					<value language="nl">
						<![CDATA[Chinos]]>
					</value>
					<value language="fr">
						<![CDATA[Chinos]]>
					</value>
					<value language="de">
						<![CDATA[Chinos]]>
					</value>
					<value language="sv">
						<![CDATA[Chinos]]>
					</value>
				</string>
			</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>SubCategory</CVLId>
			<Key>jeans</Key>
			<Index>1302</Index>
			<ParentKey>pant</ParentKey>
			<Value>
				<string>
					<value language="en">
						<![CDATA[Jeans]]>
					</value>
					<value language="nl">
						<![CDATA[Jeans]]>
					</value>
					<value language="fr">
						<![CDATA[Jeans]]>
					</value>
					<value language="de">
						<![CDATA[Jeans]]>
					</value>
					<value language="sv">
						<![CDATA[Jeans]]>
					</value>
				</string>
			</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>SubCategory</CVLId>
			<Key>shirts</Key>
			<Index>1401</Index>
			<ParentKey>topshirt</ParentKey>
			<Value>
				<string>
					<value language="en">
						<![CDATA[Shirts]]>
					</value>
					<value language="nl">
						<![CDATA[Shirts]]>
					</value>
					<value language="fr">
						<![CDATA[Shirts]]>
					</value>
					<value language="de">
						<![CDATA[Hemden]]>
					</value>
					<value language="sv">
						<![CDATA[Tröjor]]>
					</value>
				</string>
			</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>SubCategory</CVLId>
			<Key>FashionHeadphones</Key>
			<Index>1501</Index>
			<ParentKey>FashionElectronics</ParentKey>
			<Value>
				<string>
					<value language="en">
						<![CDATA[Headphones]]>
					</value>
					<value language="nl">
						<![CDATA[Hoofdtelefoon]]>
					</value>
					<value language="fr">
						<![CDATA[Casque d’écoute]]>
					</value>
					<value language="de">
						<![CDATA[Kopfhörer]]>
					</value>
					<value language="sv">
						<![CDATA[Hörlurar]]>
					</value>
				</string>
			</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>SubCategory</CVLId>
			<Key>accesories</Key>
			<Index>2101</Index>
			<ParentKey>flooring</ParentKey>
			<Value>
				<string>
					<value language="en">
						<![CDATA[Accessories]]>
					</value>
					<value language="nl">
						<![CDATA[Accessoires]]>
					</value>
					<value language="fr">
						<![CDATA[Accessoires]]>
					</value>
					<value language="de">
						<![CDATA[Zubehör]]>
					</value>
					<value language="sv">
						<![CDATA[Tillbehör]]>
					</value>
				</string>
			</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>SubCategory</CVLId>
			<Key>edging</Key>
			<Index>2102</Index>
			<ParentKey>flooring</ParentKey>
			<Value>
				<string>
					<value language="en">
						<![CDATA[Edging]]>
					</value>
					<value language="nl">
						<![CDATA[Rand]]>
					</value>
					<value language="fr">
						<![CDATA[Bordure]]>
					</value>
					<value language="de">
						<![CDATA[Borte]]>
					</value>
					<value language="sv">
						<![CDATA[Kantning]]>
					</value>
				</string>
			</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>SubCategory</CVLId>
			<Key>installationaccessories</Key>
			<Index>2103</Index>
			<ParentKey>flooring</ParentKey>
			<Value>
				<string>
					<value language="en">
						<![CDATA[Installation Accessories]]>
					</value>
					<value language="nl">
						<![CDATA[Installatie Accessoires]]>
					</value>
					<value language="fr">
						<![CDATA[Accessoires D'Installation]]>
					</value>
					<value language="de">
						<![CDATA[Installationszubehör]]>
					</value>
					<value language="sv">
						<![CDATA[Installationstillbehör]]>
					</value>
				</string>
			</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>SubCategory</CVLId>
			<Key>laminate</Key>
			<Index>2104</Index>
			<ParentKey>flooring</ParentKey>
			<Value>
				<string>
					<value language="en">
						<![CDATA[Laminate]]>
					</value>
					<value language="nl">
						<![CDATA[Laminaat]]>
					</value>
					<value language="fr">
						<![CDATA[Stratifiés]]>
					</value>
					<value language="de">
						<![CDATA[Laminieren]]>
					</value>
					<value language="sv">
						<![CDATA[Laminat]]>
					</value>
				</string>
			</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>SubCategory</CVLId>
			<Key>laminateunderlay</Key>
			<Index>2105</Index>
			<ParentKey>flooring</ParentKey>
			<Value>
				<string>
					<value language="en">
						<![CDATA[Laminate Underlay]]>
					</value>
					<value language="nl">
						<![CDATA[Laminaat Onderlaag]]>
					</value>
					<value language="fr">
						<![CDATA[Stratifié Thibaude]]>
					</value>
					<value language="de">
						<![CDATA[Laminatunterlage]]>
					</value>
					<value language="sv">
						<![CDATA[Laminat Underlag]]>
					</value>
				</string>
			</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>SubCategory</CVLId>
			<Key>careproducts</Key>
			<Index>2106</Index>
			<ParentKey>furnitureother</ParentKey>
			<Value>
				<string>
					<value language="en">
						<![CDATA[Care Products]]>
					</value>
					<value language="nl">
						<![CDATA[Care Products]]>
					</value>
					<value language="fr">
						<![CDATA[Produits D'Entretien]]>
					</value>
					<value language="de">
						<![CDATA[Pflegeprodukte]]>
					</value>
					<value language="sv">
						<![CDATA[Hygienprodukter]]>
					</value>
				</string>
			</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>SubCategory</CVLId>
			<Key>anglegrindersmetalworking</Key>
			<Index>2201</Index>
			<ParentKey>powertools</ParentKey>
			<Value>
				<string>
					<value language="en">
						<![CDATA[Angle Grinders & Metalworking]]>
					</value>
					<value language="nl">
						<![CDATA[Haakse Slijpers En Metaalbewerking]]>
					</value>
					<value language="fr">
						<![CDATA[Meuleuses Angulaires Et Travail Des Métaux]]>
					</value>
					<value language="de">
						<![CDATA[Winkelschleifer Und Metallverarbeitung]]>
					</value>
					<value language="sv">
						<![CDATA[Vinkelslipar Och Metallbearbetning]]>
					</value>
				</string>
			</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>SubCategory</CVLId>
			<Key>batterychargers</Key>
			<Index>2202</Index>
			<ParentKey>powertools</ParentKey>
			<Value>
				<string>
					<value language="en">
						<![CDATA[Battery Chargers]]>
					</value>
					<value language="nl">
						<![CDATA[Opladers]]>
					</value>
					<value language="fr">
						<![CDATA[Chargeurs De Batterie]]>
					</value>
					<value language="de">
						<![CDATA[Batterieladegeräte]]>
					</value>
					<value language="sv">
						<![CDATA[Batteri]]>
					</value>
				</string>
			</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>SubCategory</CVLId>
			<Key>benchtoptoolsstands</Key>
			<Index>2203</Index>
			<ParentKey>powertools</ParentKey>
			<Value>
				<string>
					<value language="en">
						<![CDATA[Benchtop Tools & Stands]]>
					</value>
					<value language="nl">
						<![CDATA[Stationaire Toestellen & Stands]]>
					</value>
					<value language="fr">
						<![CDATA[Paillasse Outils Et Supports]]>
					</value>
					<value language="de">
						<![CDATA[Stationärgeräte -Ständer]]>
					</value>
					<value language="sv">
						<![CDATA[Stationärmaskiner Och Stativ]]>
					</value>
				</string>
			</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>SubCategory</CVLId>
			<Key>boschmobilitysystem</Key>
			<Index>2204</Index>
			<ParentKey>powertools</ParentKey>
			<Value>
				<string>
					<value language="en">
						<![CDATA[Bosch Mobility System]]>
					</value>
					<value language="nl">
						<![CDATA[Bosch Mobility System]]>
					</value>
					<value language="fr">
						<![CDATA[Mobility System Bosch]]>
					</value>
					<value language="de">
						<![CDATA[Bosch Mobility System]]>
					</value>
					<value language="sv">
						<![CDATA[Bosch Mobility System]]>
					</value>
				</string>
			</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>SubCategory</CVLId>
			<Key>cordlesstools</Key>
			<Index>2205</Index>
			<ParentKey>powertools</ParentKey>
			<Value>
				<string>
					<value language="en">
						<![CDATA[Cordless Tools]]>
					</value>
					<value language="nl">
						<![CDATA[Accu-Machines]]>
					</value>
					<value language="fr">
						<![CDATA[Outils Sans Fil]]>
					</value>
					<value language="de">
						<![CDATA[Akku-Werkzeuge]]>
					</value>
					<value language="sv">
						<![CDATA[Sladdlösa  Verktyg]]>
					</value>
				</string>
			</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>SubCategory</CVLId>
			<Key>diamondtechnology</Key>
			<Index>2206</Index>
			<ParentKey>powertools</ParentKey>
			<Value>
				<string>
					<value language="en">
						<![CDATA[Diamond Technology]]>
					</value>
					<value language="nl">
						<![CDATA[Diamond Technology]]>
					</value>
					<value language="fr">
						<![CDATA[Diamond Technology]]>
					</value>
					<value language="de">
						<![CDATA[Diamond-Technologie]]>
					</value>
					<value language="sv">
						<![CDATA[Diamant Teknologi]]>
					</value>
				</string>
			</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>SubCategory</CVLId>
			<Key>drillsimpactdrills</Key>
			<Index>2207</Index>
			<ParentKey>powertools</ParentKey>
			<Value>
				<string>
					<value language="en">
						<![CDATA[Drills & Impact Drills]]>
					</value>
					<value language="nl">
						<![CDATA[Boren & Klopboormachines]]>
					</value>
					<value language="fr">
						<![CDATA[Perceuses Et Perceuses À Percussion]]>
					</value>
					<value language="de">
						<![CDATA[Bohrer & Schlagbohrmaschinen]]>
					</value>
					<value language="sv">
						<![CDATA[Borr Och Slagborrmaskiner]]>
					</value>
				</string>
			</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>SubCategory</CVLId>
			<Key>heatgungluegun</Key>
			<Index>2208</Index>
			<ParentKey>powertools</ParentKey>
			<Value>
				<string>
					<value language="en">
						<![CDATA[Heat Gun & Glue Gun]]>
					</value>
					<value language="nl">
						<![CDATA[Heat Gun & Lijmpistool]]>
					</value>
					<value language="fr">
						<![CDATA[Pistolet Thermique Et Pistolet À Colle]]>
					</value>
					<value language="de">
						<![CDATA[Heißluftgebläse  & Klebepistole]]>
					</value>
					<value language="sv">
						<![CDATA[Värmepistol Och Limppistol]]>
					</value>
				</string>
			</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>SubCategory</CVLId>
			<Key>lawnmowers</Key>
			<Index>2209</Index>
			<ParentKey>powertools</ParentKey>
			<Value>
				<string>
					<value language="en">
						<![CDATA[Lawn mowers]]>
					</value>
					<value language="nl">
						<![CDATA[Grasmaaiers]]>
					</value>
					<value language="fr">
						<![CDATA[Tondeuses à gazon]]>
					</value>
					<value language="de">
						<![CDATA[Rasenmäher]]>
					</value>
					<value language="sv">
						<![CDATA[Gräsklippare]]>
					</value>
				</string>
			</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>SubCategory</CVLId>
			<Key>LeafBlowers</Key>
			<Index>2210</Index>
			<ParentKey>powertools</ParentKey>
			<Value>
				<string>
					<value language="en">
						<![CDATA[Leaf Blowers]]>
					</value>
					<value language="nl">
						<![CDATA[Bladblazers]]>
					</value>
					<value language="fr">
						<![CDATA[Souffleuses à feuilles]]>
					</value>
					<value language="de">
						<![CDATA[Laubbläser]]>
					</value>
					<value language="sv">
						<![CDATA[Lövblåsare]]>
					</value>
				</string>
			</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>SubCategory</CVLId>
			<Key>measuringtechnology</Key>
			<Index>2211</Index>
			<ParentKey>powertools</ParentKey>
			<Value>
				<string>
					<value language="en">
						<![CDATA[Measuring Technology]]>
					</value>
					<value language="nl">
						<![CDATA[Meettechniek]]>
					</value>
					<value language="fr">
						<![CDATA[Technologie De Mesure]]>
					</value>
					<value language="de">
						<![CDATA[Messtechnik]]>
					</value>
					<value language="sv">
						<![CDATA[Mätteknik]]>
					</value>
				</string>
			</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>SubCategory</CVLId>
			<Key>multitool</Key>
			<Index>2212</Index>
			<ParentKey>powertools</ParentKey>
			<Value>
				<string>
					<value language="en">
						<![CDATA[Multitool]]>
					</value>
					<value language="nl">
						<![CDATA[Multitool]]>
					</value>
					<value language="fr">
						<![CDATA[Multitool]]>
					</value>
					<value language="de">
						<![CDATA[Multi]]>
					</value>
					<value language="sv">
						<![CDATA[Multi]]>
					</value>
				</string>
			</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>SubCategory</CVLId>
			<Key>powertoolsaccessories</Key>
			<Index>2213</Index>
			<ParentKey>powertools</ParentKey>
			<Value>
				<string>
					<value language="en">
						<![CDATA[Power Tools Accessories]]>
					</value>
					<value language="nl">
						<![CDATA[Elektrisch Gereedschap Toebehoren]]>
					</value>
					<value language="fr">
						<![CDATA[Accessoires Outils Électriques]]>
					</value>
					<value language="de">
						<![CDATA[Elektrowerkzeuge  Zubehör]]>
					</value>
					<value language="sv">
						<![CDATA[Elverktygs Tillbehör]]>
					</value>
				</string>
			</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>SubCategory</CVLId>
			<Key>professionalgardentools</Key>
			<Index>2214</Index>
			<ParentKey>powertools</ParentKey>
			<Value>
				<string>
					<value language="en">
						<![CDATA[Professional Garden Tools]]>
					</value>
					<value language="nl">
						<![CDATA[Professioneel Tuingereedschap]]>
					</value>
					<value language="fr">
						<![CDATA[Outils De Jardin Professionnels]]>
					</value>
					<value language="de">
						<![CDATA[Professionelle Gartengeräte]]>
					</value>
					<value language="sv">
						<![CDATA[Professionella Trädgårdsredskap]]>
					</value>
				</string>
			</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>SubCategory</CVLId>
			<Key>rotaryhammersdemolitionhammers</Key>
			<Index>2215</Index>
			<ParentKey>powertools</ParentKey>
			<Value>
				<string>
					<value language="en">
						<![CDATA[Rotary Hammers & Demolition Hammers]]>
					</value>
					<value language="nl">
						<![CDATA[Rotary & Breekhamers]]>
					</value>
					<value language="fr">
						<![CDATA[Marteaux Rotatifs Et Démolition Marteaux]]>
					</value>
					<value language="de">
						<![CDATA[Bohrhämmer & Abbruchhämmer]]>
					</value>
					<value language="sv">
						<![CDATA[Borrhammare Och Slaghammare]]>
					</value>
				</string>
			</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>SubCategory</CVLId>
			<Key>routers</Key>
			<Index>2216</Index>
			<ParentKey>powertools</ParentKey>
			<Value>
				<string>
					<value language="en">
						<![CDATA[Routers]]>
					</value>
					<value language="nl">
						<![CDATA[Routers]]>
					</value>
					<value language="fr">
						<![CDATA[Routeur]]>
					</value>
					<value language="de">
						<![CDATA[Router]]>
					</value>
					<value language="sv">
						<![CDATA[Router]]>
					</value>
				</string>
			</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>SubCategory</CVLId>
			<Key>sandersplaners</Key>
			<Index>2217</Index>
			<ParentKey>powertools</ParentKey>
			<Value>
				<string>
					<value language="en">
						<![CDATA[Sanders & Planers]]>
					</value>
					<value language="nl">
						<![CDATA[Sanders & Plannen]]>
					</value>
					<value language="fr">
						<![CDATA[Sanders & Raboteuses]]>
					</value>
					<value language="de">
						<![CDATA[Sanders & Hobel]]>
					</value>
					<value language="sv">
						<![CDATA[Slipmaskiner & Hyvlar]]>
					</value>
				</string>
			</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>SubCategory</CVLId>
			<Key>saws</Key>
			<Index>2218</Index>
			<ParentKey>powertools</ParentKey>
			<Value>
				<string>
					<value language="en">
						<![CDATA[Saws]]>
					</value>
					<value language="nl">
						<![CDATA[Zagen]]>
					</value>
					<value language="fr">
						<![CDATA[Scies]]>
					</value>
					<value language="de">
						<![CDATA[Sägen]]>
					</value>
					<value language="sv">
						<![CDATA[Sågar]]>
					</value>
				</string>
			</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>SubCategory</CVLId>
			<Key>screwdriversimpactwrenches</Key>
			<Index>2219</Index>
			<ParentKey>powertools</ParentKey>
			<Value>
				<string>
					<value language="en">
						<![CDATA[Screwdrivers & Impact Wrenches]]>
					</value>
					<value language="nl">
						<![CDATA[Schroevendraaiers & Slagmoersleutels]]>
					</value>
					<value language="fr">
						<![CDATA[Tournevis & Clés À Chocs]]>
					</value>
					<value language="de">
						<![CDATA[Schrauber & Schlagschrauber]]>
					</value>
					<value language="sv">
						<![CDATA[Skruvdragare & Mutterdragare]]>
					</value>
				</string>
			</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>SubCategory</CVLId>
			<Key>serviceairtools</Key>
			<Index>2220</Index>
			<ParentKey>powertools</ParentKey>
			<Value>
				<string>
					<value language="en">
						<![CDATA[Service Air Tools]]>
					</value>
					<value language="nl">
						<![CDATA[Dienst Air Tools]]>
					</value>
					<value language="fr">
						<![CDATA[Service Aérien Outils]]>
					</value>
					<value language="de">
						<![CDATA[Service- Druckluft -Werkzeuge]]>
					</value>
					<value language="sv">
						<![CDATA[Air Tools]]>
					</value>
				</string>
			</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>SubCategory</CVLId>
			<Key>workwear</Key>
			<Index>2221</Index>
			<ParentKey>powertools</ParentKey>
			<Value>
				<string>
					<value language="en">
						<![CDATA[Workwear]]>
					</value>
					<value language="nl">
						<![CDATA[Workwear]]>
					</value>
					<value language="fr">
						<![CDATA[Workwear]]>
					</value>
					<value language="de">
						<![CDATA[Berufsbekleidung]]>
					</value>
					<value language="sv">
						<![CDATA[Arbetskläder]]>
					</value>
				</string>
			</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>SubCategory</CVLId>
			<Key>BatteryPack</Key>
			<Index>2222</Index>
			<ParentKey>powertools</ParentKey>
			<Value>
				<string>
					<value language="en">
						<![CDATA[Battery Pack]]>
					</value>
				</string>
			</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>SubCategory</CVLId>
			<Key>bathtubs</Key>
			<Index>3101</Index>
			<ParentKey>bathroom</ParentKey>
			<Value>
				<string>
					<value language="en">
						<![CDATA[Bath Tubs]]>
					</value>
					<value language="nl">
						<![CDATA[Badkuipen]]>
					</value>
					<value language="fr">
						<![CDATA[Baignoires]]>
					</value>
					<value language="de">
						<![CDATA[Badewannen]]>
					</value>
					<value language="sv">
						<![CDATA[Badkar]]>
					</value>
				</string>
			</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>SubCategory</CVLId>
			<Key>bathroomfurniture</Key>
			<Index>3102</Index>
			<ParentKey>bathroom</ParentKey>
			<Value>
				<string>
					<value language="en">
						<![CDATA[Bathroom Furniture]]>
					</value>
					<value language="nl">
						<![CDATA[Badkamermeubels]]>
					</value>
					<value language="fr">
						<![CDATA[Meubles De Salle]]>
					</value>
					<value language="de">
						<![CDATA[Badezimmermöbel]]>
					</value>
					<value language="sv">
						<![CDATA[Badrumsmöbler]]>
					</value>
				</string>
			</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>SubCategory</CVLId>
			<Key>bathroomsinks</Key>
			<Index>3103</Index>
			<ParentKey>bathroom</ParentKey>
			<Value>
				<string>
					<value language="en">
						<![CDATA[Bathroom Sinks]]>
					</value>
					<value language="nl">
						<![CDATA[Wastafels]]>
					</value>
					<value language="fr">
						<![CDATA[Les Lavabos]]>
					</value>
					<value language="de">
						<![CDATA[Bad Waschbecken]]>
					</value>
					<value language="sv">
						<![CDATA[Badrumshandfat]]>
					</value>
				</string>
			</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>SubCategory</CVLId>
			<Key>mixers</Key>
			<Index>3104</Index>
			<ParentKey>bathroom</ParentKey>
			<Value>
				<string>
					<value language="en">
						<![CDATA[Mixers]]>
					</value>
					<value language="nl">
						<![CDATA[Mixers]]>
					</value>
					<value language="fr">
						<![CDATA[Mélangeurs]]>
					</value>
					<value language="de">
						<![CDATA[Mischer]]>
					</value>
					<value language="sv">
						<![CDATA[Blandare]]>
					</value>
				</string>
			</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>SubCategory</CVLId>
			<Key>washbowls</Key>
			<Index>3105</Index>
			<ParentKey>bathroom</ParentKey>
			<Value>
				<string>
					<value language="en">
						<![CDATA[Wash Bowls]]>
					</value>
					<value language="nl">
						<![CDATA[Waskommen]]>
					</value>
					<value language="fr">
						<![CDATA[Bols Laver]]>
					</value>
					<value language="de">
						<![CDATA[Waschschüsseln]]>
					</value>
					<value language="sv">
						<![CDATA[Tvättskålar]]>
					</value>
				</string>
			</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>SubCategory</CVLId>
			<Key>bedroomcarpets</Key>
			<Index>3201</Index>
			<ParentKey>bedroom</ParentKey>
			<Value>
				<string>
					<value language="en">
						<![CDATA[Bedroom Carpets]]>
					</value>
					<value language="nl">
						<![CDATA[Slaapkamer Tapijten]]>
					</value>
					<value language="fr">
						<![CDATA[Tapis De Chambre À Coucher]]>
					</value>
					<value language="de">
						<![CDATA[Schlafzimmer Teppiche]]>
					</value>
					<value language="sv">
						<![CDATA[Sovrumsmattor]]>
					</value>
				</string>
			</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>SubCategory</CVLId>
			<Key>bedroomfurniture</Key>
			<Index>3202</Index>
			<ParentKey>bedroom</ParentKey>
			<Value>
				<string>
					<value language="en">
						<![CDATA[Bedroom Furniture]]>
					</value>
					<value language="nl">
						<![CDATA[Slaapkamermeubilair]]>
					</value>
					<value language="fr">
						<![CDATA[Mobilier De Chambre]]>
					</value>
					<value language="de">
						<![CDATA[Schlafzimmermöbel]]>
					</value>
					<value language="sv">
						<![CDATA[Sovrumsmöbler]]>
					</value>
				</string>
			</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>SubCategory</CVLId>
			<Key>bedroompillows</Key>
			<Index>3203</Index>
			<ParentKey>bedroom</ParentKey>
			<Value>
				<string>
					<value language="en">
						<![CDATA[Bedroom Pillows]]>
					</value>
					<value language="nl">
						<![CDATA[Slaapkamer Kussens]]>
					</value>
					<value language="fr">
						<![CDATA[Oreillers Chambre]]>
					</value>
					<value language="de">
						<![CDATA[Schlafzimmer Kissen]]>
					</value>
					<value language="sv">
						<![CDATA[Sovrumskuddar]]>
					</value>
				</string>
			</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>SubCategory</CVLId>
			<Key>beds</Key>
			<Index>3204</Index>
			<ParentKey>bedroom</ParentKey>
			<Value>
				<string>
					<value language="en">
						<![CDATA[Beds]]>
					</value>
					<value language="nl">
						<![CDATA[Bedden]]>
					</value>
					<value language="fr">
						<![CDATA[Lits]]>
					</value>
					<value language="de">
						<![CDATA[Betten]]>
					</value>
					<value language="sv">
						<![CDATA[Sängar]]>
					</value>
				</string>
			</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>SubCategory</CVLId>
			<Key>diningtableset</Key>
			<Index>3301</Index>
			<ParentKey>kitchen</ParentKey>
			<Value>
				<string>
					<value language="en">
						<![CDATA[Dining Room Tables and Chairs Set]]>
					</value>
					<value language="nl">
						<![CDATA[Eetkamer tafels en stoelen Set]]>
					</value>
					<value language="fr">
						<![CDATA[Salle à manger Tables et chaises]]>
					</value>
					<value language="de">
						<![CDATA[Esstische und Stühle Set]]>
					</value>
					<value language="sv">
						<![CDATA[Matsal bord och stolar]]>
					</value>
				</string>
			</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>SubCategory</CVLId>
			<Key>table</Key>
			<Index>3302</Index>
			<ParentKey>kitchen</ParentKey>
			<Value>
				<string>
					<value language="en">
						<![CDATA[Dining Table]]>
					</value>
					<value language="nl">
						<![CDATA[Eettafel]]>
					</value>
					<value language="fr">
						<![CDATA[Table à manger]]>
					</value>
					<value language="de">
						<![CDATA[Esstisch]]>
					</value>
					<value language="sv">
						<![CDATA[Matbord]]>
					</value>
				</string>
			</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>SubCategory</CVLId>
			<Key>kitchenchairs</Key>
			<Index>3304</Index>
			<ParentKey>kitchen</ParentKey>
			<Value>
				<string>
					<value language="en">
						<![CDATA[Kitchen Chairs]]>
					</value>
					<value language="nl">
						<![CDATA[Keukenstoelen]]>
					</value>
					<value language="fr">
						<![CDATA[Chaises De Cuisine]]>
					</value>
					<value language="de">
						<![CDATA[Küchenstühle]]>
					</value>
					<value language="sv">
						<![CDATA[Köksstolar]]>
					</value>
				</string>
			</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>SubCategory</CVLId>
			<Key>kitchenlamps</Key>
			<Index>3305</Index>
			<ParentKey>kitchen</ParentKey>
			<Value>
				<string>
					<value language="en">
						<![CDATA[Kitchen Lamps]]>
					</value>
					<value language="nl">
						<![CDATA[Kitchen Lampen]]>
					</value>
					<value language="fr">
						<![CDATA[Lampes De Cuisine]]>
					</value>
					<value language="de">
						<![CDATA[Küchenleuchten]]>
					</value>
					<value language="sv">
						<![CDATA[Kök Lampor]]>
					</value>
				</string>
			</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>SubCategory</CVLId>
			<Key>tiles</Key>
			<Index>3306</Index>
			<ParentKey>kitchen</ParentKey>
			<Value>
				<string>
					<value language="en">
						<![CDATA[Tiles]]>
					</value>
					<value language="nl">
						<![CDATA[Tegels]]>
					</value>
					<value language="fr">
						<![CDATA[Carrelage]]>
					</value>
					<value language="de">
						<![CDATA[Fliesen]]>
					</value>
					<value language="sv">
						<![CDATA[Plattor]]>
					</value>
				</string>
			</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>SubCategory</CVLId>
			<Key>ceiling</Key>
			<Index>3401</Index>
			<ParentKey>lighting</ParentKey>
			<Value>
				<string>
					<value language="en">
						<![CDATA[Ceiling]]>
					</value>
					<value language="nl">
						<![CDATA[Plafond]]>
					</value>
					<value language="fr">
						<![CDATA[Plafond]]>
					</value>
					<value language="de">
						<![CDATA[Decke]]>
					</value>
					<value language="sv">
						<![CDATA[Tak]]>
					</value>
				</string>
			</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>SubCategory</CVLId>
			<Key>carpets</Key>
			<Index>3501</Index>
			<ParentKey>living</ParentKey>
			<Value>
				<string>
					<value language="en">
						<![CDATA[Carpets]]>
					</value>
					<value language="nl">
						<![CDATA[Tapijten]]>
					</value>
					<value language="fr">
						<![CDATA[Tapis]]>
					</value>
					<value language="de">
						<![CDATA[Teppiche]]>
					</value>
					<value language="sv">
						<![CDATA[Mattor]]>
					</value>
				</string>
			</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>SubCategory</CVLId>
			<Key>chairs</Key>
			<Index>3502</Index>
			<ParentKey>living</ParentKey>
			<Value>
				<string>
					<value language="en">
						<![CDATA[Chairs]]>
					</value>
					<value language="nl">
						<![CDATA[Stoelen]]>
					</value>
					<value language="fr">
						<![CDATA[Chaises]]>
					</value>
					<value language="de">
						<![CDATA[Stühle]]>
					</value>
					<value language="sv">
						<![CDATA[Stolar]]>
					</value>
				</string>
			</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>SubCategory</CVLId>
			<Key>lamps</Key>
			<Index>3503</Index>
			<ParentKey>living</ParentKey>
			<Value>
				<string>
					<value language="en">
						<![CDATA[Lamps]]>
					</value>
					<value language="nl">
						<![CDATA[Lampen]]>
					</value>
					<value language="fr">
						<![CDATA[Lampes]]>
					</value>
					<value language="de">
						<![CDATA[Lampen]]>
					</value>
					<value language="sv">
						<![CDATA[Lampor]]>
					</value>
				</string>
			</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>SubCategory</CVLId>
			<Key>sectionalsofs</Key>
			<Index>3504</Index>
			<ParentKey>living</ParentKey>
			<Value>
				<string>
					<value language="en">
						<![CDATA[Sectional Sofas]]>
					</value>
					<value language="nl">
						<![CDATA[Sectionele banken]]>
					</value>
					<value language="fr">
						<![CDATA[Sofas sectionnels]]>
					</value>
					<value language="de">
						<![CDATA[Schnittsofas]]>
					</value>
					<value language="sv">
						<![CDATA[Sektionssoffor]]>
					</value>
				</string>
			</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>SubCategory</CVLId>
			<Key>sofas</Key>
			<Index>3505</Index>
			<ParentKey>living</ParentKey>
			<Value>
				<string>
					<value language="en">
						<![CDATA[Sofas]]>
					</value>
					<value language="nl">
						<![CDATA[Zitbanken]]>
					</value>
					<value language="fr">
						<![CDATA[Sofas]]>
					</value>
					<value language="de">
						<![CDATA[Sofas]]>
					</value>
					<value language="sv">
						<![CDATA[Soffor]]>
					</value>
				</string>
			</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>SubCategory</CVLId>
			<Key>tables</Key>
			<Index>3506</Index>
			<ParentKey>living</ParentKey>
			<Value>
				<string>
					<value language="en">
						<![CDATA[Tables]]>
					</value>
					<value language="nl">
						<![CDATA[Tafels]]>
					</value>
					<value language="fr">
						<![CDATA[Tables]]>
					</value>
					<value language="de">
						<![CDATA[Tabellen]]>
					</value>
					<value language="sv">
						<![CDATA[Bord]]>
					</value>
				</string>
			</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>SubCategory</CVLId>
			<Key>hammocks</Key>
			<Index>3601</Index>
			<ParentKey>outdoor</ParentKey>
			<Value>
				<string>
					<value language="en">
						<![CDATA[Hammocks]]>
					</value>
					<value language="nl">
						<![CDATA[Hangmatten]]>
					</value>
					<value language="fr">
						<![CDATA[Hamacs]]>
					</value>
					<value language="de">
						<![CDATA[Hängematten]]>
					</value>
					<value language="sv">
						<![CDATA[Hängmattor]]>
					</value>
				</string>
			</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>SubCategory</CVLId>
			<Key>shelvingbookcases</Key>
			<Index>3701</Index>
			<ParentKey>storage</ParentKey>
			<Value>
				<string>
					<value language="en">
						<![CDATA[Shelving & Bookcases]]>
					</value>
					<value language="nl">
						<![CDATA[Stellingen & Boekenkasten]]>
					</value>
					<value language="fr">
						<![CDATA[Étagères et Bibliothèques]]>
					</value>
					<value language="de">
						<![CDATA[Regale und Schränke für die Bücher]]>
					</value>
					<value language="sv">
						<![CDATA[Hyllor & Bokhyllor]]>
					</value>
				</string>
			</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>SubCategory</CVLId>
			<Key>LawnMowerBag</Key>
			<Index>4101</Index>
			<ParentKey>AccesoriesSpareparts</ParentKey>
			<Value>
				<string>
					<value language="en">
						<![CDATA[Lawn Mower Bag]]>
					</value>
					<value language="nl">
						<![CDATA[Grasmaaier tas]]>
					</value>
					<value language="fr">
						<![CDATA[Sac de tondeuse à gazon]]>
					</value>
					<value language="de">
						<![CDATA[Rasenmäher-Tasche]]>
					</value>
					<value language="sv">
						<![CDATA[Gräsklipparpåse]]>
					</value>
				</string>
			</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>SubCategory</CVLId>
			<Key>brakeaccessories</Key>
			<Index>4101</Index>
			<ParentKey>brakes</ParentKey>
			<Value>
				<string>
					<value language="en">
						<![CDATA[Accessories]]>
					</value>
					<value language="nl">
						<![CDATA[Accessoires]]>
					</value>
					<value language="fr">
						<![CDATA[Accessoires]]>
					</value>
					<value language="de">
						<![CDATA[Zubehör]]>
					</value>
					<value language="sv">
						<![CDATA[Tillbehör]]>
					</value>
				</string>
			</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>SubCategory</CVLId>
			<Key>Lawnmorewheels</Key>
			<Index>4102</Index>
			<ParentKey>AccesoriesSpareparts</ParentKey>
			<Value>
				<string>
					<value language="en">
						<![CDATA[Lawn Mower Wheel]]>
					</value>
					<value language="nl">
						<![CDATA[Grasmaaier wiel]]>
					</value>
					<value language="fr">
						<![CDATA[Roue de tondeuse à gazon]]>
					</value>
					<value language="de">
						<![CDATA[Rasenmäher-Rad]]>
					</value>
					<value language="sv">
						<![CDATA[Gräsklipparhjul]]>
					</value>
				</string>
			</Value>
		</CVLvalue>
		<CVLvalue>
			<CVLId>SubCategory</CVLId>
			<Key>valves</Key>
			<Index>4102</Index>
			<ParentKey>brakes</ParentKey>
			<Value>
				<string>
					<value language="en">
						<![CDATA[Valves]]>
					</value>
					<value language="nl">
						<![CDATA[Kleppen]]>
					</value>
					<value language="fr">
						<![CDATA[Vannes]]>
					</value>
					<value language="de">
						<![CDATA[Ventile]]>
					</value>
					<value language="sv">
						<![CDATA[Ventiler]]>
					</value>
				</string>
			</Value>
		</CVLvalue>
	</CVLvalues>
</Model>`
    }
}