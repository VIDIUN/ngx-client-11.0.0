/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
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
var KalturaMetadataProfile = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaMetadataProfile, _super);
    function KalturaMetadataProfile(data) {
        return _super.call(this, data) || this;
    }
    /**
     * @return {?}
     */
    KalturaMetadataProfile.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
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
    };
    return KalturaMetadataProfile;
}(KalturaObjectBase));
export { KalturaMetadataProfile };
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYU1ldGFkYXRhUHJvZmlsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2thbHR1cmEtbmd4LWNsaWVudC8iLCJzb3VyY2VzIjpbImxpYi9hcGkvdHlwZXMvS2FsdHVyYU1ldGFkYXRhUHJvZmlsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLE9BQU8sRUFBeUIsbUJBQW1CLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUNwRixPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUN4RSxPQUFPLEVBQUUsNEJBQTRCLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUM5RSxPQUFPLEVBQUUsZ0NBQWdDLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQUN0RixPQUFPLEVBQUUsaUJBQWlCLEVBQXlCLE1BQU0sd0JBQXdCLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBWWxGLElBQUE7SUFBNEMsa0RBQWlCO0lBa0J6RCxnQ0FBWSxJQUFrQztlQUUxQyxrQkFBTSxJQUFJLENBQUM7S0FDZDs7OztJQUVTLDZDQUFZOzs7SUFBdEI7O1FBRUksSUFBTSxNQUFNLEdBQUcsaUJBQU0sWUFBWSxXQUFFLENBQUM7UUFDcEMsTUFBTSxDQUFDLE1BQU0sQ0FDVCxNQUFNLENBQUMsVUFBVSxFQUNqQjtZQUNJLFVBQVUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLHdCQUF3QixFQUFFO1lBQzNFLEVBQUUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsUUFBUSxFQUFHLElBQUksRUFBRTtZQUNwQyxTQUFTLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLFFBQVEsRUFBRyxJQUFJLEVBQUU7WUFDM0Msa0JBQWtCLEVBQUcsRUFBRSxJQUFJLEVBQUcsSUFBSSxFQUFFLGtCQUFrQixFQUFHLHlCQUF5QixFQUFFLE9BQU8sRUFBRywyQkFBMkIsRUFBRTtZQUMzSCxPQUFPLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLFFBQVEsRUFBRyxJQUFJLEVBQUU7WUFDekMsSUFBSSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUNyQixVQUFVLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQzNCLFdBQVcsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDNUIsU0FBUyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxRQUFRLEVBQUcsSUFBSSxFQUFFO1lBQzNDLFNBQVMsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsUUFBUSxFQUFHLElBQUksRUFBRTtZQUMzQyxNQUFNLEVBQUcsRUFBRSxJQUFJLEVBQUcsSUFBSSxFQUFFLFFBQVEsRUFBRyxJQUFJLEVBQUUsa0JBQWtCLEVBQUcsNEJBQTRCLEVBQUUsT0FBTyxFQUFHLDhCQUE4QixFQUFFO1lBQ3RJLEdBQUcsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsUUFBUSxFQUFHLElBQUksRUFBRTtZQUNyQyxLQUFLLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLFFBQVEsRUFBRyxJQUFJLEVBQUU7WUFDdkMsSUFBSSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxRQUFRLEVBQUcsSUFBSSxFQUFFO1lBQ3RDLFVBQVUsRUFBRyxFQUFFLElBQUksRUFBRyxJQUFJLEVBQUUsa0JBQWtCLEVBQUcsZ0NBQWdDLEVBQUUsT0FBTyxFQUFHLGtDQUFrQyxFQUFFO1lBQ2pJLGlCQUFpQixFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtTQUN6QixDQUNKLENBQUM7UUFDRixNQUFNLENBQUMsTUFBTSxDQUFDO0tBQ2pCO2lDQWpFTDtFQWlCNEMsaUJBQWlCLEVBaUQ1RCxDQUFBO0FBakRELGtDQWlEQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUQsbUJBQW1CLENBQUMsd0JBQXdCLENBQUMsR0FBRyxzQkFBc0IsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgS2FsdHVyYU9iamVjdE1ldGFkYXRhLCB0eXBlc01hcHBpbmdTdG9yYWdlIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5pbXBvcnQgeyBLYWx0dXJhTWV0YWRhdGFPYmplY3RUeXBlIH0gZnJvbSAnLi9LYWx0dXJhTWV0YWRhdGFPYmplY3RUeXBlJztcbmltcG9ydCB7IEthbHR1cmFNZXRhZGF0YVByb2ZpbGVTdGF0dXMgfSBmcm9tICcuL0thbHR1cmFNZXRhZGF0YVByb2ZpbGVTdGF0dXMnO1xuaW1wb3J0IHsgS2FsdHVyYU1ldGFkYXRhUHJvZmlsZUNyZWF0ZU1vZGUgfSBmcm9tICcuL0thbHR1cmFNZXRhZGF0YVByb2ZpbGVDcmVhdGVNb2RlJztcbmltcG9ydCB7IEthbHR1cmFPYmplY3RCYXNlLCBLYWx0dXJhT2JqZWN0QmFzZUFyZ3MgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcblxuZXhwb3J0IGludGVyZmFjZSBLYWx0dXJhTWV0YWRhdGFQcm9maWxlQXJncyAgZXh0ZW5kcyBLYWx0dXJhT2JqZWN0QmFzZUFyZ3Mge1xuICAgIG1ldGFkYXRhT2JqZWN0VHlwZT8gOiBLYWx0dXJhTWV0YWRhdGFPYmplY3RUeXBlO1xuXHRuYW1lPyA6IHN0cmluZztcblx0c3lzdGVtTmFtZT8gOiBzdHJpbmc7XG5cdGRlc2NyaXB0aW9uPyA6IHN0cmluZztcblx0Y3JlYXRlTW9kZT8gOiBLYWx0dXJhTWV0YWRhdGFQcm9maWxlQ3JlYXRlTW9kZTtcblx0ZGlzYWJsZVJlSW5kZXhpbmc/IDogYm9vbGVhbjtcbn1cblxuXG5leHBvcnQgY2xhc3MgS2FsdHVyYU1ldGFkYXRhUHJvZmlsZSBleHRlbmRzIEthbHR1cmFPYmplY3RCYXNlIHtcblxuICAgIHJlYWRvbmx5IGlkIDogbnVtYmVyO1xuXHRyZWFkb25seSBwYXJ0bmVySWQgOiBudW1iZXI7XG5cdG1ldGFkYXRhT2JqZWN0VHlwZSA6IEthbHR1cmFNZXRhZGF0YU9iamVjdFR5cGU7XG5cdHJlYWRvbmx5IHZlcnNpb24gOiBudW1iZXI7XG5cdG5hbWUgOiBzdHJpbmc7XG5cdHN5c3RlbU5hbWUgOiBzdHJpbmc7XG5cdGRlc2NyaXB0aW9uIDogc3RyaW5nO1xuXHRyZWFkb25seSBjcmVhdGVkQXQgOiBEYXRlO1xuXHRyZWFkb25seSB1cGRhdGVkQXQgOiBEYXRlO1xuXHRyZWFkb25seSBzdGF0dXMgOiBLYWx0dXJhTWV0YWRhdGFQcm9maWxlU3RhdHVzO1xuXHRyZWFkb25seSB4c2QgOiBzdHJpbmc7XG5cdHJlYWRvbmx5IHZpZXdzIDogc3RyaW5nO1xuXHRyZWFkb25seSB4c2x0IDogc3RyaW5nO1xuXHRjcmVhdGVNb2RlIDogS2FsdHVyYU1ldGFkYXRhUHJvZmlsZUNyZWF0ZU1vZGU7XG5cdGRpc2FibGVSZUluZGV4aW5nIDogYm9vbGVhbjtcblxuICAgIGNvbnN0cnVjdG9yKGRhdGE/IDogS2FsdHVyYU1ldGFkYXRhUHJvZmlsZUFyZ3MpXG4gICAge1xuICAgICAgICBzdXBlcihkYXRhKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2dldE1ldGFkYXRhKCkgOiBLYWx0dXJhT2JqZWN0TWV0YWRhdGFcbiAgICB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLl9nZXRNZXRhZGF0YSgpO1xuICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgcmVzdWx0LnByb3BlcnRpZXMsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgb2JqZWN0VHlwZSA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdLYWx0dXJhTWV0YWRhdGFQcm9maWxlJyB9LFxuXHRcdFx0XHRpZCA6IHsgdHlwZSA6ICduJywgcmVhZE9ubHkgOiB0cnVlIH0sXG5cdFx0XHRcdHBhcnRuZXJJZCA6IHsgdHlwZSA6ICduJywgcmVhZE9ubHkgOiB0cnVlIH0sXG5cdFx0XHRcdG1ldGFkYXRhT2JqZWN0VHlwZSA6IHsgdHlwZSA6ICdlcycsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFNZXRhZGF0YU9iamVjdFR5cGUsIHN1YlR5cGUgOiAnS2FsdHVyYU1ldGFkYXRhT2JqZWN0VHlwZScgfSxcblx0XHRcdFx0dmVyc2lvbiA6IHsgdHlwZSA6ICduJywgcmVhZE9ubHkgOiB0cnVlIH0sXG5cdFx0XHRcdG5hbWUgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0c3lzdGVtTmFtZSA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRkZXNjcmlwdGlvbiA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRjcmVhdGVkQXQgOiB7IHR5cGUgOiAnZCcsIHJlYWRPbmx5IDogdHJ1ZSB9LFxuXHRcdFx0XHR1cGRhdGVkQXQgOiB7IHR5cGUgOiAnZCcsIHJlYWRPbmx5IDogdHJ1ZSB9LFxuXHRcdFx0XHRzdGF0dXMgOiB7IHR5cGUgOiAnZW4nLCByZWFkT25seSA6IHRydWUsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFNZXRhZGF0YVByb2ZpbGVTdGF0dXMsIHN1YlR5cGUgOiAnS2FsdHVyYU1ldGFkYXRhUHJvZmlsZVN0YXR1cycgfSxcblx0XHRcdFx0eHNkIDogeyB0eXBlIDogJ3MnLCByZWFkT25seSA6IHRydWUgfSxcblx0XHRcdFx0dmlld3MgOiB7IHR5cGUgOiAncycsIHJlYWRPbmx5IDogdHJ1ZSB9LFxuXHRcdFx0XHR4c2x0IDogeyB0eXBlIDogJ3MnLCByZWFkT25seSA6IHRydWUgfSxcblx0XHRcdFx0Y3JlYXRlTW9kZSA6IHsgdHlwZSA6ICdlbicsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFNZXRhZGF0YVByb2ZpbGVDcmVhdGVNb2RlLCBzdWJUeXBlIDogJ0thbHR1cmFNZXRhZGF0YVByb2ZpbGVDcmVhdGVNb2RlJyB9LFxuXHRcdFx0XHRkaXNhYmxlUmVJbmRleGluZyA6IHsgdHlwZSA6ICdiJyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuXG50eXBlc01hcHBpbmdTdG9yYWdlWydLYWx0dXJhTWV0YWRhdGFQcm9maWxlJ10gPSBLYWx0dXJhTWV0YWRhdGFQcm9maWxlOyJdfQ==