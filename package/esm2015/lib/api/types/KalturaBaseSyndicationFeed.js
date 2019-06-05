/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaSyndicationFeedStatus } from './KalturaSyndicationFeedStatus';
import { KalturaSyndicationFeedType } from './KalturaSyndicationFeedType';
import { KalturaSyndicationFeedEntriesOrderBy } from './KalturaSyndicationFeedEntriesOrderBy';
import { KalturaObjectBase } from '../kaltura-object-base';
/**
 * @record
 */
export function KalturaBaseSyndicationFeedArgs() { }
/** @type {?|undefined} */
KalturaBaseSyndicationFeedArgs.prototype.playlistId;
/** @type {?|undefined} */
KalturaBaseSyndicationFeedArgs.prototype.name;
/** @type {?|undefined} */
KalturaBaseSyndicationFeedArgs.prototype.type;
/** @type {?|undefined} */
KalturaBaseSyndicationFeedArgs.prototype.landingPage;
/** @type {?|undefined} */
KalturaBaseSyndicationFeedArgs.prototype.allowEmbed;
/** @type {?|undefined} */
KalturaBaseSyndicationFeedArgs.prototype.playerUiconfId;
/** @type {?|undefined} */
KalturaBaseSyndicationFeedArgs.prototype.flavorParamId;
/** @type {?|undefined} */
KalturaBaseSyndicationFeedArgs.prototype.transcodeExistingContent;
/** @type {?|undefined} */
KalturaBaseSyndicationFeedArgs.prototype.addToDefaultConversionProfile;
/** @type {?|undefined} */
KalturaBaseSyndicationFeedArgs.prototype.categories;
/** @type {?|undefined} */
KalturaBaseSyndicationFeedArgs.prototype.storageId;
/** @type {?|undefined} */
KalturaBaseSyndicationFeedArgs.prototype.entriesOrderBy;
/** @type {?|undefined} */
KalturaBaseSyndicationFeedArgs.prototype.enforceEntitlement;
/** @type {?|undefined} */
KalturaBaseSyndicationFeedArgs.prototype.privacyContext;
/** @type {?|undefined} */
KalturaBaseSyndicationFeedArgs.prototype.useCategoryEntries;
/** @type {?|undefined} */
KalturaBaseSyndicationFeedArgs.prototype.feedContentTypeHeader;
export class KalturaBaseSyndicationFeed extends KalturaObjectBase {
    /**
     * @param {?=} data
     */
    constructor(data) {
        super(data);
    }
    /**
     * @return {?}
     */
    _getMetadata() {
        /** @type {?} */
        const result = super._getMetadata();
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaBaseSyndicationFeed' },
            id: { type: 's', readOnly: true },
            feedUrl: { type: 's', readOnly: true },
            partnerId: { type: 'n', readOnly: true },
            playlistId: { type: 's' },
            name: { type: 's' },
            status: { type: 'en', readOnly: true, subTypeConstructor: KalturaSyndicationFeedStatus, subType: 'KalturaSyndicationFeedStatus' },
            type: { type: 'en', subTypeConstructor: KalturaSyndicationFeedType, subType: 'KalturaSyndicationFeedType' },
            landingPage: { type: 's' },
            createdAt: { type: 'd', readOnly: true },
            allowEmbed: { type: 'b' },
            playerUiconfId: { type: 'n' },
            flavorParamId: { type: 'n' },
            transcodeExistingContent: { type: 'b' },
            addToDefaultConversionProfile: { type: 'b' },
            categories: { type: 's' },
            storageId: { type: 'n' },
            entriesOrderBy: { type: 'es', subTypeConstructor: KalturaSyndicationFeedEntriesOrderBy, subType: 'KalturaSyndicationFeedEntriesOrderBy' },
            enforceEntitlement: { type: 'b' },
            privacyContext: { type: 's' },
            updatedAt: { type: 'd', readOnly: true },
            useCategoryEntries: { type: 'b' },
            feedContentTypeHeader: { type: 's' }
        });
        return result;
    }
}
if (false) {
    /** @type {?} */
    KalturaBaseSyndicationFeed.prototype.id;
    /** @type {?} */
    KalturaBaseSyndicationFeed.prototype.feedUrl;
    /** @type {?} */
    KalturaBaseSyndicationFeed.prototype.partnerId;
    /** @type {?} */
    KalturaBaseSyndicationFeed.prototype.playlistId;
    /** @type {?} */
    KalturaBaseSyndicationFeed.prototype.name;
    /** @type {?} */
    KalturaBaseSyndicationFeed.prototype.status;
    /** @type {?} */
    KalturaBaseSyndicationFeed.prototype.type;
    /** @type {?} */
    KalturaBaseSyndicationFeed.prototype.landingPage;
    /** @type {?} */
    KalturaBaseSyndicationFeed.prototype.createdAt;
    /** @type {?} */
    KalturaBaseSyndicationFeed.prototype.allowEmbed;
    /** @type {?} */
    KalturaBaseSyndicationFeed.prototype.playerUiconfId;
    /** @type {?} */
    KalturaBaseSyndicationFeed.prototype.flavorParamId;
    /** @type {?} */
    KalturaBaseSyndicationFeed.prototype.transcodeExistingContent;
    /** @type {?} */
    KalturaBaseSyndicationFeed.prototype.addToDefaultConversionProfile;
    /** @type {?} */
    KalturaBaseSyndicationFeed.prototype.categories;
    /** @type {?} */
    KalturaBaseSyndicationFeed.prototype.storageId;
    /** @type {?} */
    KalturaBaseSyndicationFeed.prototype.entriesOrderBy;
    /** @type {?} */
    KalturaBaseSyndicationFeed.prototype.enforceEntitlement;
    /** @type {?} */
    KalturaBaseSyndicationFeed.prototype.privacyContext;
    /** @type {?} */
    KalturaBaseSyndicationFeed.prototype.updatedAt;
    /** @type {?} */
    KalturaBaseSyndicationFeed.prototype.useCategoryEntries;
    /** @type {?} */
    KalturaBaseSyndicationFeed.prototype.feedContentTypeHeader;
}
typesMappingStorage['KalturaBaseSyndicationFeed'] = KalturaBaseSyndicationFeed;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUJhc2VTeW5kaWNhdGlvbkZlZWQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9rYWx0dXJhLW5neC1jbGllbnQvIiwic291cmNlcyI6WyJsaWIvYXBpL3R5cGVzL0thbHR1cmFCYXNlU3luZGljYXRpb25GZWVkLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFDQSxPQUFPLEVBQXlCLG1CQUFtQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDcEYsT0FBTyxFQUFFLDRCQUE0QixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFDOUUsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDMUUsT0FBTyxFQUFFLG9DQUFvQyxFQUFFLE1BQU0sd0NBQXdDLENBQUM7QUFDOUYsT0FBTyxFQUFFLGlCQUFpQixFQUF5QixNQUFNLHdCQUF3QixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBc0JsRixNQUFNLGlDQUFrQyxTQUFRLGlCQUFpQjs7OztJQXlCN0QsWUFBWSxJQUFzQztRQUU5QyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7S0FDZjs7OztJQUVTLFlBQVk7O1FBRWxCLE1BQU0sTUFBTSxHQUFHLEtBQUssQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUNwQyxNQUFNLENBQUMsTUFBTSxDQUNULE1BQU0sQ0FBQyxVQUFVLEVBQ2pCO1lBQ0ksVUFBVSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsNEJBQTRCLEVBQUU7WUFDL0UsRUFBRSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxRQUFRLEVBQUcsSUFBSSxFQUFFO1lBQ3BDLE9BQU8sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsUUFBUSxFQUFHLElBQUksRUFBRTtZQUN6QyxTQUFTLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLFFBQVEsRUFBRyxJQUFJLEVBQUU7WUFDM0MsVUFBVSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUMzQixJQUFJLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3JCLE1BQU0sRUFBRyxFQUFFLElBQUksRUFBRyxJQUFJLEVBQUUsUUFBUSxFQUFHLElBQUksRUFBRSxrQkFBa0IsRUFBRyw0QkFBNEIsRUFBRSxPQUFPLEVBQUcsOEJBQThCLEVBQUU7WUFDdEksSUFBSSxFQUFHLEVBQUUsSUFBSSxFQUFHLElBQUksRUFBRSxrQkFBa0IsRUFBRywwQkFBMEIsRUFBRSxPQUFPLEVBQUcsNEJBQTRCLEVBQUU7WUFDL0csV0FBVyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUM1QixTQUFTLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLFFBQVEsRUFBRyxJQUFJLEVBQUU7WUFDM0MsVUFBVSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUMzQixjQUFjLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQy9CLGFBQWEsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDOUIsd0JBQXdCLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3pDLDZCQUE2QixFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUM5QyxVQUFVLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQzNCLFNBQVMsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDMUIsY0FBYyxFQUFHLEVBQUUsSUFBSSxFQUFHLElBQUksRUFBRSxrQkFBa0IsRUFBRyxvQ0FBb0MsRUFBRSxPQUFPLEVBQUcsc0NBQXNDLEVBQUU7WUFDN0ksa0JBQWtCLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ25DLGNBQWMsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDL0IsU0FBUyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxRQUFRLEVBQUcsSUFBSSxFQUFFO1lBQzNDLGtCQUFrQixFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUNuQyxxQkFBcUIsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7U0FDN0IsQ0FDSixDQUFDO1FBQ0YsTUFBTSxDQUFDLE1BQU0sQ0FBQztLQUNqQjtDQUNKOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVELG1CQUFtQixDQUFDLDRCQUE0QixDQUFDLEdBQUcsMEJBQTBCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IEthbHR1cmFPYmplY3RNZXRhZGF0YSwgdHlwZXNNYXBwaW5nU3RvcmFnZSB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuaW1wb3J0IHsgS2FsdHVyYVN5bmRpY2F0aW9uRmVlZFN0YXR1cyB9IGZyb20gJy4vS2FsdHVyYVN5bmRpY2F0aW9uRmVlZFN0YXR1cyc7XG5pbXBvcnQgeyBLYWx0dXJhU3luZGljYXRpb25GZWVkVHlwZSB9IGZyb20gJy4vS2FsdHVyYVN5bmRpY2F0aW9uRmVlZFR5cGUnO1xuaW1wb3J0IHsgS2FsdHVyYVN5bmRpY2F0aW9uRmVlZEVudHJpZXNPcmRlckJ5IH0gZnJvbSAnLi9LYWx0dXJhU3luZGljYXRpb25GZWVkRW50cmllc09yZGVyQnknO1xuaW1wb3J0IHsgS2FsdHVyYU9iamVjdEJhc2UsIEthbHR1cmFPYmplY3RCYXNlQXJncyB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEthbHR1cmFCYXNlU3luZGljYXRpb25GZWVkQXJncyAgZXh0ZW5kcyBLYWx0dXJhT2JqZWN0QmFzZUFyZ3Mge1xuICAgIHBsYXlsaXN0SWQ/IDogc3RyaW5nO1xuXHRuYW1lPyA6IHN0cmluZztcblx0dHlwZT8gOiBLYWx0dXJhU3luZGljYXRpb25GZWVkVHlwZTtcblx0bGFuZGluZ1BhZ2U/IDogc3RyaW5nO1xuXHRhbGxvd0VtYmVkPyA6IGJvb2xlYW47XG5cdHBsYXllclVpY29uZklkPyA6IG51bWJlcjtcblx0Zmxhdm9yUGFyYW1JZD8gOiBudW1iZXI7XG5cdHRyYW5zY29kZUV4aXN0aW5nQ29udGVudD8gOiBib29sZWFuO1xuXHRhZGRUb0RlZmF1bHRDb252ZXJzaW9uUHJvZmlsZT8gOiBib29sZWFuO1xuXHRjYXRlZ29yaWVzPyA6IHN0cmluZztcblx0c3RvcmFnZUlkPyA6IG51bWJlcjtcblx0ZW50cmllc09yZGVyQnk/IDogS2FsdHVyYVN5bmRpY2F0aW9uRmVlZEVudHJpZXNPcmRlckJ5O1xuXHRlbmZvcmNlRW50aXRsZW1lbnQ/IDogYm9vbGVhbjtcblx0cHJpdmFjeUNvbnRleHQ/IDogc3RyaW5nO1xuXHR1c2VDYXRlZ29yeUVudHJpZXM/IDogYm9vbGVhbjtcblx0ZmVlZENvbnRlbnRUeXBlSGVhZGVyPyA6IHN0cmluZztcbn1cblxuXG5leHBvcnQgY2xhc3MgS2FsdHVyYUJhc2VTeW5kaWNhdGlvbkZlZWQgZXh0ZW5kcyBLYWx0dXJhT2JqZWN0QmFzZSB7XG5cbiAgICByZWFkb25seSBpZCA6IHN0cmluZztcblx0cmVhZG9ubHkgZmVlZFVybCA6IHN0cmluZztcblx0cmVhZG9ubHkgcGFydG5lcklkIDogbnVtYmVyO1xuXHRwbGF5bGlzdElkIDogc3RyaW5nO1xuXHRuYW1lIDogc3RyaW5nO1xuXHRyZWFkb25seSBzdGF0dXMgOiBLYWx0dXJhU3luZGljYXRpb25GZWVkU3RhdHVzO1xuXHR0eXBlIDogS2FsdHVyYVN5bmRpY2F0aW9uRmVlZFR5cGU7XG5cdGxhbmRpbmdQYWdlIDogc3RyaW5nO1xuXHRyZWFkb25seSBjcmVhdGVkQXQgOiBEYXRlO1xuXHRhbGxvd0VtYmVkIDogYm9vbGVhbjtcblx0cGxheWVyVWljb25mSWQgOiBudW1iZXI7XG5cdGZsYXZvclBhcmFtSWQgOiBudW1iZXI7XG5cdHRyYW5zY29kZUV4aXN0aW5nQ29udGVudCA6IGJvb2xlYW47XG5cdGFkZFRvRGVmYXVsdENvbnZlcnNpb25Qcm9maWxlIDogYm9vbGVhbjtcblx0Y2F0ZWdvcmllcyA6IHN0cmluZztcblx0c3RvcmFnZUlkIDogbnVtYmVyO1xuXHRlbnRyaWVzT3JkZXJCeSA6IEthbHR1cmFTeW5kaWNhdGlvbkZlZWRFbnRyaWVzT3JkZXJCeTtcblx0ZW5mb3JjZUVudGl0bGVtZW50IDogYm9vbGVhbjtcblx0cHJpdmFjeUNvbnRleHQgOiBzdHJpbmc7XG5cdHJlYWRvbmx5IHVwZGF0ZWRBdCA6IERhdGU7XG5cdHVzZUNhdGVnb3J5RW50cmllcyA6IGJvb2xlYW47XG5cdGZlZWRDb250ZW50VHlwZUhlYWRlciA6IHN0cmluZztcblxuICAgIGNvbnN0cnVjdG9yKGRhdGE/IDogS2FsdHVyYUJhc2VTeW5kaWNhdGlvbkZlZWRBcmdzKVxuICAgIHtcbiAgICAgICAgc3VwZXIoZGF0YSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9nZXRNZXRhZGF0YSgpIDogS2FsdHVyYU9iamVjdE1ldGFkYXRhXG4gICAge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBzdXBlci5fZ2V0TWV0YWRhdGEoKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHJlc3VsdC5wcm9wZXJ0aWVzLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG9iamVjdFR5cGUgOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnS2FsdHVyYUJhc2VTeW5kaWNhdGlvbkZlZWQnIH0sXG5cdFx0XHRcdGlkIDogeyB0eXBlIDogJ3MnLCByZWFkT25seSA6IHRydWUgfSxcblx0XHRcdFx0ZmVlZFVybCA6IHsgdHlwZSA6ICdzJywgcmVhZE9ubHkgOiB0cnVlIH0sXG5cdFx0XHRcdHBhcnRuZXJJZCA6IHsgdHlwZSA6ICduJywgcmVhZE9ubHkgOiB0cnVlIH0sXG5cdFx0XHRcdHBsYXlsaXN0SWQgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0bmFtZSA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRzdGF0dXMgOiB7IHR5cGUgOiAnZW4nLCByZWFkT25seSA6IHRydWUsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFTeW5kaWNhdGlvbkZlZWRTdGF0dXMsIHN1YlR5cGUgOiAnS2FsdHVyYVN5bmRpY2F0aW9uRmVlZFN0YXR1cycgfSxcblx0XHRcdFx0dHlwZSA6IHsgdHlwZSA6ICdlbicsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFTeW5kaWNhdGlvbkZlZWRUeXBlLCBzdWJUeXBlIDogJ0thbHR1cmFTeW5kaWNhdGlvbkZlZWRUeXBlJyB9LFxuXHRcdFx0XHRsYW5kaW5nUGFnZSA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRjcmVhdGVkQXQgOiB7IHR5cGUgOiAnZCcsIHJlYWRPbmx5IDogdHJ1ZSB9LFxuXHRcdFx0XHRhbGxvd0VtYmVkIDogeyB0eXBlIDogJ2InIH0sXG5cdFx0XHRcdHBsYXllclVpY29uZklkIDogeyB0eXBlIDogJ24nIH0sXG5cdFx0XHRcdGZsYXZvclBhcmFtSWQgOiB7IHR5cGUgOiAnbicgfSxcblx0XHRcdFx0dHJhbnNjb2RlRXhpc3RpbmdDb250ZW50IDogeyB0eXBlIDogJ2InIH0sXG5cdFx0XHRcdGFkZFRvRGVmYXVsdENvbnZlcnNpb25Qcm9maWxlIDogeyB0eXBlIDogJ2InIH0sXG5cdFx0XHRcdGNhdGVnb3JpZXMgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0c3RvcmFnZUlkIDogeyB0eXBlIDogJ24nIH0sXG5cdFx0XHRcdGVudHJpZXNPcmRlckJ5IDogeyB0eXBlIDogJ2VzJywgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYVN5bmRpY2F0aW9uRmVlZEVudHJpZXNPcmRlckJ5LCBzdWJUeXBlIDogJ0thbHR1cmFTeW5kaWNhdGlvbkZlZWRFbnRyaWVzT3JkZXJCeScgfSxcblx0XHRcdFx0ZW5mb3JjZUVudGl0bGVtZW50IDogeyB0eXBlIDogJ2InIH0sXG5cdFx0XHRcdHByaXZhY3lDb250ZXh0IDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdHVwZGF0ZWRBdCA6IHsgdHlwZSA6ICdkJywgcmVhZE9ubHkgOiB0cnVlIH0sXG5cdFx0XHRcdHVzZUNhdGVnb3J5RW50cmllcyA6IHsgdHlwZSA6ICdiJyB9LFxuXHRcdFx0XHRmZWVkQ29udGVudFR5cGVIZWFkZXIgOiB7IHR5cGUgOiAncycgfVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cblxudHlwZXNNYXBwaW5nU3RvcmFnZVsnS2FsdHVyYUJhc2VTeW5kaWNhdGlvbkZlZWQnXSA9IEthbHR1cmFCYXNlU3luZGljYXRpb25GZWVkOyJdfQ==