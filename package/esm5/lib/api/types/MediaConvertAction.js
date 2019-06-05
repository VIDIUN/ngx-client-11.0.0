/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { KalturaConversionAttribute } from './KalturaConversionAttribute';
import { KalturaRequest } from '../kaltura-request';
/**
 * @record
 */
export function MediaConvertActionArgs() { }
/** @type {?} */
MediaConvertActionArgs.prototype.entryId;
/** @type {?|undefined} */
MediaConvertActionArgs.prototype.conversionProfileId;
/** @type {?|undefined} */
MediaConvertActionArgs.prototype.dynamicConversionAttributes;
/**
 * Build request payload for service 'media' action 'convert'.
 *
 * Usage: Convert entry
 *
 * Server response type:         number
 * Server failure response type: KalturaAPIException
 */
var /**
 * Build request payload for service 'media' action 'convert'.
 *
 * Usage: Convert entry
 *
 * Server response type:         number
 * Server failure response type: KalturaAPIException
 */
MediaConvertAction = /** @class */ (function (_super) {
    tslib_1.__extends(MediaConvertAction, _super);
    function MediaConvertAction(data) {
        var _this = _super.call(this, data, { responseType: 'n', responseSubType: '', responseConstructor: null }) || this;
        if (typeof _this.dynamicConversionAttributes === 'undefined')
            _this.dynamicConversionAttributes = [];
        return _this;
    }
    /**
     * @return {?}
     */
    MediaConvertAction.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            service: { type: 'c', default: 'media' },
            action: { type: 'c', default: 'convert' },
            entryId: { type: 's' },
            conversionProfileId: { type: 'n' },
            dynamicConversionAttributes: { type: 'a', subTypeConstructor: KalturaConversionAttribute, subType: 'KalturaConversionAttribute' }
        });
        return result;
    };
    return MediaConvertAction;
}(KalturaRequest));
/**
 * Build request payload for service 'media' action 'convert'.
 *
 * Usage: Convert entry
 *
 * Server response type:         number
 * Server failure response type: KalturaAPIException
 */
