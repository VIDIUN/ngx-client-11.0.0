/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaObjectBase } from '../kaltura-object-base';
/**
 * @record
 */
export function KalturaClipDescriptionArgs() { }
/** @type {?|undefined} */
KalturaClipDescriptionArgs.prototype.sourceEntryId;
/** @type {?|undefined} */
KalturaClipDescriptionArgs.prototype.startTime;
/** @type {?|undefined} */
KalturaClipDescriptionArgs.prototype.duration;
/** @type {?|undefined} */
KalturaClipDescriptionArgs.prototype.offsetInDestination;
var KalturaClipDescription = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaClipDescription, _super);
    function KalturaClipDescription(data) {
        return _super.call(this, data) || this;
    }
    /**
     * @return {?}
     */
    KalturaClipDescription.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaClipDescription' },
            sourceEntryId: { type: 's' },
            startTime: { type: 'n' },
            duration: { type: 'n' },
            offsetInDestination: { type: 'n' }
        });
        return result;
    };
    return KalturaClipDescription;
}(KalturaObjectBase));
export { KalturaClipDescription };
if (false) {
    /** @type {?} */
    KalturaClipDescription.prototype.sourceEntryId;
    /** @type {?} */
    KalturaClipDescription.prototype.startTime;
    /** @type {?} */
    KalturaClipDescription.prototype.duration;
    /** @type {?} */
    KalturaClipDescription.prototype.offsetInDestination;
}
typesMappingStorage['KalturaClipDescription'] = KalturaClipDescription;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUNsaXBEZXNjcmlwdGlvbi5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2thbHR1cmEtbmd4LWNsaWVudC8iLCJzb3VyY2VzIjpbImxpYi9hcGkvdHlwZXMvS2FsdHVyYUNsaXBEZXNjcmlwdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLE9BQU8sRUFBeUIsbUJBQW1CLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUNwRixPQUFPLEVBQUUsaUJBQWlCLEVBQXlCLE1BQU0sd0JBQXdCLENBQUM7Ozs7Ozs7Ozs7Ozs7QUFVbEYsSUFBQTtJQUE0QyxrREFBaUI7SUFPekQsZ0NBQVksSUFBa0M7ZUFFMUMsa0JBQU0sSUFBSSxDQUFDO0tBQ2Q7Ozs7SUFFUyw2Q0FBWTs7O0lBQXRCOztRQUVJLElBQU0sTUFBTSxHQUFHLGlCQUFNLFlBQVksV0FBRSxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxNQUFNLENBQ1QsTUFBTSxDQUFDLFVBQVUsRUFDakI7WUFDSSxVQUFVLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyx3QkFBd0IsRUFBRTtZQUMzRSxhQUFhLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQzlCLFNBQVMsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDMUIsUUFBUSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUN6QixtQkFBbUIsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7U0FDM0IsQ0FDSixDQUFDO1FBQ0YsTUFBTSxDQUFDLE1BQU0sQ0FBQztLQUNqQjtpQ0F0Q0w7RUFZNEMsaUJBQWlCLEVBMkI1RCxDQUFBO0FBM0JELGtDQTJCQzs7Ozs7Ozs7Ozs7QUFFRCxtQkFBbUIsQ0FBQyx3QkFBd0IsQ0FBQyxHQUFHLHNCQUFzQixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0TWV0YWRhdGEsIHR5cGVzTWFwcGluZ1N0b3JhZ2UgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcbmltcG9ydCB7IEthbHR1cmFPYmplY3RCYXNlLCBLYWx0dXJhT2JqZWN0QmFzZUFyZ3MgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcblxuZXhwb3J0IGludGVyZmFjZSBLYWx0dXJhQ2xpcERlc2NyaXB0aW9uQXJncyAgZXh0ZW5kcyBLYWx0dXJhT2JqZWN0QmFzZUFyZ3Mge1xuICAgIHNvdXJjZUVudHJ5SWQ/IDogc3RyaW5nO1xuXHRzdGFydFRpbWU/IDogbnVtYmVyO1xuXHRkdXJhdGlvbj8gOiBudW1iZXI7XG5cdG9mZnNldEluRGVzdGluYXRpb24/IDogbnVtYmVyO1xufVxuXG5cbmV4cG9ydCBjbGFzcyBLYWx0dXJhQ2xpcERlc2NyaXB0aW9uIGV4dGVuZHMgS2FsdHVyYU9iamVjdEJhc2Uge1xuXG4gICAgc291cmNlRW50cnlJZCA6IHN0cmluZztcblx0c3RhcnRUaW1lIDogbnVtYmVyO1xuXHRkdXJhdGlvbiA6IG51bWJlcjtcblx0b2Zmc2V0SW5EZXN0aW5hdGlvbiA6IG51bWJlcjtcblxuICAgIGNvbnN0cnVjdG9yKGRhdGE/IDogS2FsdHVyYUNsaXBEZXNjcmlwdGlvbkFyZ3MpXG4gICAge1xuICAgICAgICBzdXBlcihkYXRhKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2dldE1ldGFkYXRhKCkgOiBLYWx0dXJhT2JqZWN0TWV0YWRhdGFcbiAgICB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLl9nZXRNZXRhZGF0YSgpO1xuICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgcmVzdWx0LnByb3BlcnRpZXMsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgb2JqZWN0VHlwZSA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdLYWx0dXJhQ2xpcERlc2NyaXB0aW9uJyB9LFxuXHRcdFx0XHRzb3VyY2VFbnRyeUlkIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdHN0YXJ0VGltZSA6IHsgdHlwZSA6ICduJyB9LFxuXHRcdFx0XHRkdXJhdGlvbiA6IHsgdHlwZSA6ICduJyB9LFxuXHRcdFx0XHRvZmZzZXRJbkRlc3RpbmF0aW9uIDogeyB0eXBlIDogJ24nIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbnR5cGVzTWFwcGluZ1N0b3JhZ2VbJ0thbHR1cmFDbGlwRGVzY3JpcHRpb24nXSA9IEthbHR1cmFDbGlwRGVzY3JpcHRpb247Il19