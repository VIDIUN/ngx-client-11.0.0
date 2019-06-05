/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaOperationAttributes } from './KalturaOperationAttributes';
/**
 * @record
 */
export function KalturaClipAttributesArgs() { }
/** @type {?|undefined} */
KalturaClipAttributesArgs.prototype.offset;
/** @type {?|undefined} */
KalturaClipAttributesArgs.prototype.duration;
/** @type {?|undefined} */
KalturaClipAttributesArgs.prototype.globalOffsetInDestination;
var KalturaClipAttributes = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaClipAttributes, _super);
    function KalturaClipAttributes(data) {
        return _super.call(this, data) || this;
    }
    /**
     * @return {?}
     */
    KalturaClipAttributes.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaClipAttributes' },
            offset: { type: 'n' },
            duration: { type: 'n' },
            globalOffsetInDestination: { type: 'n' }
        });
        return result;
    };
    return KalturaClipAttributes;
}(KalturaOperationAttributes));
export { KalturaClipAttributes };
if (false) {
    /** @type {?} */
    KalturaClipAttributes.prototype.offset;
    /** @type {?} */
    KalturaClipAttributes.prototype.duration;
    /** @type {?} */
    KalturaClipAttributes.prototype.globalOffsetInDestination;
}
typesMappingStorage['KalturaClipAttributes'] = KalturaClipAttributes;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUNsaXBBdHRyaWJ1dGVzLmpzIiwic291cmNlUm9vdCI6Im5nOi8va2FsdHVyYS1uZ3gtY2xpZW50LyIsInNvdXJjZXMiOlsibGliL2FwaS90eXBlcy9LYWx0dXJhQ2xpcEF0dHJpYnV0ZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSxPQUFPLEVBQXlCLG1CQUFtQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDcEYsT0FBTyxFQUFFLDBCQUEwQixFQUFrQyxNQUFNLDhCQUE4QixDQUFDOzs7Ozs7Ozs7OztBQVMxRyxJQUFBO0lBQTJDLGlEQUEwQjtJQU1qRSwrQkFBWSxJQUFpQztlQUV6QyxrQkFBTSxJQUFJLENBQUM7S0FDZDs7OztJQUVTLDRDQUFZOzs7SUFBdEI7O1FBRUksSUFBTSxNQUFNLEdBQUcsaUJBQU0sWUFBWSxXQUFFLENBQUM7UUFDcEMsTUFBTSxDQUFDLE1BQU0sQ0FDVCxNQUFNLENBQUMsVUFBVSxFQUNqQjtZQUNJLFVBQVUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLHVCQUF1QixFQUFFO1lBQzFFLE1BQU0sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDdkIsUUFBUSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUN6Qix5QkFBeUIsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7U0FDakMsQ0FDSixDQUFDO1FBQ0YsTUFBTSxDQUFDLE1BQU0sQ0FBQztLQUNqQjtnQ0FuQ0w7RUFXMkMsMEJBQTBCLEVBeUJwRSxDQUFBO0FBekJELGlDQXlCQzs7Ozs7Ozs7O0FBRUQsbUJBQW1CLENBQUMsdUJBQXVCLENBQUMsR0FBRyxxQkFBcUIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgS2FsdHVyYU9iamVjdE1ldGFkYXRhLCB0eXBlc01hcHBpbmdTdG9yYWdlIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5pbXBvcnQgeyBLYWx0dXJhT3BlcmF0aW9uQXR0cmlidXRlcywgS2FsdHVyYU9wZXJhdGlvbkF0dHJpYnV0ZXNBcmdzIH0gZnJvbSAnLi9LYWx0dXJhT3BlcmF0aW9uQXR0cmlidXRlcyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgS2FsdHVyYUNsaXBBdHRyaWJ1dGVzQXJncyAgZXh0ZW5kcyBLYWx0dXJhT3BlcmF0aW9uQXR0cmlidXRlc0FyZ3Mge1xuICAgIG9mZnNldD8gOiBudW1iZXI7XG5cdGR1cmF0aW9uPyA6IG51bWJlcjtcblx0Z2xvYmFsT2Zmc2V0SW5EZXN0aW5hdGlvbj8gOiBudW1iZXI7XG59XG5cblxuZXhwb3J0IGNsYXNzIEthbHR1cmFDbGlwQXR0cmlidXRlcyBleHRlbmRzIEthbHR1cmFPcGVyYXRpb25BdHRyaWJ1dGVzIHtcblxuICAgIG9mZnNldCA6IG51bWJlcjtcblx0ZHVyYXRpb24gOiBudW1iZXI7XG5cdGdsb2JhbE9mZnNldEluRGVzdGluYXRpb24gOiBudW1iZXI7XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhPyA6IEthbHR1cmFDbGlwQXR0cmlidXRlc0FyZ3MpXG4gICAge1xuICAgICAgICBzdXBlcihkYXRhKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2dldE1ldGFkYXRhKCkgOiBLYWx0dXJhT2JqZWN0TWV0YWRhdGFcbiAgICB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLl9nZXRNZXRhZGF0YSgpO1xuICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgcmVzdWx0LnByb3BlcnRpZXMsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgb2JqZWN0VHlwZSA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdLYWx0dXJhQ2xpcEF0dHJpYnV0ZXMnIH0sXG5cdFx0XHRcdG9mZnNldCA6IHsgdHlwZSA6ICduJyB9LFxuXHRcdFx0XHRkdXJhdGlvbiA6IHsgdHlwZSA6ICduJyB9LFxuXHRcdFx0XHRnbG9iYWxPZmZzZXRJbkRlc3RpbmF0aW9uIDogeyB0eXBlIDogJ24nIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbnR5cGVzTWFwcGluZ1N0b3JhZ2VbJ0thbHR1cmFDbGlwQXR0cmlidXRlcyddID0gS2FsdHVyYUNsaXBBdHRyaWJ1dGVzOyJdfQ==