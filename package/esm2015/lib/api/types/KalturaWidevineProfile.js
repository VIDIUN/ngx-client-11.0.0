/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaDrmProfile } from './KalturaDrmProfile';
/**
 * @record
 */
export function KalturaWidevineProfileArgs() { }
/** @type {?|undefined} */
KalturaWidevineProfileArgs.prototype.key;
/** @type {?|undefined} */
KalturaWidevineProfileArgs.prototype.iv;
/** @type {?|undefined} */
KalturaWidevineProfileArgs.prototype.owner;
/** @type {?|undefined} */
KalturaWidevineProfileArgs.prototype.portal;
/** @type {?|undefined} */
KalturaWidevineProfileArgs.prototype.maxGop;
/** @type {?|undefined} */
KalturaWidevineProfileArgs.prototype.regServerHost;
export class KalturaWidevineProfile extends KalturaDrmProfile {
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
            objectType: { type: 'c', default: 'KalturaWidevineProfile' },
            key: { type: 's' },
            iv: { type: 's' },
            owner: { type: 's' },
            portal: { type: 's' },
            maxGop: { type: 'n' },
            regServerHost: { type: 's' }
        });
        return result;
    }
}
if (false) {
    /** @type {?} */
    KalturaWidevineProfile.prototype.key;
    /** @type {?} */
    KalturaWidevineProfile.prototype.iv;
    /** @type {?} */
    KalturaWidevineProfile.prototype.owner;
    /** @type {?} */
    KalturaWidevineProfile.prototype.portal;
    /** @type {?} */
    KalturaWidevineProfile.prototype.maxGop;
    /** @type {?} */
    KalturaWidevineProfile.prototype.regServerHost;
}
typesMappingStorage['KalturaWidevineProfile'] = KalturaWidevineProfile;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYVdpZGV2aW5lUHJvZmlsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2thbHR1cmEtbmd4LWNsaWVudC8iLCJzb3VyY2VzIjpbImxpYi9hcGkvdHlwZXMvS2FsdHVyYVdpZGV2aW5lUHJvZmlsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0EsT0FBTyxFQUF5QixtQkFBbUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3BGLE9BQU8sRUFBRSxpQkFBaUIsRUFBeUIsTUFBTSxxQkFBcUIsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFZL0UsTUFBTSw2QkFBOEIsU0FBUSxpQkFBaUI7Ozs7SUFTekQsWUFBWSxJQUFrQztRQUUxQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7S0FDZjs7OztJQUVTLFlBQVk7O1FBRWxCLE1BQU0sTUFBTSxHQUFHLEtBQUssQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUNwQyxNQUFNLENBQUMsTUFBTSxDQUNULE1BQU0sQ0FBQyxVQUFVLEVBQ2pCO1lBQ0ksVUFBVSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsd0JBQXdCLEVBQUU7WUFDM0UsR0FBRyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUNwQixFQUFFLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ25CLEtBQUssRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDdEIsTUFBTSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUN2QixNQUFNLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3ZCLGFBQWEsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7U0FDckIsQ0FDSixDQUFDO1FBQ0YsTUFBTSxDQUFDLE1BQU0sQ0FBQztLQUNqQjtDQUNKOzs7Ozs7Ozs7Ozs7Ozs7QUFFRCxtQkFBbUIsQ0FBQyx3QkFBd0IsQ0FBQyxHQUFHLHNCQUFzQixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0TWV0YWRhdGEsIHR5cGVzTWFwcGluZ1N0b3JhZ2UgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcbmltcG9ydCB7IEthbHR1cmFEcm1Qcm9maWxlLCBLYWx0dXJhRHJtUHJvZmlsZUFyZ3MgfSBmcm9tICcuL0thbHR1cmFEcm1Qcm9maWxlJztcblxuZXhwb3J0IGludGVyZmFjZSBLYWx0dXJhV2lkZXZpbmVQcm9maWxlQXJncyAgZXh0ZW5kcyBLYWx0dXJhRHJtUHJvZmlsZUFyZ3Mge1xuICAgIGtleT8gOiBzdHJpbmc7XG5cdGl2PyA6IHN0cmluZztcblx0b3duZXI/IDogc3RyaW5nO1xuXHRwb3J0YWw/IDogc3RyaW5nO1xuXHRtYXhHb3A/IDogbnVtYmVyO1xuXHRyZWdTZXJ2ZXJIb3N0PyA6IHN0cmluZztcbn1cblxuXG5leHBvcnQgY2xhc3MgS2FsdHVyYVdpZGV2aW5lUHJvZmlsZSBleHRlbmRzIEthbHR1cmFEcm1Qcm9maWxlIHtcblxuICAgIGtleSA6IHN0cmluZztcblx0aXYgOiBzdHJpbmc7XG5cdG93bmVyIDogc3RyaW5nO1xuXHRwb3J0YWwgOiBzdHJpbmc7XG5cdG1heEdvcCA6IG51bWJlcjtcblx0cmVnU2VydmVySG9zdCA6IHN0cmluZztcblxuICAgIGNvbnN0cnVjdG9yKGRhdGE/IDogS2FsdHVyYVdpZGV2aW5lUHJvZmlsZUFyZ3MpXG4gICAge1xuICAgICAgICBzdXBlcihkYXRhKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2dldE1ldGFkYXRhKCkgOiBLYWx0dXJhT2JqZWN0TWV0YWRhdGFcbiAgICB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLl9nZXRNZXRhZGF0YSgpO1xuICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgcmVzdWx0LnByb3BlcnRpZXMsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgb2JqZWN0VHlwZSA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdLYWx0dXJhV2lkZXZpbmVQcm9maWxlJyB9LFxuXHRcdFx0XHRrZXkgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0aXYgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0b3duZXIgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0cG9ydGFsIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdG1heEdvcCA6IHsgdHlwZSA6ICduJyB9LFxuXHRcdFx0XHRyZWdTZXJ2ZXJIb3N0IDogeyB0eXBlIDogJ3MnIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbnR5cGVzTWFwcGluZ1N0b3JhZ2VbJ0thbHR1cmFXaWRldmluZVByb2ZpbGUnXSA9IEthbHR1cmFXaWRldmluZVByb2ZpbGU7Il19