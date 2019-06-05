/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaBaseEntryMatchAttribute } from './KalturaBaseEntryMatchAttribute';
import { KalturaSearchMatchAttributeCondition } from './KalturaSearchMatchAttributeCondition';
/**
 * @record
 */
export function KalturaBaseEntryMatchAttributeConditionArgs() { }
/** @type {?|undefined} */
KalturaBaseEntryMatchAttributeConditionArgs.prototype.attribute;
var KalturaBaseEntryMatchAttributeCondition = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaBaseEntryMatchAttributeCondition, _super);
    function KalturaBaseEntryMatchAttributeCondition(data) {
        return _super.call(this, data) || this;
    }
    /**
     * @return {?}
     */
    KalturaBaseEntryMatchAttributeCondition.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaBaseEntryMatchAttributeCondition' },
            attribute: { type: 'es', subTypeConstructor: KalturaBaseEntryMatchAttribute, subType: 'KalturaBaseEntryMatchAttribute' }
        });
        return result;
    };
    return KalturaBaseEntryMatchAttributeCondition;
}(KalturaSearchMatchAttributeCondition));
export { KalturaBaseEntryMatchAttributeCondition };
if (false) {
    /** @type {?} */
    KalturaBaseEntryMatchAttributeCondition.prototype.attribute;
}
typesMappingStorage['KalturaBaseEntryMatchAttributeCondition'] = KalturaBaseEntryMatchAttributeCondition;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUJhc2VFbnRyeU1hdGNoQXR0cmlidXRlQ29uZGl0aW9uLmpzIiwic291cmNlUm9vdCI6Im5nOi8va2FsdHVyYS1uZ3gtY2xpZW50LyIsInNvdXJjZXMiOlsibGliL2FwaS90eXBlcy9LYWx0dXJhQmFzZUVudHJ5TWF0Y2hBdHRyaWJ1dGVDb25kaXRpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSxPQUFPLEVBQXlCLG1CQUFtQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDcEYsT0FBTyxFQUFFLDhCQUE4QixFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFDbEYsT0FBTyxFQUFFLG9DQUFvQyxFQUE0QyxNQUFNLHdDQUF3QyxDQUFDOzs7Ozs7O0FBT3hJLElBQUE7SUFBNkQsbUVBQW9DO0lBSTdGLGlEQUFZLElBQW1EO2VBRTNELGtCQUFNLElBQUksQ0FBQztLQUNkOzs7O0lBRVMsOERBQVk7OztJQUF0Qjs7UUFFSSxJQUFNLE1BQU0sR0FBRyxpQkFBTSxZQUFZLFdBQUUsQ0FBQztRQUNwQyxNQUFNLENBQUMsTUFBTSxDQUNULE1BQU0sQ0FBQyxVQUFVLEVBQ2pCO1lBQ0ksVUFBVSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcseUNBQXlDLEVBQUU7WUFDNUYsU0FBUyxFQUFHLEVBQUUsSUFBSSxFQUFHLElBQUksRUFBRSxrQkFBa0IsRUFBRyw4QkFBOEIsRUFBRSxPQUFPLEVBQUcsZ0NBQWdDLEVBQUU7U0FDbkgsQ0FDSixDQUFDO1FBQ0YsTUFBTSxDQUFDLE1BQU0sQ0FBQztLQUNqQjtrREE5Qkw7RUFVNkQsb0NBQW9DLEVBcUJoRyxDQUFBO0FBckJELG1EQXFCQzs7Ozs7QUFFRCxtQkFBbUIsQ0FBQyx5Q0FBeUMsQ0FBQyxHQUFHLHVDQUF1QyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0TWV0YWRhdGEsIHR5cGVzTWFwcGluZ1N0b3JhZ2UgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcbmltcG9ydCB7IEthbHR1cmFCYXNlRW50cnlNYXRjaEF0dHJpYnV0ZSB9IGZyb20gJy4vS2FsdHVyYUJhc2VFbnRyeU1hdGNoQXR0cmlidXRlJztcbmltcG9ydCB7IEthbHR1cmFTZWFyY2hNYXRjaEF0dHJpYnV0ZUNvbmRpdGlvbiwgS2FsdHVyYVNlYXJjaE1hdGNoQXR0cmlidXRlQ29uZGl0aW9uQXJncyB9IGZyb20gJy4vS2FsdHVyYVNlYXJjaE1hdGNoQXR0cmlidXRlQ29uZGl0aW9uJztcblxuZXhwb3J0IGludGVyZmFjZSBLYWx0dXJhQmFzZUVudHJ5TWF0Y2hBdHRyaWJ1dGVDb25kaXRpb25BcmdzICBleHRlbmRzIEthbHR1cmFTZWFyY2hNYXRjaEF0dHJpYnV0ZUNvbmRpdGlvbkFyZ3Mge1xuICAgIGF0dHJpYnV0ZT8gOiBLYWx0dXJhQmFzZUVudHJ5TWF0Y2hBdHRyaWJ1dGU7XG59XG5cblxuZXhwb3J0IGNsYXNzIEthbHR1cmFCYXNlRW50cnlNYXRjaEF0dHJpYnV0ZUNvbmRpdGlvbiBleHRlbmRzIEthbHR1cmFTZWFyY2hNYXRjaEF0dHJpYnV0ZUNvbmRpdGlvbiB7XG5cbiAgICBhdHRyaWJ1dGUgOiBLYWx0dXJhQmFzZUVudHJ5TWF0Y2hBdHRyaWJ1dGU7XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhPyA6IEthbHR1cmFCYXNlRW50cnlNYXRjaEF0dHJpYnV0ZUNvbmRpdGlvbkFyZ3MpXG4gICAge1xuICAgICAgICBzdXBlcihkYXRhKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2dldE1ldGFkYXRhKCkgOiBLYWx0dXJhT2JqZWN0TWV0YWRhdGFcbiAgICB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLl9nZXRNZXRhZGF0YSgpO1xuICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgcmVzdWx0LnByb3BlcnRpZXMsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgb2JqZWN0VHlwZSA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdLYWx0dXJhQmFzZUVudHJ5TWF0Y2hBdHRyaWJ1dGVDb25kaXRpb24nIH0sXG5cdFx0XHRcdGF0dHJpYnV0ZSA6IHsgdHlwZSA6ICdlcycsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFCYXNlRW50cnlNYXRjaEF0dHJpYnV0ZSwgc3ViVHlwZSA6ICdLYWx0dXJhQmFzZUVudHJ5TWF0Y2hBdHRyaWJ1dGUnIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbnR5cGVzTWFwcGluZ1N0b3JhZ2VbJ0thbHR1cmFCYXNlRW50cnlNYXRjaEF0dHJpYnV0ZUNvbmRpdGlvbiddID0gS2FsdHVyYUJhc2VFbnRyeU1hdGNoQXR0cmlidXRlQ29uZGl0aW9uOyJdfQ==