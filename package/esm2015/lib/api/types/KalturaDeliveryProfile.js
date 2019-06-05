/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
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
export class KalturaDeliveryProfile extends KalturaObjectBase {
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
    }
}
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYURlbGl2ZXJ5UHJvZmlsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2thbHR1cmEtbmd4LWNsaWVudC8iLCJzb3VyY2VzIjpbImxpYi9hcGkvdHlwZXMvS2FsdHVyYURlbGl2ZXJ5UHJvZmlsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0EsT0FBTyxFQUF5QixtQkFBbUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3BGLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQzFFLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQ3BFLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ2hFLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQzlELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQzVELE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQ2xFLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQzFELE9BQU8sRUFBRSxpQkFBaUIsRUFBeUIsTUFBTSx3QkFBd0IsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW1CbEYsTUFBTSw2QkFBOEIsU0FBUSxpQkFBaUI7Ozs7SUF1QnpELFlBQVksSUFBa0M7UUFFMUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO0tBQ2Y7Ozs7SUFFUyxZQUFZOztRQUVsQixNQUFNLE1BQU0sR0FBRyxLQUFLLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDcEMsTUFBTSxDQUFDLE1BQU0sQ0FDVCxNQUFNLENBQUMsVUFBVSxFQUNqQjtZQUNJLFVBQVUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLHdCQUF3QixFQUFFO1lBQzNFLEVBQUUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsUUFBUSxFQUFHLElBQUksRUFBRTtZQUNwQyxTQUFTLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLFFBQVEsRUFBRyxJQUFJLEVBQUU7WUFDM0MsSUFBSSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUNyQixJQUFJLEVBQUcsRUFBRSxJQUFJLEVBQUcsSUFBSSxFQUFFLGtCQUFrQixFQUFHLDBCQUEwQixFQUFFLE9BQU8sRUFBRyw0QkFBNEIsRUFBRTtZQUMvRyxVQUFVLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQzNCLFdBQVcsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDNUIsU0FBUyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxRQUFRLEVBQUcsSUFBSSxFQUFFO1lBQzNDLFNBQVMsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsUUFBUSxFQUFHLElBQUksRUFBRTtZQUMzQyxZQUFZLEVBQUcsRUFBRSxJQUFJLEVBQUcsSUFBSSxFQUFFLGtCQUFrQixFQUFHLHVCQUF1QixFQUFFLE9BQU8sRUFBRyx5QkFBeUIsRUFBRTtZQUNqSCxHQUFHLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3BCLFFBQVEsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsUUFBUSxFQUFHLElBQUksRUFBRTtZQUMxQyxNQUFNLEVBQUcsRUFBRSxJQUFJLEVBQUcsSUFBSSxFQUFFLGtCQUFrQixFQUFHLHFCQUFxQixFQUFFLE9BQU8sRUFBRyx1QkFBdUIsRUFBRTtZQUN2RyxVQUFVLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLGtCQUFrQixFQUFHLG9CQUFvQixFQUFFLE9BQU8sRUFBRyxzQkFBc0IsRUFBRTtZQUN4RyxTQUFTLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLGtCQUFrQixFQUFHLG1CQUFtQixFQUFFLE9BQU8sRUFBRyxxQkFBcUIsRUFBRTtZQUNyRyxTQUFTLEVBQUcsRUFBRSxJQUFJLEVBQUcsSUFBSSxFQUFFLFFBQVEsRUFBRyxJQUFJLEVBQUUsa0JBQWtCLEVBQUcsc0JBQXNCLEVBQUUsT0FBTyxFQUFHLHdCQUF3QixFQUFFO1lBQzdILFFBQVEsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsUUFBUSxFQUFHLElBQUksRUFBRTtZQUMxQyxjQUFjLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQy9CLFFBQVEsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDekIsV0FBVyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUM1Qix5QkFBeUIsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsa0JBQWtCLEVBQUcsa0JBQWtCLEVBQUUsT0FBTyxFQUFHLG9CQUFvQixFQUFFO1NBQzFHLENBQ0osQ0FBQztRQUNGLE1BQU0sQ0FBQyxNQUFNLENBQUM7S0FDakI7Q0FDSjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVELG1CQUFtQixDQUFDLHdCQUF3QixDQUFDLEdBQUcsc0JBQXNCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IEthbHR1cmFPYmplY3RNZXRhZGF0YSwgdHlwZXNNYXBwaW5nU3RvcmFnZSB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuaW1wb3J0IHsgS2FsdHVyYURlbGl2ZXJ5UHJvZmlsZVR5cGUgfSBmcm9tICcuL0thbHR1cmFEZWxpdmVyeVByb2ZpbGVUeXBlJztcbmltcG9ydCB7IEthbHR1cmFQbGF5YmFja1Byb3RvY29sIH0gZnJvbSAnLi9LYWx0dXJhUGxheWJhY2tQcm90b2NvbCc7XG5pbXBvcnQgeyBLYWx0dXJhRGVsaXZlcnlTdGF0dXMgfSBmcm9tICcuL0thbHR1cmFEZWxpdmVyeVN0YXR1cyc7XG5pbXBvcnQgeyBLYWx0dXJhVXJsUmVjb2duaXplciB9IGZyb20gJy4vS2FsdHVyYVVybFJlY29nbml6ZXInO1xuaW1wb3J0IHsgS2FsdHVyYVVybFRva2VuaXplciB9IGZyb20gJy4vS2FsdHVyYVVybFRva2VuaXplcic7XG5pbXBvcnQgeyBLYWx0dXJhTnVsbGFibGVCb29sZWFuIH0gZnJvbSAnLi9LYWx0dXJhTnVsbGFibGVCb29sZWFuJztcbmltcG9ydCB7IEthbHR1cmFBc3NldEZpbHRlciB9IGZyb20gJy4vS2FsdHVyYUFzc2V0RmlsdGVyJztcbmltcG9ydCB7IEthbHR1cmFPYmplY3RCYXNlLCBLYWx0dXJhT2JqZWN0QmFzZUFyZ3MgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcblxuZXhwb3J0IGludGVyZmFjZSBLYWx0dXJhRGVsaXZlcnlQcm9maWxlQXJncyAgZXh0ZW5kcyBLYWx0dXJhT2JqZWN0QmFzZUFyZ3Mge1xuICAgIG5hbWU/IDogc3RyaW5nO1xuXHR0eXBlPyA6IEthbHR1cmFEZWxpdmVyeVByb2ZpbGVUeXBlO1xuXHRzeXN0ZW1OYW1lPyA6IHN0cmluZztcblx0ZGVzY3JpcHRpb24/IDogc3RyaW5nO1xuXHRzdHJlYW1lclR5cGU/IDogS2FsdHVyYVBsYXliYWNrUHJvdG9jb2w7XG5cdHVybD8gOiBzdHJpbmc7XG5cdHN0YXR1cz8gOiBLYWx0dXJhRGVsaXZlcnlTdGF0dXM7XG5cdHJlY29nbml6ZXI/IDogS2FsdHVyYVVybFJlY29nbml6ZXI7XG5cdHRva2VuaXplcj8gOiBLYWx0dXJhVXJsVG9rZW5pemVyO1xuXHRtZWRpYVByb3RvY29scz8gOiBzdHJpbmc7XG5cdHByaW9yaXR5PyA6IG51bWJlcjtcblx0ZXh0cmFQYXJhbXM/IDogc3RyaW5nO1xuXHRzdXBwbGVtZW50YXJ5QXNzZXRzRmlsdGVyPyA6IEthbHR1cmFBc3NldEZpbHRlcjtcbn1cblxuXG5leHBvcnQgY2xhc3MgS2FsdHVyYURlbGl2ZXJ5UHJvZmlsZSBleHRlbmRzIEthbHR1cmFPYmplY3RCYXNlIHtcblxuICAgIHJlYWRvbmx5IGlkIDogbnVtYmVyO1xuXHRyZWFkb25seSBwYXJ0bmVySWQgOiBudW1iZXI7XG5cdG5hbWUgOiBzdHJpbmc7XG5cdHR5cGUgOiBLYWx0dXJhRGVsaXZlcnlQcm9maWxlVHlwZTtcblx0c3lzdGVtTmFtZSA6IHN0cmluZztcblx0ZGVzY3JpcHRpb24gOiBzdHJpbmc7XG5cdHJlYWRvbmx5IGNyZWF0ZWRBdCA6IERhdGU7XG5cdHJlYWRvbmx5IHVwZGF0ZWRBdCA6IERhdGU7XG5cdHN0cmVhbWVyVHlwZSA6IEthbHR1cmFQbGF5YmFja1Byb3RvY29sO1xuXHR1cmwgOiBzdHJpbmc7XG5cdHJlYWRvbmx5IGhvc3ROYW1lIDogc3RyaW5nO1xuXHRzdGF0dXMgOiBLYWx0dXJhRGVsaXZlcnlTdGF0dXM7XG5cdHJlY29nbml6ZXIgOiBLYWx0dXJhVXJsUmVjb2duaXplcjtcblx0dG9rZW5pemVyIDogS2FsdHVyYVVybFRva2VuaXplcjtcblx0cmVhZG9ubHkgaXNEZWZhdWx0IDogS2FsdHVyYU51bGxhYmxlQm9vbGVhbjtcblx0cmVhZG9ubHkgcGFyZW50SWQgOiBudW1iZXI7XG5cdG1lZGlhUHJvdG9jb2xzIDogc3RyaW5nO1xuXHRwcmlvcml0eSA6IG51bWJlcjtcblx0ZXh0cmFQYXJhbXMgOiBzdHJpbmc7XG5cdHN1cHBsZW1lbnRhcnlBc3NldHNGaWx0ZXIgOiBLYWx0dXJhQXNzZXRGaWx0ZXI7XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhPyA6IEthbHR1cmFEZWxpdmVyeVByb2ZpbGVBcmdzKVxuICAgIHtcbiAgICAgICAgc3VwZXIoZGF0YSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9nZXRNZXRhZGF0YSgpIDogS2FsdHVyYU9iamVjdE1ldGFkYXRhXG4gICAge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBzdXBlci5fZ2V0TWV0YWRhdGEoKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHJlc3VsdC5wcm9wZXJ0aWVzLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG9iamVjdFR5cGUgOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnS2FsdHVyYURlbGl2ZXJ5UHJvZmlsZScgfSxcblx0XHRcdFx0aWQgOiB7IHR5cGUgOiAnbicsIHJlYWRPbmx5IDogdHJ1ZSB9LFxuXHRcdFx0XHRwYXJ0bmVySWQgOiB7IHR5cGUgOiAnbicsIHJlYWRPbmx5IDogdHJ1ZSB9LFxuXHRcdFx0XHRuYW1lIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdHR5cGUgOiB7IHR5cGUgOiAnZXMnLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhRGVsaXZlcnlQcm9maWxlVHlwZSwgc3ViVHlwZSA6ICdLYWx0dXJhRGVsaXZlcnlQcm9maWxlVHlwZScgfSxcblx0XHRcdFx0c3lzdGVtTmFtZSA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRkZXNjcmlwdGlvbiA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRjcmVhdGVkQXQgOiB7IHR5cGUgOiAnZCcsIHJlYWRPbmx5IDogdHJ1ZSB9LFxuXHRcdFx0XHR1cGRhdGVkQXQgOiB7IHR5cGUgOiAnZCcsIHJlYWRPbmx5IDogdHJ1ZSB9LFxuXHRcdFx0XHRzdHJlYW1lclR5cGUgOiB7IHR5cGUgOiAnZXMnLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhUGxheWJhY2tQcm90b2NvbCwgc3ViVHlwZSA6ICdLYWx0dXJhUGxheWJhY2tQcm90b2NvbCcgfSxcblx0XHRcdFx0dXJsIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdGhvc3ROYW1lIDogeyB0eXBlIDogJ3MnLCByZWFkT25seSA6IHRydWUgfSxcblx0XHRcdFx0c3RhdHVzIDogeyB0eXBlIDogJ2VuJywgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYURlbGl2ZXJ5U3RhdHVzLCBzdWJUeXBlIDogJ0thbHR1cmFEZWxpdmVyeVN0YXR1cycgfSxcblx0XHRcdFx0cmVjb2duaXplciA6IHsgdHlwZSA6ICdvJywgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYVVybFJlY29nbml6ZXIsIHN1YlR5cGUgOiAnS2FsdHVyYVVybFJlY29nbml6ZXInIH0sXG5cdFx0XHRcdHRva2VuaXplciA6IHsgdHlwZSA6ICdvJywgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYVVybFRva2VuaXplciwgc3ViVHlwZSA6ICdLYWx0dXJhVXJsVG9rZW5pemVyJyB9LFxuXHRcdFx0XHRpc0RlZmF1bHQgOiB7IHR5cGUgOiAnZW4nLCByZWFkT25seSA6IHRydWUsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFOdWxsYWJsZUJvb2xlYW4sIHN1YlR5cGUgOiAnS2FsdHVyYU51bGxhYmxlQm9vbGVhbicgfSxcblx0XHRcdFx0cGFyZW50SWQgOiB7IHR5cGUgOiAnbicsIHJlYWRPbmx5IDogdHJ1ZSB9LFxuXHRcdFx0XHRtZWRpYVByb3RvY29scyA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRwcmlvcml0eSA6IHsgdHlwZSA6ICduJyB9LFxuXHRcdFx0XHRleHRyYVBhcmFtcyA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRzdXBwbGVtZW50YXJ5QXNzZXRzRmlsdGVyIDogeyB0eXBlIDogJ28nLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhQXNzZXRGaWx0ZXIsIHN1YlR5cGUgOiAnS2FsdHVyYUFzc2V0RmlsdGVyJyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuXG50eXBlc01hcHBpbmdTdG9yYWdlWydLYWx0dXJhRGVsaXZlcnlQcm9maWxlJ10gPSBLYWx0dXJhRGVsaXZlcnlQcm9maWxlOyJdfQ==