export { MediaConvertAction };
if (false) {
    /** @type {?} */
    MediaConvertAction.prototype.entryId;
    /** @type {?} */
    MediaConvertAction.prototype.conversionProfileId;
    /** @type {?} */
    MediaConvertAction.prototype.dynamicConversionAttributes;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTWVkaWFDb252ZXJ0QWN0aW9uLmpzIiwic291cmNlUm9vdCI6Im5nOi8va2FsdHVyYS1uZ3gtY2xpZW50LyIsInNvdXJjZXMiOlsibGliL2FwaS90eXBlcy9NZWRpYUNvbnZlcnRBY3Rpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFJQSxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUMxRSxPQUFPLEVBQUUsY0FBYyxFQUFzQixNQUFNLG9CQUFvQixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBZ0J4RTs7Ozs7Ozs7QUFBQTtJQUF3Qyw4Q0FBc0I7SUFNMUQsNEJBQVksSUFBNkI7UUFBekMsWUFFSSxrQkFBTSxJQUFJLEVBQUUsRUFBQyxZQUFZLEVBQUcsR0FBRyxFQUFFLGVBQWUsRUFBRyxFQUFFLEVBQUUsbUJBQW1CLEVBQUcsSUFBSSxFQUFFLENBQUMsU0FFdkY7UUFERyxFQUFFLENBQUMsQ0FBQyxPQUFPLEtBQUksQ0FBQywyQkFBMkIsS0FBSyxXQUFXLENBQUM7WUFBQyxLQUFJLENBQUMsMkJBQTJCLEdBQUcsRUFBRSxDQUFDOztLQUN0Rzs7OztJQUVTLHlDQUFZOzs7SUFBdEI7O1FBRUksSUFBTSxNQUFNLEdBQUcsaUJBQU0sWUFBWSxXQUFFLENBQUM7UUFDcEMsTUFBTSxDQUFDLE1BQU0sQ0FDVCxNQUFNLENBQUMsVUFBVSxFQUNqQjtZQUNJLE9BQU8sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLE9BQU8sRUFBRTtZQUN2RCxNQUFNLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyxTQUFTLEVBQUU7WUFDNUMsT0FBTyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUN4QixtQkFBbUIsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDcEMsMkJBQTJCLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLGtCQUFrQixFQUFHLDBCQUEwQixFQUFFLE9BQU8sRUFBRyw0QkFBNEIsRUFBRTtTQUM1SCxDQUNKLENBQUM7UUFDRixNQUFNLENBQUMsTUFBTSxDQUFDO0tBQ2pCOzZCQS9DTDtFQXFCd0MsY0FBYyxFQTJCckQsQ0FBQTs7Ozs7Ozs7O0FBM0JELDhCQTJCQyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgS2FsdHVyYU9iamVjdE1ldGFkYXRhIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5cblxuaW1wb3J0IHsgS2FsdHVyYUNvbnZlcnNpb25BdHRyaWJ1dGUgfSBmcm9tICcuL0thbHR1cmFDb252ZXJzaW9uQXR0cmlidXRlJztcbmltcG9ydCB7IEthbHR1cmFSZXF1ZXN0LCBLYWx0dXJhUmVxdWVzdEFyZ3MgfSBmcm9tICcuLi9rYWx0dXJhLXJlcXVlc3QnO1xuXG5leHBvcnQgaW50ZXJmYWNlIE1lZGlhQ29udmVydEFjdGlvbkFyZ3MgIGV4dGVuZHMgS2FsdHVyYVJlcXVlc3RBcmdzIHtcbiAgICBlbnRyeUlkIDogc3RyaW5nO1xuXHRjb252ZXJzaW9uUHJvZmlsZUlkPyA6IG51bWJlcjtcblx0ZHluYW1pY0NvbnZlcnNpb25BdHRyaWJ1dGVzPyA6IEthbHR1cmFDb252ZXJzaW9uQXR0cmlidXRlW107XG59XG5cbi8qKlxuICogQnVpbGQgcmVxdWVzdCBwYXlsb2FkIGZvciBzZXJ2aWNlICdtZWRpYScgYWN0aW9uICdjb252ZXJ0Jy5cbiAqXG4gKiBVc2FnZTogQ29udmVydCBlbnRyeVxuICpcbiAqIFNlcnZlciByZXNwb25zZSB0eXBlOiAgICAgICAgIG51bWJlclxuICogU2VydmVyIGZhaWx1cmUgcmVzcG9uc2UgdHlwZTogS2FsdHVyYUFQSUV4Y2VwdGlvblxuICovXG5leHBvcnQgY2xhc3MgTWVkaWFDb252ZXJ0QWN0aW9uIGV4dGVuZHMgS2FsdHVyYVJlcXVlc3Q8bnVtYmVyPiB7XG5cbiAgICBlbnRyeUlkIDogc3RyaW5nO1xuXHRjb252ZXJzaW9uUHJvZmlsZUlkIDogbnVtYmVyO1xuXHRkeW5hbWljQ29udmVyc2lvbkF0dHJpYnV0ZXMgOiBLYWx0dXJhQ29udmVyc2lvbkF0dHJpYnV0ZVtdO1xuXG4gICAgY29uc3RydWN0b3IoZGF0YSA6IE1lZGlhQ29udmVydEFjdGlvbkFyZ3MpXG4gICAge1xuICAgICAgICBzdXBlcihkYXRhLCB7cmVzcG9uc2VUeXBlIDogJ24nLCByZXNwb25zZVN1YlR5cGUgOiAnJywgcmVzcG9uc2VDb25zdHJ1Y3RvciA6IG51bGwgfSk7XG4gICAgICAgIGlmICh0eXBlb2YgdGhpcy5keW5hbWljQ29udmVyc2lvbkF0dHJpYnV0ZXMgPT09ICd1bmRlZmluZWQnKSB0aGlzLmR5bmFtaWNDb252ZXJzaW9uQXR0cmlidXRlcyA9IFtdO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfZ2V0TWV0YWRhdGEoKSA6IEthbHR1cmFPYmplY3RNZXRhZGF0YVxuICAgIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gc3VwZXIuX2dldE1ldGFkYXRhKCk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICByZXN1bHQucHJvcGVydGllcyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZXJ2aWNlIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ21lZGlhJyB9LFxuXHRcdFx0XHRhY3Rpb24gOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnY29udmVydCcgfSxcblx0XHRcdFx0ZW50cnlJZCA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRjb252ZXJzaW9uUHJvZmlsZUlkIDogeyB0eXBlIDogJ24nIH0sXG5cdFx0XHRcdGR5bmFtaWNDb252ZXJzaW9uQXR0cmlidXRlcyA6IHsgdHlwZSA6ICdhJywgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYUNvbnZlcnNpb25BdHRyaWJ1dGUsIHN1YlR5cGUgOiAnS2FsdHVyYUNvbnZlcnNpb25BdHRyaWJ1dGUnIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbiJdfQ==