/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaKeyValue } from './KalturaKeyValue';
import { KalturaJobData } from './KalturaJobData';
/**
 * @record
 */
export function KalturaEventNotificationDispatchJobDataArgs() { }
/** @type {?|undefined} */
KalturaEventNotificationDispatchJobDataArgs.prototype.templateId;
/** @type {?|undefined} */
KalturaEventNotificationDispatchJobDataArgs.prototype.contentParameters;
var KalturaEventNotificationDispatchJobData = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaEventNotificationDispatchJobData, _super);
    function KalturaEventNotificationDispatchJobData(data) {
        var _this = _super.call(this, data) || this;
        if (typeof _this.contentParameters === 'undefined')
            _this.contentParameters = [];
        return _this;
    }
    /**
     * @return {?}
     */
    KalturaEventNotificationDispatchJobData.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaEventNotificationDispatchJobData' },
            templateId: { type: 'n' },
            contentParameters: { type: 'a', subTypeConstructor: KalturaKeyValue, subType: 'KalturaKeyValue' }
        });
        return result;
    };
    return KalturaEventNotificationDispatchJobData;
}(KalturaJobData));
export { KalturaEventNotificationDispatchJobData };
if (false) {
    /** @type {?} */
    KalturaEventNotificationDispatchJobData.prototype.templateId;
    /** @type {?} */
    KalturaEventNotificationDispatchJobData.prototype.contentParameters;
}
typesMappingStorage['KalturaEventNotificationDispatchJobData'] = KalturaEventNotificationDispatchJobData;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUV2ZW50Tm90aWZpY2F0aW9uRGlzcGF0Y2hKb2JEYXRhLmpzIiwic291cmNlUm9vdCI6Im5nOi8va2FsdHVyYS1uZ3gtY2xpZW50LyIsInNvdXJjZXMiOlsibGliL2FwaS90eXBlcy9LYWx0dXJhRXZlbnROb3RpZmljYXRpb25EaXNwYXRjaEpvYkRhdGEudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSxPQUFPLEVBQXlCLG1CQUFtQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDcEYsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ3BELE9BQU8sRUFBRSxjQUFjLEVBQXNCLE1BQU0sa0JBQWtCLENBQUM7Ozs7Ozs7OztBQVF0RSxJQUFBO0lBQTZELG1FQUFjO0lBS3ZFLGlEQUFZLElBQW1EO1FBQS9ELFlBRUksa0JBQU0sSUFBSSxDQUFDLFNBRWQ7UUFERyxFQUFFLENBQUMsQ0FBQyxPQUFPLEtBQUksQ0FBQyxpQkFBaUIsS0FBSyxXQUFXLENBQUM7WUFBQyxLQUFJLENBQUMsaUJBQWlCLEdBQUcsRUFBRSxDQUFDOztLQUNsRjs7OztJQUVTLDhEQUFZOzs7SUFBdEI7O1FBRUksSUFBTSxNQUFNLEdBQUcsaUJBQU0sWUFBWSxXQUFFLENBQUM7UUFDcEMsTUFBTSxDQUFDLE1BQU0sQ0FDVCxNQUFNLENBQUMsVUFBVSxFQUNqQjtZQUNJLFVBQVUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLHlDQUF5QyxFQUFFO1lBQzVGLFVBQVUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDM0IsaUJBQWlCLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLGtCQUFrQixFQUFHLGVBQWUsRUFBRSxPQUFPLEVBQUcsaUJBQWlCLEVBQUU7U0FDNUYsQ0FDSixDQUFDO1FBQ0YsTUFBTSxDQUFDLE1BQU0sQ0FBQztLQUNqQjtrREFsQ0w7RUFXNkQsY0FBYyxFQXdCMUUsQ0FBQTtBQXhCRCxtREF3QkM7Ozs7Ozs7QUFFRCxtQkFBbUIsQ0FBQyx5Q0FBeUMsQ0FBQyxHQUFHLHVDQUF1QyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0TWV0YWRhdGEsIHR5cGVzTWFwcGluZ1N0b3JhZ2UgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcbmltcG9ydCB7IEthbHR1cmFLZXlWYWx1ZSB9IGZyb20gJy4vS2FsdHVyYUtleVZhbHVlJztcbmltcG9ydCB7IEthbHR1cmFKb2JEYXRhLCBLYWx0dXJhSm9iRGF0YUFyZ3MgfSBmcm9tICcuL0thbHR1cmFKb2JEYXRhJztcblxuZXhwb3J0IGludGVyZmFjZSBLYWx0dXJhRXZlbnROb3RpZmljYXRpb25EaXNwYXRjaEpvYkRhdGFBcmdzICBleHRlbmRzIEthbHR1cmFKb2JEYXRhQXJncyB7XG4gICAgdGVtcGxhdGVJZD8gOiBudW1iZXI7XG5cdGNvbnRlbnRQYXJhbWV0ZXJzPyA6IEthbHR1cmFLZXlWYWx1ZVtdO1xufVxuXG5cbmV4cG9ydCBjbGFzcyBLYWx0dXJhRXZlbnROb3RpZmljYXRpb25EaXNwYXRjaEpvYkRhdGEgZXh0ZW5kcyBLYWx0dXJhSm9iRGF0YSB7XG5cbiAgICB0ZW1wbGF0ZUlkIDogbnVtYmVyO1xuXHRjb250ZW50UGFyYW1ldGVycyA6IEthbHR1cmFLZXlWYWx1ZVtdO1xuXG4gICAgY29uc3RydWN0b3IoZGF0YT8gOiBLYWx0dXJhRXZlbnROb3RpZmljYXRpb25EaXNwYXRjaEpvYkRhdGFBcmdzKVxuICAgIHtcbiAgICAgICAgc3VwZXIoZGF0YSk7XG4gICAgICAgIGlmICh0eXBlb2YgdGhpcy5jb250ZW50UGFyYW1ldGVycyA9PT0gJ3VuZGVmaW5lZCcpIHRoaXMuY29udGVudFBhcmFtZXRlcnMgPSBbXTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2dldE1ldGFkYXRhKCkgOiBLYWx0dXJhT2JqZWN0TWV0YWRhdGFcbiAgICB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLl9nZXRNZXRhZGF0YSgpO1xuICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgcmVzdWx0LnByb3BlcnRpZXMsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgb2JqZWN0VHlwZSA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdLYWx0dXJhRXZlbnROb3RpZmljYXRpb25EaXNwYXRjaEpvYkRhdGEnIH0sXG5cdFx0XHRcdHRlbXBsYXRlSWQgOiB7IHR5cGUgOiAnbicgfSxcblx0XHRcdFx0Y29udGVudFBhcmFtZXRlcnMgOiB7IHR5cGUgOiAnYScsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFLZXlWYWx1ZSwgc3ViVHlwZSA6ICdLYWx0dXJhS2V5VmFsdWUnIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbnR5cGVzTWFwcGluZ1N0b3JhZ2VbJ0thbHR1cmFFdmVudE5vdGlmaWNhdGlvbkRpc3BhdGNoSm9iRGF0YSddID0gS2FsdHVyYUV2ZW50Tm90aWZpY2F0aW9uRGlzcGF0Y2hKb2JEYXRhOyJdfQ==