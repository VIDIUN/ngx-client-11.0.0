/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaDropFolderFileHandlerConfig } from './KalturaDropFolderFileHandlerConfig';
/**
 * @record
 */
export function KalturaDropFolderTrRdsFileHandlerConfigArgs() { }
/** @type {?|undefined} */
KalturaDropFolderTrRdsFileHandlerConfigArgs.prototype.leadPattern;
/** @type {?|undefined} */
KalturaDropFolderTrRdsFileHandlerConfigArgs.prototype.additionalPatterns;
export class KalturaDropFolderTrRdsFileHandlerConfig extends KalturaDropFolderFileHandlerConfig {
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
            objectType: { type: 'c', default: 'KalturaDropFolderTrRdsFileHandlerConfig' },
            leadPattern: { type: 's' },
            additionalPatterns: { type: 's' }
        });
        return result;
    }
}
if (false) {
    /** @type {?} */
    KalturaDropFolderTrRdsFileHandlerConfig.prototype.leadPattern;
    /** @type {?} */
    KalturaDropFolderTrRdsFileHandlerConfig.prototype.additionalPatterns;
}
typesMappingStorage['KalturaDropFolderTrRdsFileHandlerConfig'] = KalturaDropFolderTrRdsFileHandlerConfig;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYURyb3BGb2xkZXJUclJkc0ZpbGVIYW5kbGVyQ29uZmlnLmpzIiwic291cmNlUm9vdCI6Im5nOi8va2FsdHVyYS1uZ3gtY2xpZW50LyIsInNvdXJjZXMiOlsibGliL2FwaS90eXBlcy9LYWx0dXJhRHJvcEZvbGRlclRyUmRzRmlsZUhhbmRsZXJDb25maWcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUNBLE9BQU8sRUFBeUIsbUJBQW1CLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUNwRixPQUFPLEVBQUUsa0NBQWtDLEVBQTBDLE1BQU0sc0NBQXNDLENBQUM7Ozs7Ozs7OztBQVFsSSxNQUFNLDhDQUErQyxTQUFRLGtDQUFrQzs7OztJQUszRixZQUFZLElBQW1EO1FBRTNELEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztLQUNmOzs7O0lBRVMsWUFBWTs7UUFFbEIsTUFBTSxNQUFNLEdBQUcsS0FBSyxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxNQUFNLENBQ1QsTUFBTSxDQUFDLFVBQVUsRUFDakI7WUFDSSxVQUFVLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyx5Q0FBeUMsRUFBRTtZQUM1RixXQUFXLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQzVCLGtCQUFrQixFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtTQUMxQixDQUNKLENBQUM7UUFDRixNQUFNLENBQUMsTUFBTSxDQUFDO0tBQ2pCO0NBQ0o7Ozs7Ozs7QUFFRCxtQkFBbUIsQ0FBQyx5Q0FBeUMsQ0FBQyxHQUFHLHVDQUF1QyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0TWV0YWRhdGEsIHR5cGVzTWFwcGluZ1N0b3JhZ2UgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcbmltcG9ydCB7IEthbHR1cmFEcm9wRm9sZGVyRmlsZUhhbmRsZXJDb25maWcsIEthbHR1cmFEcm9wRm9sZGVyRmlsZUhhbmRsZXJDb25maWdBcmdzIH0gZnJvbSAnLi9LYWx0dXJhRHJvcEZvbGRlckZpbGVIYW5kbGVyQ29uZmlnJztcblxuZXhwb3J0IGludGVyZmFjZSBLYWx0dXJhRHJvcEZvbGRlclRyUmRzRmlsZUhhbmRsZXJDb25maWdBcmdzICBleHRlbmRzIEthbHR1cmFEcm9wRm9sZGVyRmlsZUhhbmRsZXJDb25maWdBcmdzIHtcbiAgICBsZWFkUGF0dGVybj8gOiBzdHJpbmc7XG5cdGFkZGl0aW9uYWxQYXR0ZXJucz8gOiBzdHJpbmc7XG59XG5cblxuZXhwb3J0IGNsYXNzIEthbHR1cmFEcm9wRm9sZGVyVHJSZHNGaWxlSGFuZGxlckNvbmZpZyBleHRlbmRzIEthbHR1cmFEcm9wRm9sZGVyRmlsZUhhbmRsZXJDb25maWcge1xuXG4gICAgbGVhZFBhdHRlcm4gOiBzdHJpbmc7XG5cdGFkZGl0aW9uYWxQYXR0ZXJucyA6IHN0cmluZztcblxuICAgIGNvbnN0cnVjdG9yKGRhdGE/IDogS2FsdHVyYURyb3BGb2xkZXJUclJkc0ZpbGVIYW5kbGVyQ29uZmlnQXJncylcbiAgICB7XG4gICAgICAgIHN1cGVyKGRhdGEpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfZ2V0TWV0YWRhdGEoKSA6IEthbHR1cmFPYmplY3RNZXRhZGF0YVxuICAgIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gc3VwZXIuX2dldE1ldGFkYXRhKCk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICByZXN1bHQucHJvcGVydGllcyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBvYmplY3RUeXBlIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ0thbHR1cmFEcm9wRm9sZGVyVHJSZHNGaWxlSGFuZGxlckNvbmZpZycgfSxcblx0XHRcdFx0bGVhZFBhdHRlcm4gOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0YWRkaXRpb25hbFBhdHRlcm5zIDogeyB0eXBlIDogJ3MnIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbnR5cGVzTWFwcGluZ1N0b3JhZ2VbJ0thbHR1cmFEcm9wRm9sZGVyVHJSZHNGaWxlSGFuZGxlckNvbmZpZyddID0gS2FsdHVyYURyb3BGb2xkZXJUclJkc0ZpbGVIYW5kbGVyQ29uZmlnOyJdfQ==