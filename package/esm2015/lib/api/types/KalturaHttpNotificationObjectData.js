/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaResponseType } from './KalturaResponseType';
import { KalturaKeyValue } from './KalturaKeyValue';
import { KalturaHttpNotificationData } from './KalturaHttpNotificationData';
/**
 * @record
 */
export function KalturaHttpNotificationObjectDataArgs() { }
/** @type {?|undefined} */
KalturaHttpNotificationObjectDataArgs.prototype.apiObjectType;
/** @type {?|undefined} */
KalturaHttpNotificationObjectDataArgs.prototype.format;
/** @type {?|undefined} */
KalturaHttpNotificationObjectDataArgs.prototype.ignoreNull;
/** @type {?|undefined} */
KalturaHttpNotificationObjectDataArgs.prototype.code;
/** @type {?|undefined} */
KalturaHttpNotificationObjectDataArgs.prototype.dataStringReplacements;
export class KalturaHttpNotificationObjectData extends KalturaHttpNotificationData {
    /**
     * @param {?=} data
     */
    constructor(data) {
        super(data);
        if (typeof this.dataStringReplacements === 'undefined')
            this.dataStringReplacements = [];
    }
    /**
     * @return {?}
     */
    _getMetadata() {
        /** @type {?} */
        const result = super._getMetadata();
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaHttpNotificationObjectData' },
            apiObjectType: { type: 's' },
            format: { type: 'en', subTypeConstructor: KalturaResponseType, subType: 'KalturaResponseType' },
            ignoreNull: { type: 'b' },
            code: { type: 's' },
            dataStringReplacements: { type: 'a', subTypeConstructor: KalturaKeyValue, subType: 'KalturaKeyValue' }
        });
        return result;
    }
}
if (false) {
    /** @type {?} */
    KalturaHttpNotificationObjectData.prototype.apiObjectType;
    /** @type {?} */
    KalturaHttpNotificationObjectData.prototype.format;
    /** @type {?} */
    KalturaHttpNotificationObjectData.prototype.ignoreNull;
    /** @type {?} */
    KalturaHttpNotificationObjectData.prototype.code;
    /** @type {?} */
    KalturaHttpNotificationObjectData.prototype.dataStringReplacements;
}
typesMappingStorage['KalturaHttpNotificationObjectData'] = KalturaHttpNotificationObjectData;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUh0dHBOb3RpZmljYXRpb25PYmplY3REYXRhLmpzIiwic291cmNlUm9vdCI6Im5nOi8va2FsdHVyYS1uZ3gtY2xpZW50LyIsInNvdXJjZXMiOlsibGliL2FwaS90eXBlcy9LYWx0dXJhSHR0cE5vdGlmaWNhdGlvbk9iamVjdERhdGEudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUNBLE9BQU8sRUFBeUIsbUJBQW1CLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUNwRixPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUM1RCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDcEQsT0FBTyxFQUFFLDJCQUEyQixFQUFtQyxNQUFNLCtCQUErQixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7QUFXN0csTUFBTSx3Q0FBeUMsU0FBUSwyQkFBMkI7Ozs7SUFROUUsWUFBWSxJQUE2QztRQUVyRCxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDWixFQUFFLENBQUMsQ0FBQyxPQUFPLElBQUksQ0FBQyxzQkFBc0IsS0FBSyxXQUFXLENBQUM7WUFBQyxJQUFJLENBQUMsc0JBQXNCLEdBQUcsRUFBRSxDQUFDO0tBQzVGOzs7O0lBRVMsWUFBWTs7UUFFbEIsTUFBTSxNQUFNLEdBQUcsS0FBSyxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxNQUFNLENBQ1QsTUFBTSxDQUFDLFVBQVUsRUFDakI7WUFDSSxVQUFVLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyxtQ0FBbUMsRUFBRTtZQUN0RixhQUFhLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQzlCLE1BQU0sRUFBRyxFQUFFLElBQUksRUFBRyxJQUFJLEVBQUUsa0JBQWtCLEVBQUcsbUJBQW1CLEVBQUUsT0FBTyxFQUFHLHFCQUFxQixFQUFFO1lBQ25HLFVBQVUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDM0IsSUFBSSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUNyQixzQkFBc0IsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsa0JBQWtCLEVBQUcsZUFBZSxFQUFFLE9BQU8sRUFBRyxpQkFBaUIsRUFBRTtTQUNqRyxDQUNKLENBQUM7UUFDRixNQUFNLENBQUMsTUFBTSxDQUFDO0tBQ2pCO0NBQ0o7Ozs7Ozs7Ozs7Ozs7QUFFRCxtQkFBbUIsQ0FBQyxtQ0FBbUMsQ0FBQyxHQUFHLGlDQUFpQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0TWV0YWRhdGEsIHR5cGVzTWFwcGluZ1N0b3JhZ2UgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcbmltcG9ydCB7IEthbHR1cmFSZXNwb25zZVR5cGUgfSBmcm9tICcuL0thbHR1cmFSZXNwb25zZVR5cGUnO1xuaW1wb3J0IHsgS2FsdHVyYUtleVZhbHVlIH0gZnJvbSAnLi9LYWx0dXJhS2V5VmFsdWUnO1xuaW1wb3J0IHsgS2FsdHVyYUh0dHBOb3RpZmljYXRpb25EYXRhLCBLYWx0dXJhSHR0cE5vdGlmaWNhdGlvbkRhdGFBcmdzIH0gZnJvbSAnLi9LYWx0dXJhSHR0cE5vdGlmaWNhdGlvbkRhdGEnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEthbHR1cmFIdHRwTm90aWZpY2F0aW9uT2JqZWN0RGF0YUFyZ3MgIGV4dGVuZHMgS2FsdHVyYUh0dHBOb3RpZmljYXRpb25EYXRhQXJncyB7XG4gICAgYXBpT2JqZWN0VHlwZT8gOiBzdHJpbmc7XG5cdGZvcm1hdD8gOiBLYWx0dXJhUmVzcG9uc2VUeXBlO1xuXHRpZ25vcmVOdWxsPyA6IGJvb2xlYW47XG5cdGNvZGU/IDogc3RyaW5nO1xuXHRkYXRhU3RyaW5nUmVwbGFjZW1lbnRzPyA6IEthbHR1cmFLZXlWYWx1ZVtdO1xufVxuXG5cbmV4cG9ydCBjbGFzcyBLYWx0dXJhSHR0cE5vdGlmaWNhdGlvbk9iamVjdERhdGEgZXh0ZW5kcyBLYWx0dXJhSHR0cE5vdGlmaWNhdGlvbkRhdGEge1xuXG4gICAgYXBpT2JqZWN0VHlwZSA6IHN0cmluZztcblx0Zm9ybWF0IDogS2FsdHVyYVJlc3BvbnNlVHlwZTtcblx0aWdub3JlTnVsbCA6IGJvb2xlYW47XG5cdGNvZGUgOiBzdHJpbmc7XG5cdGRhdGFTdHJpbmdSZXBsYWNlbWVudHMgOiBLYWx0dXJhS2V5VmFsdWVbXTtcblxuICAgIGNvbnN0cnVjdG9yKGRhdGE/IDogS2FsdHVyYUh0dHBOb3RpZmljYXRpb25PYmplY3REYXRhQXJncylcbiAgICB7XG4gICAgICAgIHN1cGVyKGRhdGEpO1xuICAgICAgICBpZiAodHlwZW9mIHRoaXMuZGF0YVN0cmluZ1JlcGxhY2VtZW50cyA9PT0gJ3VuZGVmaW5lZCcpIHRoaXMuZGF0YVN0cmluZ1JlcGxhY2VtZW50cyA9IFtdO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfZ2V0TWV0YWRhdGEoKSA6IEthbHR1cmFPYmplY3RNZXRhZGF0YVxuICAgIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gc3VwZXIuX2dldE1ldGFkYXRhKCk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICByZXN1bHQucHJvcGVydGllcyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBvYmplY3RUeXBlIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ0thbHR1cmFIdHRwTm90aWZpY2F0aW9uT2JqZWN0RGF0YScgfSxcblx0XHRcdFx0YXBpT2JqZWN0VHlwZSA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRmb3JtYXQgOiB7IHR5cGUgOiAnZW4nLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhUmVzcG9uc2VUeXBlLCBzdWJUeXBlIDogJ0thbHR1cmFSZXNwb25zZVR5cGUnIH0sXG5cdFx0XHRcdGlnbm9yZU51bGwgOiB7IHR5cGUgOiAnYicgfSxcblx0XHRcdFx0Y29kZSA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRkYXRhU3RyaW5nUmVwbGFjZW1lbnRzIDogeyB0eXBlIDogJ2EnLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhS2V5VmFsdWUsIHN1YlR5cGUgOiAnS2FsdHVyYUtleVZhbHVlJyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuXG50eXBlc01hcHBpbmdTdG9yYWdlWydLYWx0dXJhSHR0cE5vdGlmaWNhdGlvbk9iamVjdERhdGEnXSA9IEthbHR1cmFIdHRwTm90aWZpY2F0aW9uT2JqZWN0RGF0YTsiXX0=