/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaMetadataObjectType } from './KalturaMetadataObjectType';
import { KalturaMetadataProfileStatus } from './KalturaMetadataProfileStatus';
import { KalturaMetadataProfileCreateMode } from './KalturaMetadataProfileCreateMode';
import { KalturaObjectBase } from '../kaltura-object-base';
/**
 * @record
 */
export function KalturaMetadataProfileArgs() { }
/** @type {?|undefined} */
KalturaMetadataProfileArgs.prototype.metadataObjectType;
/** @type {?|undefined} */
KalturaMetadataProfileArgs.prototype.name;
/** @type {?|undefined} */
KalturaMetadataProfileArgs.prototype.systemName;
/** @type {?|undefined} */
KalturaMetadataProfileArgs.prototype.description;
/** @type {?|undefined} */
KalturaMetadataProfileArgs.prototype.createMode;
/** @type {?|undefined} */
KalturaMetadataProfileArgs.prototype.disableReIndexing;
export class KalturaMetadataProfile extends KalturaObjectBase {
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
            objectType: { type: 'c', default: 'KalturaMetadataProfile' },
            id: { type: 'n', readOnly: true },
            partnerId: { type: 'n', readOnly: true },
            metadataObjectType: { type: 'es', subTypeConstructor: KalturaMetadataObjectType, subType: 'KalturaMetadataObjectType' },
            version: { type: 'n', readOnly: true },
            name: { type: 's' },
            systemName: { type: 's' },
            description: { type: 's' },
            createdAt: { type: 'd', readOnly: true },
            updatedAt: { type: 'd', readOnly: true },
            status: { type: 'en', readOnly: true, subTypeConstructor: KalturaMetadataProfileStatus, subType: 'KalturaMetadataProfileStatus' },
            xsd: { type: 's', readOnly: true },
            views: { type: 's', readOnly: true },
            xslt: { type: 's', readOnly: true },
            createMode: { type: 'en', subTypeConstructor: KalturaMetadataProfileCreateMode, subType: 'KalturaMetadataProfileCreateMode' },
            disableReIndexing: { type: 'b' }
        });
        return result;
    }
}
if (false) {
    /** @type {?} */
    KalturaMetadataProfile.prototype.id;
    /** @type {?} */
    KalturaMetadataProfile.prototype.partnerId;
    /** @type {?} */
    KalturaMetadataProfile.prototype.metadataObjectType;
    /** @type {?} */
    KalturaMetadataProfile.prototype.version;
    /** @type {?} */
    KalturaMetadataProfile.prototype.name;
    /** @type {?} */
    KalturaMetadataProfile.prototype.systemName;
    /** @type {?} */
    KalturaMetadataProfile.prototype.description;
    /** @type {?} */
    KalturaMetadataProfile.prototype.createdAt;
    /** @type {?} */
    KalturaMetadataProfile.prototype.updatedAt;
    /** @type {?} */
    KalturaMetadataProfile.prototype.status;
    /** @type {?} */
    KalturaMetadataProfile.prototype.xsd;
    /** @type {?} */
    KalturaMetadataProfile.prototype.views;
    /** @type {?} */
    KalturaMetadataProfile.prototype.xslt;
    /** @type {?} */
    KalturaMetadataProfile.prototype.createMode;
    /** @type {?} */
    KalturaMetadataProfile.prototype.disableReIndexing;
}
typesMappingStorage['KalturaMetadataProfile'] = KalturaMetadataProfile;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYU1ldGFkYXRhUHJvZmlsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2thbHR1cmEtbmd4LWNsaWVudC8iLCJzb3VyY2VzIjpbImxpYi9hcGkvdHlwZXMvS2FsdHVyYU1ldGFkYXRhUHJvZmlsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0EsT0FBTyxFQUF5QixtQkFBbUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3BGLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQ3hFLE9BQU8sRUFBRSw0QkFBNEIsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQzlFLE9BQU8sRUFBRSxnQ0FBZ0MsRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBQ3RGLE9BQU8sRUFBRSxpQkFBaUIsRUFBeUIsTUFBTSx3QkFBd0IsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFZbEYsTUFBTSw2QkFBOEIsU0FBUSxpQkFBaUI7Ozs7SUFrQnpELFlBQVksSUFBa0M7UUFFMUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO0tBQ2Y7Ozs7SUFFUyxZQUFZOztRQUVsQixNQUFNLE1BQU0sR0FBRyxLQUFLLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDcEMsTUFBTSxDQUFDLE1BQU0sQ0FDVCxNQUFNLENBQUMsVUFBVSxFQUNqQjtZQUNJLFVBQVUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLHdCQUF3QixFQUFFO1lBQzNFLEVBQUUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsUUFBUSxFQUFHLElBQUksRUFBRTtZQUNwQyxTQUFTLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLFFBQVEsRUFBRyxJQUFJLEVBQUU7WUFDM0Msa0JBQWtCLEVBQUcsRUFBRSxJQUFJLEVBQUcsSUFBSSxFQUFFLGtCQUFrQixFQUFHLHlCQUF5QixFQUFFLE9BQU8sRUFBRywyQkFBMkIsRUFBRTtZQUMzSCxPQUFPLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLFFBQVEsRUFBRyxJQUFJLEVBQUU7WUFDekMsSUFBSSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUNyQixVQUFVLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQzNCLFdBQVcsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDNUIsU0FBUyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxRQUFRLEVBQUcsSUFBSSxFQUFFO1lBQzNDLFNBQVMsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsUUFBUSxFQUFHLElBQUksRUFBRTtZQUMzQyxNQUFNLEVBQUcsRUFBRSxJQUFJLEVBQUcsSUFBSSxFQUFFLFFBQVEsRUFBRyxJQUFJLEVBQUUsa0JBQWtCLEVBQUcsNEJBQTRCLEVBQUUsT0FBTyxFQUFHLDhCQUE4QixFQUFFO1lBQ3RJLEdBQUcsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsUUFBUSxFQUFHLElBQUksRUFBRTtZQUNyQyxLQUFLLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLFFBQVEsRUFBRyxJQUFJLEVBQUU7WUFDdkMsSUFBSSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxRQUFRLEVBQUcsSUFBSSxFQUFFO1lBQ3RDLFVBQVUsRUFBRyxFQUFFLElBQUksRUFBRyxJQUFJLEVBQUUsa0JBQWtCLEVBQUcsZ0NBQWdDLEVBQUUsT0FBTyxFQUFHLGtDQUFrQyxFQUFFO1lBQ2pJLGlCQUFpQixFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtTQUN6QixDQUNKLENBQUM7UUFDRixNQUFNLENBQUMsTUFBTSxDQUFDO0tBQ2pCO0NBQ0o7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVELG1CQUFtQixDQUFDLHdCQUF3QixDQUFDLEdBQUcsc0JBQXNCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IEthbHR1cmFPYmplY3RNZXRhZGF0YSwgdHlwZXNNYXBwaW5nU3RvcmFnZSB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuaW1wb3J0IHsgS2FsdHVyYU1ldGFkYXRhT2JqZWN0VHlwZSB9IGZyb20gJy4vS2FsdHVyYU1ldGFkYXRhT2JqZWN0VHlwZSc7XG5pbXBvcnQgeyBLYWx0dXJhTWV0YWRhdGFQcm9maWxlU3RhdHVzIH0gZnJvbSAnLi9LYWx0dXJhTWV0YWRhdGFQcm9maWxlU3RhdHVzJztcbmltcG9ydCB7IEthbHR1cmFNZXRhZGF0YVByb2ZpbGVDcmVhdGVNb2RlIH0gZnJvbSAnLi9LYWx0dXJhTWV0YWRhdGFQcm9maWxlQ3JlYXRlTW9kZSc7XG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0QmFzZSwgS2FsdHVyYU9iamVjdEJhc2VBcmdzIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgS2FsdHVyYU1ldGFkYXRhUHJvZmlsZUFyZ3MgIGV4dGVuZHMgS2FsdHVyYU9iamVjdEJhc2VBcmdzIHtcbiAgICBtZXRhZGF0YU9iamVjdFR5cGU/IDogS2FsdHVyYU1ldGFkYXRhT2JqZWN0VHlwZTtcblx0bmFtZT8gOiBzdHJpbmc7XG5cdHN5c3RlbU5hbWU/IDogc3RyaW5nO1xuXHRkZXNjcmlwdGlvbj8gOiBzdHJpbmc7XG5cdGNyZWF0ZU1vZGU/IDogS2FsdHVyYU1ldGFkYXRhUHJvZmlsZUNyZWF0ZU1vZGU7XG5cdGRpc2FibGVSZUluZGV4aW5nPyA6IGJvb2xlYW47XG59XG5cblxuZXhwb3J0IGNsYXNzIEthbHR1cmFNZXRhZGF0YVByb2ZpbGUgZXh0ZW5kcyBLYWx0dXJhT2JqZWN0QmFzZSB7XG5cbiAgICByZWFkb25seSBpZCA6IG51bWJlcjtcblx0cmVhZG9ubHkgcGFydG5lcklkIDogbnVtYmVyO1xuXHRtZXRhZGF0YU9iamVjdFR5cGUgOiBLYWx0dXJhTWV0YWRhdGFPYmplY3RUeXBlO1xuXHRyZWFkb25seSB2ZXJzaW9uIDogbnVtYmVyO1xuXHRuYW1lIDogc3RyaW5nO1xuXHRzeXN0ZW1OYW1lIDogc3RyaW5nO1xuXHRkZXNjcmlwdGlvbiA6IHN0cmluZztcblx0cmVhZG9ubHkgY3JlYXRlZEF0IDogRGF0ZTtcblx0cmVhZG9ubHkgdXBkYXRlZEF0IDogRGF0ZTtcblx0cmVhZG9ubHkgc3RhdHVzIDogS2FsdHVyYU1ldGFkYXRhUHJvZmlsZVN0YXR1cztcblx0cmVhZG9ubHkgeHNkIDogc3RyaW5nO1xuXHRyZWFkb25seSB2aWV3cyA6IHN0cmluZztcblx0cmVhZG9ubHkgeHNsdCA6IHN0cmluZztcblx0Y3JlYXRlTW9kZSA6IEthbHR1cmFNZXRhZGF0YVByb2ZpbGVDcmVhdGVNb2RlO1xuXHRkaXNhYmxlUmVJbmRleGluZyA6IGJvb2xlYW47XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhPyA6IEthbHR1cmFNZXRhZGF0YVByb2ZpbGVBcmdzKVxuICAgIHtcbiAgICAgICAgc3VwZXIoZGF0YSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9nZXRNZXRhZGF0YSgpIDogS2FsdHVyYU9iamVjdE1ldGFkYXRhXG4gICAge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBzdXBlci5fZ2V0TWV0YWRhdGEoKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHJlc3VsdC5wcm9wZXJ0aWVzLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG9iamVjdFR5cGUgOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnS2FsdHVyYU1ldGFkYXRhUHJvZmlsZScgfSxcblx0XHRcdFx0aWQgOiB7IHR5cGUgOiAnbicsIHJlYWRPbmx5IDogdHJ1ZSB9LFxuXHRcdFx0XHRwYXJ0bmVySWQgOiB7IHR5cGUgOiAnbicsIHJlYWRPbmx5IDogdHJ1ZSB9LFxuXHRcdFx0XHRtZXRhZGF0YU9iamVjdFR5cGUgOiB7IHR5cGUgOiAnZXMnLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhTWV0YWRhdGFPYmplY3RUeXBlLCBzdWJUeXBlIDogJ0thbHR1cmFNZXRhZGF0YU9iamVjdFR5cGUnIH0sXG5cdFx0XHRcdHZlcnNpb24gOiB7IHR5cGUgOiAnbicsIHJlYWRPbmx5IDogdHJ1ZSB9LFxuXHRcdFx0XHRuYW1lIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdHN5c3RlbU5hbWUgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0ZGVzY3JpcHRpb24gOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0Y3JlYXRlZEF0IDogeyB0eXBlIDogJ2QnLCByZWFkT25seSA6IHRydWUgfSxcblx0XHRcdFx0dXBkYXRlZEF0IDogeyB0eXBlIDogJ2QnLCByZWFkT25seSA6IHRydWUgfSxcblx0XHRcdFx0c3RhdHVzIDogeyB0eXBlIDogJ2VuJywgcmVhZE9ubHkgOiB0cnVlLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhTWV0YWRhdGFQcm9maWxlU3RhdHVzLCBzdWJUeXBlIDogJ0thbHR1cmFNZXRhZGF0YVByb2ZpbGVTdGF0dXMnIH0sXG5cdFx0XHRcdHhzZCA6IHsgdHlwZSA6ICdzJywgcmVhZE9ubHkgOiB0cnVlIH0sXG5cdFx0XHRcdHZpZXdzIDogeyB0eXBlIDogJ3MnLCByZWFkT25seSA6IHRydWUgfSxcblx0XHRcdFx0eHNsdCA6IHsgdHlwZSA6ICdzJywgcmVhZE9ubHkgOiB0cnVlIH0sXG5cdFx0XHRcdGNyZWF0ZU1vZGUgOiB7IHR5cGUgOiAnZW4nLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhTWV0YWRhdGFQcm9maWxlQ3JlYXRlTW9kZSwgc3ViVHlwZSA6ICdLYWx0dXJhTWV0YWRhdGFQcm9maWxlQ3JlYXRlTW9kZScgfSxcblx0XHRcdFx0ZGlzYWJsZVJlSW5kZXhpbmcgOiB7IHR5cGUgOiAnYicgfVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cblxudHlwZXNNYXBwaW5nU3RvcmFnZVsnS2FsdHVyYU1ldGFkYXRhUHJvZmlsZSddID0gS2FsdHVyYU1ldGFkYXRhUHJvZmlsZTsiXX0=