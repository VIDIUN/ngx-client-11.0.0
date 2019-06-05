/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaString } from './KalturaString';
import { KalturaRuleAction } from './KalturaRuleAction';
import { KalturaFlavorAsset } from './KalturaFlavorAsset';
import { KalturaPluginData } from './KalturaPluginData';
import { KalturaContextDataResult } from './KalturaContextDataResult';
/**
 * @record
 */
export function KalturaEntryContextDataResultArgs() { }
/** @type {?|undefined} */
KalturaEntryContextDataResultArgs.prototype.isSiteRestricted;
/** @type {?|undefined} */
KalturaEntryContextDataResultArgs.prototype.isCountryRestricted;
/** @type {?|undefined} */
KalturaEntryContextDataResultArgs.prototype.isSessionRestricted;
/** @type {?|undefined} */
KalturaEntryContextDataResultArgs.prototype.isIpAddressRestricted;
/** @type {?|undefined} */
KalturaEntryContextDataResultArgs.prototype.isUserAgentRestricted;
/** @type {?|undefined} */
KalturaEntryContextDataResultArgs.prototype.previewLength;
/** @type {?|undefined} */
KalturaEntryContextDataResultArgs.prototype.isScheduledNow;
/** @type {?|undefined} */
KalturaEntryContextDataResultArgs.prototype.isAdmin;
/** @type {?|undefined} */
KalturaEntryContextDataResultArgs.prototype.streamerType;
/** @type {?|undefined} */
KalturaEntryContextDataResultArgs.prototype.mediaProtocol;
/** @type {?|undefined} */
KalturaEntryContextDataResultArgs.prototype.storageProfilesXML;
/** @type {?|undefined} */
KalturaEntryContextDataResultArgs.prototype.accessControlMessages;
/** @type {?|undefined} */
KalturaEntryContextDataResultArgs.prototype.accessControlActions;
/** @type {?|undefined} */
KalturaEntryContextDataResultArgs.prototype.flavorAssets;
/** @type {?|undefined} */
KalturaEntryContextDataResultArgs.prototype.msDuration;
/** @type {?|undefined} */
KalturaEntryContextDataResultArgs.prototype.pluginData;
export class KalturaEntryContextDataResult extends KalturaContextDataResult {
    /**
     * @param {?=} data
     */
    constructor(data) {
        super(data);
        if (typeof this.accessControlMessages === 'undefined')
            this.accessControlMessages = [];
        if (typeof this.accessControlActions === 'undefined')
            this.accessControlActions = [];
        if (typeof this.flavorAssets === 'undefined')
            this.flavorAssets = [];
    }
    /**
     * @return {?}
     */
    _getMetadata() {
        /** @type {?} */
        const result = super._getMetadata();
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaEntryContextDataResult' },
            isSiteRestricted: { type: 'b' },
            isCountryRestricted: { type: 'b' },
            isSessionRestricted: { type: 'b' },
            isIpAddressRestricted: { type: 'b' },
            isUserAgentRestricted: { type: 'b' },
            previewLength: { type: 'n' },
            isScheduledNow: { type: 'b' },
            isAdmin: { type: 'b' },
            streamerType: { type: 's' },
            mediaProtocol: { type: 's' },
            storageProfilesXML: { type: 's' },
            accessControlMessages: { type: 'a', subTypeConstructor: KalturaString, subType: 'KalturaString' },
            accessControlActions: { type: 'a', subTypeConstructor: KalturaRuleAction, subType: 'KalturaRuleAction' },
            flavorAssets: { type: 'a', subTypeConstructor: KalturaFlavorAsset, subType: 'KalturaFlavorAsset' },
            msDuration: { type: 'n' },
            pluginData: { type: 'm', subTypeConstructor: KalturaPluginData, subType: 'KalturaPluginData' }
        });
        return result;
    }
}
if (false) {
    /** @type {?} */
    KalturaEntryContextDataResult.prototype.isSiteRestricted;
    /** @type {?} */
    KalturaEntryContextDataResult.prototype.isCountryRestricted;
    /** @type {?} */
    KalturaEntryContextDataResult.prototype.isSessionRestricted;
    /** @type {?} */
    KalturaEntryContextDataResult.prototype.isIpAddressRestricted;
    /** @type {?} */
    KalturaEntryContextDataResult.prototype.isUserAgentRestricted;
    /** @type {?} */
    KalturaEntryContextDataResult.prototype.previewLength;
    /** @type {?} */
    KalturaEntryContextDataResult.prototype.isScheduledNow;
    /** @type {?} */
    KalturaEntryContextDataResult.prototype.isAdmin;
    /** @type {?} */
    KalturaEntryContextDataResult.prototype.streamerType;
    /** @type {?} */
    KalturaEntryContextDataResult.prototype.mediaProtocol;
    /** @type {?} */
    KalturaEntryContextDataResult.prototype.storageProfilesXML;
    /** @type {?} */
    KalturaEntryContextDataResult.prototype.accessControlMessages;
    /** @type {?} */
    KalturaEntryContextDataResult.prototype.accessControlActions;
    /** @type {?} */
    KalturaEntryContextDataResult.prototype.flavorAssets;
    /** @type {?} */
    KalturaEntryContextDataResult.prototype.msDuration;
    /** @type {?} */
    KalturaEntryContextDataResult.prototype.pluginData;
}
typesMappingStorage['KalturaEntryContextDataResult'] = KalturaEntryContextDataResult;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUVudHJ5Q29udGV4dERhdGFSZXN1bHQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9rYWx0dXJhLW5neC1jbGllbnQvIiwic291cmNlcyI6WyJsaWIvYXBpL3R5cGVzL0thbHR1cmFFbnRyeUNvbnRleHREYXRhUmVzdWx0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFDQSxPQUFPLEVBQXlCLG1CQUFtQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDcEYsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ2hELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ3hELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQzFELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ3hELE9BQU8sRUFBRSx3QkFBd0IsRUFBZ0MsTUFBTSw0QkFBNEIsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXNCcEcsTUFBTSxvQ0FBcUMsU0FBUSx3QkFBd0I7Ozs7SUFtQnZFLFlBQVksSUFBeUM7UUFFakQsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ1osRUFBRSxDQUFDLENBQUMsT0FBTyxJQUFJLENBQUMscUJBQXFCLEtBQUssV0FBVyxDQUFDO1lBQUMsSUFBSSxDQUFDLHFCQUFxQixHQUFHLEVBQUUsQ0FBQztRQUM3RixFQUFFLENBQUMsQ0FBQyxPQUFPLElBQUksQ0FBQyxvQkFBb0IsS0FBSyxXQUFXLENBQUM7WUFBQyxJQUFJLENBQUMsb0JBQW9CLEdBQUcsRUFBRSxDQUFDO1FBQ3JGLEVBQUUsQ0FBQyxDQUFDLE9BQU8sSUFBSSxDQUFDLFlBQVksS0FBSyxXQUFXLENBQUM7WUFBQyxJQUFJLENBQUMsWUFBWSxHQUFHLEVBQUUsQ0FBQztLQUNsRTs7OztJQUVTLFlBQVk7O1FBRWxCLE1BQU0sTUFBTSxHQUFHLEtBQUssQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUNwQyxNQUFNLENBQUMsTUFBTSxDQUNULE1BQU0sQ0FBQyxVQUFVLEVBQ2pCO1lBQ0ksVUFBVSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsK0JBQStCLEVBQUU7WUFDbEYsZ0JBQWdCLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ2pDLG1CQUFtQixFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUNwQyxtQkFBbUIsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDcEMscUJBQXFCLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3RDLHFCQUFxQixFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUN0QyxhQUFhLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQzlCLGNBQWMsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDL0IsT0FBTyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUN4QixZQUFZLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQzdCLGFBQWEsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDOUIsa0JBQWtCLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ25DLHFCQUFxQixFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxrQkFBa0IsRUFBRyxhQUFhLEVBQUUsT0FBTyxFQUFHLGVBQWUsRUFBRTtZQUNyRyxvQkFBb0IsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsa0JBQWtCLEVBQUcsaUJBQWlCLEVBQUUsT0FBTyxFQUFHLG1CQUFtQixFQUFFO1lBQzVHLFlBQVksRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsa0JBQWtCLEVBQUcsa0JBQWtCLEVBQUUsT0FBTyxFQUFHLG9CQUFvQixFQUFFO1lBQ3RHLFVBQVUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDM0IsVUFBVSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxrQkFBa0IsRUFBRyxpQkFBaUIsRUFBRSxPQUFPLEVBQUcsbUJBQW1CLEVBQUU7U0FDekYsQ0FDSixDQUFDO1FBQ0YsTUFBTSxDQUFDLE1BQU0sQ0FBQztLQUNqQjtDQUNKOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVELG1CQUFtQixDQUFDLCtCQUErQixDQUFDLEdBQUcsNkJBQTZCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IEthbHR1cmFPYmplY3RNZXRhZGF0YSwgdHlwZXNNYXBwaW5nU3RvcmFnZSB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuaW1wb3J0IHsgS2FsdHVyYVN0cmluZyB9IGZyb20gJy4vS2FsdHVyYVN0cmluZyc7XG5pbXBvcnQgeyBLYWx0dXJhUnVsZUFjdGlvbiB9IGZyb20gJy4vS2FsdHVyYVJ1bGVBY3Rpb24nO1xuaW1wb3J0IHsgS2FsdHVyYUZsYXZvckFzc2V0IH0gZnJvbSAnLi9LYWx0dXJhRmxhdm9yQXNzZXQnO1xuaW1wb3J0IHsgS2FsdHVyYVBsdWdpbkRhdGEgfSBmcm9tICcuL0thbHR1cmFQbHVnaW5EYXRhJztcbmltcG9ydCB7IEthbHR1cmFDb250ZXh0RGF0YVJlc3VsdCwgS2FsdHVyYUNvbnRleHREYXRhUmVzdWx0QXJncyB9IGZyb20gJy4vS2FsdHVyYUNvbnRleHREYXRhUmVzdWx0JztcblxuZXhwb3J0IGludGVyZmFjZSBLYWx0dXJhRW50cnlDb250ZXh0RGF0YVJlc3VsdEFyZ3MgIGV4dGVuZHMgS2FsdHVyYUNvbnRleHREYXRhUmVzdWx0QXJncyB7XG4gICAgaXNTaXRlUmVzdHJpY3RlZD8gOiBib29sZWFuO1xuXHRpc0NvdW50cnlSZXN0cmljdGVkPyA6IGJvb2xlYW47XG5cdGlzU2Vzc2lvblJlc3RyaWN0ZWQ/IDogYm9vbGVhbjtcblx0aXNJcEFkZHJlc3NSZXN0cmljdGVkPyA6IGJvb2xlYW47XG5cdGlzVXNlckFnZW50UmVzdHJpY3RlZD8gOiBib29sZWFuO1xuXHRwcmV2aWV3TGVuZ3RoPyA6IG51bWJlcjtcblx0aXNTY2hlZHVsZWROb3c/IDogYm9vbGVhbjtcblx0aXNBZG1pbj8gOiBib29sZWFuO1xuXHRzdHJlYW1lclR5cGU/IDogc3RyaW5nO1xuXHRtZWRpYVByb3RvY29sPyA6IHN0cmluZztcblx0c3RvcmFnZVByb2ZpbGVzWE1MPyA6IHN0cmluZztcblx0YWNjZXNzQ29udHJvbE1lc3NhZ2VzPyA6IEthbHR1cmFTdHJpbmdbXTtcblx0YWNjZXNzQ29udHJvbEFjdGlvbnM/IDogS2FsdHVyYVJ1bGVBY3Rpb25bXTtcblx0Zmxhdm9yQXNzZXRzPyA6IEthbHR1cmFGbGF2b3JBc3NldFtdO1xuXHRtc0R1cmF0aW9uPyA6IG51bWJlcjtcblx0cGx1Z2luRGF0YT8gOiB7IFtrZXkgOiBzdHJpbmddIDogS2FsdHVyYVBsdWdpbkRhdGF9O1xufVxuXG5cbmV4cG9ydCBjbGFzcyBLYWx0dXJhRW50cnlDb250ZXh0RGF0YVJlc3VsdCBleHRlbmRzIEthbHR1cmFDb250ZXh0RGF0YVJlc3VsdCB7XG5cbiAgICBpc1NpdGVSZXN0cmljdGVkIDogYm9vbGVhbjtcblx0aXNDb3VudHJ5UmVzdHJpY3RlZCA6IGJvb2xlYW47XG5cdGlzU2Vzc2lvblJlc3RyaWN0ZWQgOiBib29sZWFuO1xuXHRpc0lwQWRkcmVzc1Jlc3RyaWN0ZWQgOiBib29sZWFuO1xuXHRpc1VzZXJBZ2VudFJlc3RyaWN0ZWQgOiBib29sZWFuO1xuXHRwcmV2aWV3TGVuZ3RoIDogbnVtYmVyO1xuXHRpc1NjaGVkdWxlZE5vdyA6IGJvb2xlYW47XG5cdGlzQWRtaW4gOiBib29sZWFuO1xuXHRzdHJlYW1lclR5cGUgOiBzdHJpbmc7XG5cdG1lZGlhUHJvdG9jb2wgOiBzdHJpbmc7XG5cdHN0b3JhZ2VQcm9maWxlc1hNTCA6IHN0cmluZztcblx0YWNjZXNzQ29udHJvbE1lc3NhZ2VzIDogS2FsdHVyYVN0cmluZ1tdO1xuXHRhY2Nlc3NDb250cm9sQWN0aW9ucyA6IEthbHR1cmFSdWxlQWN0aW9uW107XG5cdGZsYXZvckFzc2V0cyA6IEthbHR1cmFGbGF2b3JBc3NldFtdO1xuXHRtc0R1cmF0aW9uIDogbnVtYmVyO1xuXHRwbHVnaW5EYXRhIDogeyBba2V5IDogc3RyaW5nXSA6IEthbHR1cmFQbHVnaW5EYXRhfTtcblxuICAgIGNvbnN0cnVjdG9yKGRhdGE/IDogS2FsdHVyYUVudHJ5Q29udGV4dERhdGFSZXN1bHRBcmdzKVxuICAgIHtcbiAgICAgICAgc3VwZXIoZGF0YSk7XG4gICAgICAgIGlmICh0eXBlb2YgdGhpcy5hY2Nlc3NDb250cm9sTWVzc2FnZXMgPT09ICd1bmRlZmluZWQnKSB0aGlzLmFjY2Vzc0NvbnRyb2xNZXNzYWdlcyA9IFtdO1xuXHRcdGlmICh0eXBlb2YgdGhpcy5hY2Nlc3NDb250cm9sQWN0aW9ucyA9PT0gJ3VuZGVmaW5lZCcpIHRoaXMuYWNjZXNzQ29udHJvbEFjdGlvbnMgPSBbXTtcblx0XHRpZiAodHlwZW9mIHRoaXMuZmxhdm9yQXNzZXRzID09PSAndW5kZWZpbmVkJykgdGhpcy5mbGF2b3JBc3NldHMgPSBbXTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2dldE1ldGFkYXRhKCkgOiBLYWx0dXJhT2JqZWN0TWV0YWRhdGFcbiAgICB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLl9nZXRNZXRhZGF0YSgpO1xuICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgcmVzdWx0LnByb3BlcnRpZXMsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgb2JqZWN0VHlwZSA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdLYWx0dXJhRW50cnlDb250ZXh0RGF0YVJlc3VsdCcgfSxcblx0XHRcdFx0aXNTaXRlUmVzdHJpY3RlZCA6IHsgdHlwZSA6ICdiJyB9LFxuXHRcdFx0XHRpc0NvdW50cnlSZXN0cmljdGVkIDogeyB0eXBlIDogJ2InIH0sXG5cdFx0XHRcdGlzU2Vzc2lvblJlc3RyaWN0ZWQgOiB7IHR5cGUgOiAnYicgfSxcblx0XHRcdFx0aXNJcEFkZHJlc3NSZXN0cmljdGVkIDogeyB0eXBlIDogJ2InIH0sXG5cdFx0XHRcdGlzVXNlckFnZW50UmVzdHJpY3RlZCA6IHsgdHlwZSA6ICdiJyB9LFxuXHRcdFx0XHRwcmV2aWV3TGVuZ3RoIDogeyB0eXBlIDogJ24nIH0sXG5cdFx0XHRcdGlzU2NoZWR1bGVkTm93IDogeyB0eXBlIDogJ2InIH0sXG5cdFx0XHRcdGlzQWRtaW4gOiB7IHR5cGUgOiAnYicgfSxcblx0XHRcdFx0c3RyZWFtZXJUeXBlIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdG1lZGlhUHJvdG9jb2wgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0c3RvcmFnZVByb2ZpbGVzWE1MIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdGFjY2Vzc0NvbnRyb2xNZXNzYWdlcyA6IHsgdHlwZSA6ICdhJywgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYVN0cmluZywgc3ViVHlwZSA6ICdLYWx0dXJhU3RyaW5nJyB9LFxuXHRcdFx0XHRhY2Nlc3NDb250cm9sQWN0aW9ucyA6IHsgdHlwZSA6ICdhJywgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYVJ1bGVBY3Rpb24sIHN1YlR5cGUgOiAnS2FsdHVyYVJ1bGVBY3Rpb24nIH0sXG5cdFx0XHRcdGZsYXZvckFzc2V0cyA6IHsgdHlwZSA6ICdhJywgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYUZsYXZvckFzc2V0LCBzdWJUeXBlIDogJ0thbHR1cmFGbGF2b3JBc3NldCcgfSxcblx0XHRcdFx0bXNEdXJhdGlvbiA6IHsgdHlwZSA6ICduJyB9LFxuXHRcdFx0XHRwbHVnaW5EYXRhIDogeyB0eXBlIDogJ20nLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhUGx1Z2luRGF0YSwgc3ViVHlwZSA6ICdLYWx0dXJhUGx1Z2luRGF0YScgfVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cblxudHlwZXNNYXBwaW5nU3RvcmFnZVsnS2FsdHVyYUVudHJ5Q29udGV4dERhdGFSZXN1bHQnXSA9IEthbHR1cmFFbnRyeUNvbnRleHREYXRhUmVzdWx0OyJdfQ==