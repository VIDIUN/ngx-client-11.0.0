/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaDeliveryProfileType } from './KalturaDeliveryProfileType';
import { KalturaPlaybackProtocol } from './KalturaPlaybackProtocol';
import { KalturaDeliveryStatus } from './KalturaDeliveryStatus';
import { KalturaUrlRecognizer } from './KalturaUrlRecognizer';
import { KalturaUrlTokenizer } from './KalturaUrlTokenizer';
import { KalturaNullableBoolean } from './KalturaNullableBoolean';
import { KalturaAssetFilter } from './KalturaAssetFilter';
import { KalturaObjectBase } from '../kaltura-object-base';
/**
 * @record
 */
export function KalturaDeliveryProfileArgs() { }
/** @type {?|undefined} */
KalturaDeliveryProfileArgs.prototype.name;
/** @type {?|undefined} */
KalturaDeliveryProfileArgs.prototype.type;
/** @type {?|undefined} */
KalturaDeliveryProfileArgs.prototype.systemName;
/** @type {?|undefined} */
KalturaDeliveryProfileArgs.prototype.description;
/** @type {?|undefined} */
KalturaDeliveryProfileArgs.prototype.streamerType;
/** @type {?|undefined} */
KalturaDeliveryProfileArgs.prototype.url;
/** @type {?|undefined} */
KalturaDeliveryProfileArgs.prototype.status;
/** @type {?|undefined} */
KalturaDeliveryProfileArgs.prototype.recognizer;
/** @type {?|undefined} */
KalturaDeliveryProfileArgs.prototype.tokenizer;
/** @type {?|undefined} */
KalturaDeliveryProfileArgs.prototype.mediaProtocols;
/** @type {?|undefined} */
KalturaDeliveryProfileArgs.prototype.priority;
/** @type {?|undefined} */
KalturaDeliveryProfileArgs.prototype.extraParams;
/** @type {?|undefined} */
KalturaDeliveryProfileArgs.prototype.supplementaryAssetsFilter;
var KalturaDeliveryProfile = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaDeliveryProfile, _super);
    function KalturaDeliveryProfile(data) {
        return _super.call(this, data) || this;
    }
    /**
     * @return {?}
     */
    KalturaDeliveryProfile.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaDeliveryProfile' },
            id: { type: 'n', readOnly: true },
            partnerId: { type: 'n', readOnly: true },
            name: { type: 's' },
            type: { type: 'es', subTypeConstructor: KalturaDeliveryProfileType, subType: 'KalturaDeliveryProfileType' },
            systemName: { type: 's' },
            description: { type: 's' },
            createdAt: { type: 'd', readOnly: true },
            updatedAt: { type: 'd', readOnly: true },
            streamerType: { type: 'es', subTypeConstructor: KalturaPlaybackProtocol, subType: 'KalturaPlaybackProtocol' },
            url: { type: 's' },
            hostName: { type: 's', readOnly: true },
            status: { type: 'en', subTypeConstructor: KalturaDeliveryStatus, subType: 'KalturaDeliveryStatus' },
            recognizer: { type: 'o', subTypeConstructor: KalturaUrlRecognizer, subType: 'KalturaUrlRecognizer' },
            tokenizer: { type: 'o', subTypeConstructor: KalturaUrlTokenizer, subType: 'KalturaUrlTokenizer' },
            isDefault: { type: 'en', readOnly: true, subTypeConstructor: KalturaNullableBoolean, subType: 'KalturaNullableBoolean' },
            parentId: { type: 'n', readOnly: true },
            mediaProtocols: { type: 's' },
            priority: { type: 'n' },
            extraParams: { type: 's' },
            supplementaryAssetsFilter: { type: 'o', subTypeConstructor: KalturaAssetFilter, subType: 'KalturaAssetFilter' }
        });
        return result;
    };
    return KalturaDeliveryProfile;
}(KalturaObjectBase));
export { KalturaDeliveryProfile };
if (false) {
    /** @type {?} */
    KalturaDeliveryProfile.prototype.id;
    /** @type {?} */
    KalturaDeliveryProfile.prototype.partnerId;
    /** @type {?} */
    KalturaDeliveryProfile.prototype.name;
    /** @type {?} */
    KalturaDeliveryProfile.prototype.type;
    /** @type {?} */
    KalturaDeliveryProfile.prototype.systemName;
    /** @type {?} */
    KalturaDeliveryProfile.prototype.description;
    /** @type {?} */
    KalturaDeliveryProfile.prototype.createdAt;
    /** @type {?} */
    KalturaDeliveryProfile.prototype.updatedAt;
    /** @type {?} */
    KalturaDeliveryProfile.prototype.streamerType;
    /** @type {?} */
    KalturaDeliveryProfile.prototype.url;
    /** @type {?} */
    KalturaDeliveryProfile.prototype.hostName;
    /** @type {?} */
    KalturaDeliveryProfile.prototype.status;
    /** @type {?} */
    KalturaDeliveryProfile.prototype.recognizer;
    /** @type {?} */
    KalturaDeliveryProfile.prototype.tokenizer;
    /** @type {?} */
    KalturaDeliveryProfile.prototype.isDefault;
    /** @type {?} */
    KalturaDeliveryProfile.prototype.parentId;
    /** @type {?} */
    KalturaDeliveryProfile.prototype.mediaProtocols;
    /** @type {?} */
    KalturaDeliveryProfile.prototype.priority;
    /** @type {?} */
    KalturaDeliveryProfile.prototype.extraParams;
    /** @type {?} */
    KalturaDeliveryProfile.prototype.supplementaryAssetsFilter;
}
typesMappingStorage['KalturaDeliveryProfile'] = KalturaDeliveryProfile;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYURlbGl2ZXJ5UHJvZmlsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2thbHR1cmEtbmd4LWNsaWVudC8iLCJzb3VyY2VzIjpbImxpYi9hcGkvdHlwZXMvS2FsdHVyYURlbGl2ZXJ5UHJvZmlsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLE9BQU8sRUFBeUIsbUJBQW1CLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUNwRixPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUMxRSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUNwRSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUNoRSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUM5RCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUM1RCxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUNsRSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUMxRCxPQUFPLEVBQUUsaUJBQWlCLEVBQXlCLE1BQU0sd0JBQXdCLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFtQmxGLElBQUE7SUFBNEMsa0RBQWlCO0lBdUJ6RCxnQ0FBWSxJQUFrQztlQUUxQyxrQkFBTSxJQUFJLENBQUM7S0FDZDs7OztJQUVTLDZDQUFZOzs7SUFBdEI7O1FBRUksSUFBTSxNQUFNLEdBQUcsaUJBQU0sWUFBWSxXQUFFLENBQUM7UUFDcEMsTUFBTSxDQUFDLE1BQU0sQ0FDVCxNQUFNLENBQUMsVUFBVSxFQUNqQjtZQUNJLFVBQVUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLHdCQUF3QixFQUFFO1lBQzNFLEVBQUUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsUUFBUSxFQUFHLElBQUksRUFBRTtZQUNwQyxTQUFTLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLFFBQVEsRUFBRyxJQUFJLEVBQUU7WUFDM0MsSUFBSSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUNyQixJQUFJLEVBQUcsRUFBRSxJQUFJLEVBQUcsSUFBSSxFQUFFLGtCQUFrQixFQUFHLDBCQUEwQixFQUFFLE9BQU8sRUFBRyw0QkFBNEIsRUFBRTtZQUMvRyxVQUFVLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQzNCLFdBQVcsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDNUIsU0FBUyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxRQUFRLEVBQUcsSUFBSSxFQUFFO1lBQzNDLFNBQVMsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsUUFBUSxFQUFHLElBQUksRUFBRTtZQUMzQyxZQUFZLEVBQUcsRUFBRSxJQUFJLEVBQUcsSUFBSSxFQUFFLGtCQUFrQixFQUFHLHVCQUF1QixFQUFFLE9BQU8sRUFBRyx5QkFBeUIsRUFBRTtZQUNqSCxHQUFHLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3BCLFFBQVEsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsUUFBUSxFQUFHLElBQUksRUFBRTtZQUMxQyxNQUFNLEVBQUcsRUFBRSxJQUFJLEVBQUcsSUFBSSxFQUFFLGtCQUFrQixFQUFHLHFCQUFxQixFQUFFLE9BQU8sRUFBRyx1QkFBdUIsRUFBRTtZQUN2RyxVQUFVLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLGtCQUFrQixFQUFHLG9CQUFvQixFQUFFLE9BQU8sRUFBRyxzQkFBc0IsRUFBRTtZQUN4RyxTQUFTLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLGtCQUFrQixFQUFHLG1CQUFtQixFQUFFLE9BQU8sRUFBRyxxQkFBcUIsRUFBRTtZQUNyRyxTQUFTLEVBQUcsRUFBRSxJQUFJLEVBQUcsSUFBSSxFQUFFLFFBQVEsRUFBRyxJQUFJLEVBQUUsa0JBQWtCLEVBQUcsc0JBQXNCLEVBQUUsT0FBTyxFQUFHLHdCQUF3QixFQUFFO1lBQzdILFFBQVEsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsUUFBUSxFQUFHLElBQUksRUFBRTtZQUMxQyxjQUFjLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQy9CLFFBQVEsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDekIsV0FBVyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUM1Qix5QkFBeUIsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsa0JBQWtCLEVBQUcsa0JBQWtCLEVBQUUsT0FBTyxFQUFHLG9CQUFvQixFQUFFO1NBQzFHLENBQ0osQ0FBQztRQUNGLE1BQU0sQ0FBQyxNQUFNLENBQUM7S0FDakI7aUNBdEZMO0VBNEI0QyxpQkFBaUIsRUEyRDVELENBQUE7QUEzREQsa0NBMkRDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUQsbUJBQW1CLENBQUMsd0JBQXdCLENBQUMsR0FBRyxzQkFBc0IsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgS2FsdHVyYU9iamVjdE1ldGFkYXRhLCB0eXBlc01hcHBpbmdTdG9yYWdlIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5pbXBvcnQgeyBLYWx0dXJhRGVsaXZlcnlQcm9maWxlVHlwZSB9IGZyb20gJy4vS2FsdHVyYURlbGl2ZXJ5UHJvZmlsZVR5cGUnO1xuaW1wb3J0IHsgS2FsdHVyYVBsYXliYWNrUHJvdG9jb2wgfSBmcm9tICcuL0thbHR1cmFQbGF5YmFja1Byb3RvY29sJztcbmltcG9ydCB7IEthbHR1cmFEZWxpdmVyeVN0YXR1cyB9IGZyb20gJy4vS2FsdHVyYURlbGl2ZXJ5U3RhdHVzJztcbmltcG9ydCB7IEthbHR1cmFVcmxSZWNvZ25pemVyIH0gZnJvbSAnLi9LYWx0dXJhVXJsUmVjb2duaXplcic7XG5pbXBvcnQgeyBLYWx0dXJhVXJsVG9rZW5pemVyIH0gZnJvbSAnLi9LYWx0dXJhVXJsVG9rZW5pemVyJztcbmltcG9ydCB7IEthbHR1cmFOdWxsYWJsZUJvb2xlYW4gfSBmcm9tICcuL0thbHR1cmFOdWxsYWJsZUJvb2xlYW4nO1xuaW1wb3J0IHsgS2FsdHVyYUFzc2V0RmlsdGVyIH0gZnJvbSAnLi9LYWx0dXJhQXNzZXRGaWx0ZXInO1xuaW1wb3J0IHsgS2FsdHVyYU9iamVjdEJhc2UsIEthbHR1cmFPYmplY3RCYXNlQXJncyB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEthbHR1cmFEZWxpdmVyeVByb2ZpbGVBcmdzICBleHRlbmRzIEthbHR1cmFPYmplY3RCYXNlQXJncyB7XG4gICAgbmFtZT8gOiBzdHJpbmc7XG5cdHR5cGU/IDogS2FsdHVyYURlbGl2ZXJ5UHJvZmlsZVR5cGU7XG5cdHN5c3RlbU5hbWU/IDogc3RyaW5nO1xuXHRkZXNjcmlwdGlvbj8gOiBzdHJpbmc7XG5cdHN0cmVhbWVyVHlwZT8gOiBLYWx0dXJhUGxheWJhY2tQcm90b2NvbDtcblx0dXJsPyA6IHN0cmluZztcblx0c3RhdHVzPyA6IEthbHR1cmFEZWxpdmVyeVN0YXR1cztcblx0cmVjb2duaXplcj8gOiBLYWx0dXJhVXJsUmVjb2duaXplcjtcblx0dG9rZW5pemVyPyA6IEthbHR1cmFVcmxUb2tlbml6ZXI7XG5cdG1lZGlhUHJvdG9jb2xzPyA6IHN0cmluZztcblx0cHJpb3JpdHk/IDogbnVtYmVyO1xuXHRleHRyYVBhcmFtcz8gOiBzdHJpbmc7XG5cdHN1cHBsZW1lbnRhcnlBc3NldHNGaWx0ZXI/IDogS2FsdHVyYUFzc2V0RmlsdGVyO1xufVxuXG5cbmV4cG9ydCBjbGFzcyBLYWx0dXJhRGVsaXZlcnlQcm9maWxlIGV4dGVuZHMgS2FsdHVyYU9iamVjdEJhc2Uge1xuXG4gICAgcmVhZG9ubHkgaWQgOiBudW1iZXI7XG5cdHJlYWRvbmx5IHBhcnRuZXJJZCA6IG51bWJlcjtcblx0bmFtZSA6IHN0cmluZztcblx0dHlwZSA6IEthbHR1cmFEZWxpdmVyeVByb2ZpbGVUeXBlO1xuXHRzeXN0ZW1OYW1lIDogc3RyaW5nO1xuXHRkZXNjcmlwdGlvbiA6IHN0cmluZztcblx0cmVhZG9ubHkgY3JlYXRlZEF0IDogRGF0ZTtcblx0cmVhZG9ubHkgdXBkYXRlZEF0IDogRGF0ZTtcblx0c3RyZWFtZXJUeXBlIDogS2FsdHVyYVBsYXliYWNrUHJvdG9jb2w7XG5cdHVybCA6IHN0cmluZztcblx0cmVhZG9ubHkgaG9zdE5hbWUgOiBzdHJpbmc7XG5cdHN0YXR1cyA6IEthbHR1cmFEZWxpdmVyeVN0YXR1cztcblx0cmVjb2duaXplciA6IEthbHR1cmFVcmxSZWNvZ25pemVyO1xuXHR0b2tlbml6ZXIgOiBLYWx0dXJhVXJsVG9rZW5pemVyO1xuXHRyZWFkb25seSBpc0RlZmF1bHQgOiBLYWx0dXJhTnVsbGFibGVCb29sZWFuO1xuXHRyZWFkb25seSBwYXJlbnRJZCA6IG51bWJlcjtcblx0bWVkaWFQcm90b2NvbHMgOiBzdHJpbmc7XG5cdHByaW9yaXR5IDogbnVtYmVyO1xuXHRleHRyYVBhcmFtcyA6IHN0cmluZztcblx0c3VwcGxlbWVudGFyeUFzc2V0c0ZpbHRlciA6IEthbHR1cmFBc3NldEZpbHRlcjtcblxuICAgIGNvbnN0cnVjdG9yKGRhdGE/IDogS2FsdHVyYURlbGl2ZXJ5UHJvZmlsZUFyZ3MpXG4gICAge1xuICAgICAgICBzdXBlcihkYXRhKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2dldE1ldGFkYXRhKCkgOiBLYWx0dXJhT2JqZWN0TWV0YWRhdGFcbiAgICB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLl9nZXRNZXRhZGF0YSgpO1xuICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgcmVzdWx0LnByb3BlcnRpZXMsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgb2JqZWN0VHlwZSA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdLYWx0dXJhRGVsaXZlcnlQcm9maWxlJyB9LFxuXHRcdFx0XHRpZCA6IHsgdHlwZSA6ICduJywgcmVhZE9ubHkgOiB0cnVlIH0sXG5cdFx0XHRcdHBhcnRuZXJJZCA6IHsgdHlwZSA6ICduJywgcmVhZE9ubHkgOiB0cnVlIH0sXG5cdFx0XHRcdG5hbWUgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0dHlwZSA6IHsgdHlwZSA6ICdlcycsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFEZWxpdmVyeVByb2ZpbGVUeXBlLCBzdWJUeXBlIDogJ0thbHR1cmFEZWxpdmVyeVByb2ZpbGVUeXBlJyB9LFxuXHRcdFx0XHRzeXN0ZW1OYW1lIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdGRlc2NyaXB0aW9uIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdGNyZWF0ZWRBdCA6IHsgdHlwZSA6ICdkJywgcmVhZE9ubHkgOiB0cnVlIH0sXG5cdFx0XHRcdHVwZGF0ZWRBdCA6IHsgdHlwZSA6ICdkJywgcmVhZE9ubHkgOiB0cnVlIH0sXG5cdFx0XHRcdHN0cmVhbWVyVHlwZSA6IHsgdHlwZSA6ICdlcycsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFQbGF5YmFja1Byb3RvY29sLCBzdWJUeXBlIDogJ0thbHR1cmFQbGF5YmFja1Byb3RvY29sJyB9LFxuXHRcdFx0XHR1cmwgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0aG9zdE5hbWUgOiB7IHR5cGUgOiAncycsIHJlYWRPbmx5IDogdHJ1ZSB9LFxuXHRcdFx0XHRzdGF0dXMgOiB7IHR5cGUgOiAnZW4nLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhRGVsaXZlcnlTdGF0dXMsIHN1YlR5cGUgOiAnS2FsdHVyYURlbGl2ZXJ5U3RhdHVzJyB9LFxuXHRcdFx0XHRyZWNvZ25pemVyIDogeyB0eXBlIDogJ28nLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhVXJsUmVjb2duaXplciwgc3ViVHlwZSA6ICdLYWx0dXJhVXJsUmVjb2duaXplcicgfSxcblx0XHRcdFx0dG9rZW5pemVyIDogeyB0eXBlIDogJ28nLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhVXJsVG9rZW5pemVyLCBzdWJUeXBlIDogJ0thbHR1cmFVcmxUb2tlbml6ZXInIH0sXG5cdFx0XHRcdGlzRGVmYXVsdCA6IHsgdHlwZSA6ICdlbicsIHJlYWRPbmx5IDogdHJ1ZSwgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYU51bGxhYmxlQm9vbGVhbiwgc3ViVHlwZSA6ICdLYWx0dXJhTnVsbGFibGVCb29sZWFuJyB9LFxuXHRcdFx0XHRwYXJlbnRJZCA6IHsgdHlwZSA6ICduJywgcmVhZE9ubHkgOiB0cnVlIH0sXG5cdFx0XHRcdG1lZGlhUHJvdG9jb2xzIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdHByaW9yaXR5IDogeyB0eXBlIDogJ24nIH0sXG5cdFx0XHRcdGV4dHJhUGFyYW1zIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdHN1cHBsZW1lbnRhcnlBc3NldHNGaWx0ZXIgOiB7IHR5cGUgOiAnbycsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFBc3NldEZpbHRlciwgc3ViVHlwZSA6ICdLYWx0dXJhQXNzZXRGaWx0ZXInIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbnR5cGVzTWFwcGluZ1N0b3JhZ2VbJ0thbHR1cmFEZWxpdmVyeVByb2ZpbGUnXSA9IEthbHR1cmFEZWxpdmVyeVByb2ZpbGU7Il19