/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaStringValue } from './KalturaStringValue';
import { KalturaObjectBase } from '../kaltura-object-base';
/**
 * @record
 */
export function KalturaEventNotificationParameterArgs() { }
/** @type {?|undefined} */
KalturaEventNotificationParameterArgs.prototype.key;
/** @type {?|undefined} */
KalturaEventNotificationParameterArgs.prototype.description;
/** @type {?|undefined} */
KalturaEventNotificationParameterArgs.prototype.value;
export class KalturaEventNotificationParameter extends KalturaObjectBase {
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
            objectType: { type: 'c', default: 'KalturaEventNotificationParameter' },
            key: { type: 's' },
            description: { type: 's' },
            value: { type: 'o', subTypeConstructor: KalturaStringValue, subType: 'KalturaStringValue' }
        });
        return result;
    }
}
if (false) {
    /** @type {?} */
    KalturaEventNotificationParameter.prototype.key;
    /** @type {?} */
    KalturaEventNotificationParameter.prototype.description;
    /** @type {?} */
    KalturaEventNotificationParameter.prototype.value;
}
typesMappingStorage['KalturaEventNotificationParameter'] = KalturaEventNotificationParameter;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUV2ZW50Tm90aWZpY2F0aW9uUGFyYW1ldGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8va2FsdHVyYS1uZ3gtY2xpZW50LyIsInNvdXJjZXMiOlsibGliL2FwaS90eXBlcy9LYWx0dXJhRXZlbnROb3RpZmljYXRpb25QYXJhbWV0ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUNBLE9BQU8sRUFBeUIsbUJBQW1CLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUNwRixPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUMxRCxPQUFPLEVBQUUsaUJBQWlCLEVBQXlCLE1BQU0sd0JBQXdCLENBQUM7Ozs7Ozs7Ozs7O0FBU2xGLE1BQU0sd0NBQXlDLFNBQVEsaUJBQWlCOzs7O0lBTXBFLFlBQVksSUFBNkM7UUFFckQsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO0tBQ2Y7Ozs7SUFFUyxZQUFZOztRQUVsQixNQUFNLE1BQU0sR0FBRyxLQUFLLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDcEMsTUFBTSxDQUFDLE1BQU0sQ0FDVCxNQUFNLENBQUMsVUFBVSxFQUNqQjtZQUNJLFVBQVUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLG1DQUFtQyxFQUFFO1lBQ3RGLEdBQUcsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDcEIsV0FBVyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUM1QixLQUFLLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLGtCQUFrQixFQUFHLGtCQUFrQixFQUFFLE9BQU8sRUFBRyxvQkFBb0IsRUFBRTtTQUN0RixDQUNKLENBQUM7UUFDRixNQUFNLENBQUMsTUFBTSxDQUFDO0tBQ2pCO0NBQ0o7Ozs7Ozs7OztBQUVELG1CQUFtQixDQUFDLG1DQUFtQyxDQUFDLEdBQUcsaUNBQWlDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IEthbHR1cmFPYmplY3RNZXRhZGF0YSwgdHlwZXNNYXBwaW5nU3RvcmFnZSB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuaW1wb3J0IHsgS2FsdHVyYVN0cmluZ1ZhbHVlIH0gZnJvbSAnLi9LYWx0dXJhU3RyaW5nVmFsdWUnO1xuaW1wb3J0IHsgS2FsdHVyYU9iamVjdEJhc2UsIEthbHR1cmFPYmplY3RCYXNlQXJncyB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEthbHR1cmFFdmVudE5vdGlmaWNhdGlvblBhcmFtZXRlckFyZ3MgIGV4dGVuZHMgS2FsdHVyYU9iamVjdEJhc2VBcmdzIHtcbiAgICBrZXk/IDogc3RyaW5nO1xuXHRkZXNjcmlwdGlvbj8gOiBzdHJpbmc7XG5cdHZhbHVlPyA6IEthbHR1cmFTdHJpbmdWYWx1ZTtcbn1cblxuXG5leHBvcnQgY2xhc3MgS2FsdHVyYUV2ZW50Tm90aWZpY2F0aW9uUGFyYW1ldGVyIGV4dGVuZHMgS2FsdHVyYU9iamVjdEJhc2Uge1xuXG4gICAga2V5IDogc3RyaW5nO1xuXHRkZXNjcmlwdGlvbiA6IHN0cmluZztcblx0dmFsdWUgOiBLYWx0dXJhU3RyaW5nVmFsdWU7XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhPyA6IEthbHR1cmFFdmVudE5vdGlmaWNhdGlvblBhcmFtZXRlckFyZ3MpXG4gICAge1xuICAgICAgICBzdXBlcihkYXRhKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2dldE1ldGFkYXRhKCkgOiBLYWx0dXJhT2JqZWN0TWV0YWRhdGFcbiAgICB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLl9nZXRNZXRhZGF0YSgpO1xuICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgcmVzdWx0LnByb3BlcnRpZXMsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgb2JqZWN0VHlwZSA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdLYWx0dXJhRXZlbnROb3RpZmljYXRpb25QYXJhbWV0ZXInIH0sXG5cdFx0XHRcdGtleSA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRkZXNjcmlwdGlvbiA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHR2YWx1ZSA6IHsgdHlwZSA6ICdvJywgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYVN0cmluZ1ZhbHVlLCBzdWJUeXBlIDogJ0thbHR1cmFTdHJpbmdWYWx1ZScgfVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cblxudHlwZXNNYXBwaW5nU3RvcmFnZVsnS2FsdHVyYUV2ZW50Tm90aWZpY2F0aW9uUGFyYW1ldGVyJ10gPSBLYWx0dXJhRXZlbnROb3RpZmljYXRpb25QYXJhbWV0ZXI7Il19