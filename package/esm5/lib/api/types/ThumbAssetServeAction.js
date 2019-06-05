/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { KalturaThumbParams } from './KalturaThumbParams';
import { KalturaThumbnailServeOptions } from './KalturaThumbnailServeOptions';
import { KalturaFileRequest } from '../kaltura-file-request';
/**
 * @record
 */
export function ThumbAssetServeActionArgs() { }
/** @type {?} */
ThumbAssetServeActionArgs.prototype.thumbAssetId;
/** @type {?|undefined} */
ThumbAssetServeActionArgs.prototype.version;
/** @type {?|undefined} */
ThumbAssetServeActionArgs.prototype.thumbParams;
/** @type {?|undefined} */
ThumbAssetServeActionArgs.prototype.options;
/**
 * Build request payload for service 'thumbAsset' action 'serve'.
 *
 * Usage: Serves thumbnail by its id
 *
 * Server response type:         { url: string }
 * Server failure response type: KalturaAPIException
 */
var /**
 * Build request payload for service 'thumbAsset' action 'serve'.
 *
 * Usage: Serves thumbnail by its id
 *
 * Server response type:         { url: string }
 * Server failure response type: KalturaAPIException
 */
ThumbAssetServeAction = /** @class */ (function (_super) {
    tslib_1.__extends(ThumbAssetServeAction, _super);
    function ThumbAssetServeAction(data) {
        return _super.call(this, data) || this;
    }
    /**
     * @return {?}
     */
    ThumbAssetServeAction.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            service: { type: 'c', default: 'thumbasset' },
            action: { type: 'c', default: 'serve' },
            thumbAssetId: { type: 's' },
            version: { type: 'n' },
            thumbParams: { type: 'o', subTypeConstructor: KalturaThumbParams, subType: 'KalturaThumbParams' },
            options: { type: 'o', subTypeConstructor: KalturaThumbnailServeOptions, subType: 'KalturaThumbnailServeOptions' }
        });
        return result;
    };
    return ThumbAssetServeAction;
}(KalturaFileRequest));
/**
 * Build request payload for service 'thumbAsset' action 'serve'.
 *
 * Usage: Serves thumbnail by its id
 *
 * Server response type:         { url: string }
 * Server failure response type: KalturaAPIException
 */
export { ThumbAssetServeAction };
if (false) {
    /** @type {?} */
    ThumbAssetServeAction.prototype.thumbAssetId;
    /** @type {?} */
    ThumbAssetServeAction.prototype.version;
    /** @type {?} */
    ThumbAssetServeAction.prototype.thumbParams;
    /** @type {?} */
    ThumbAssetServeAction.prototype.options;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGh1bWJBc3NldFNlcnZlQWN0aW9uLmpzIiwic291cmNlUm9vdCI6Im5nOi8va2FsdHVyYS1uZ3gtY2xpZW50LyIsInNvdXJjZXMiOlsibGliL2FwaS90eXBlcy9UaHVtYkFzc2V0U2VydmVBY3Rpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFJQSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUMxRCxPQUFPLEVBQUUsNEJBQTRCLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUM5RSxPQUFPLEVBQUUsa0JBQWtCLEVBQTBCLE1BQU0seUJBQXlCLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWlCckY7Ozs7Ozs7O0FBQUE7SUFBMkMsaURBQWtCO0lBT3pELCtCQUFZLElBQWdDO2VBRXhDLGtCQUFNLElBQUksQ0FBQztLQUNkOzs7O0lBRVMsNENBQVk7OztJQUF0Qjs7UUFFSSxJQUFNLE1BQU0sR0FBRyxpQkFBTSxZQUFZLFdBQUUsQ0FBQztRQUNwQyxNQUFNLENBQUMsTUFBTSxDQUNULE1BQU0sQ0FBQyxVQUFVLEVBQ2pCO1lBQ0ksT0FBTyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsWUFBWSxFQUFFO1lBQzVELE1BQU0sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLE9BQU8sRUFBRTtZQUMxQyxZQUFZLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQzdCLE9BQU8sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDeEIsV0FBVyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxrQkFBa0IsRUFBRyxrQkFBa0IsRUFBRSxPQUFPLEVBQUcsb0JBQW9CLEVBQUU7WUFDckcsT0FBTyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxrQkFBa0IsRUFBRyw0QkFBNEIsRUFBRSxPQUFPLEVBQUcsOEJBQThCLEVBQUU7U0FDNUcsQ0FDSixDQUFDO1FBQ0YsTUFBTSxDQUFDLE1BQU0sQ0FBQztLQUNqQjtnQ0FsREw7RUF1QjJDLGtCQUFrQixFQTRCNUQsQ0FBQTs7Ozs7Ozs7O0FBNUJELGlDQTRCQyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgS2FsdHVyYU9iamVjdE1ldGFkYXRhIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5cblxuaW1wb3J0IHsgS2FsdHVyYVRodW1iUGFyYW1zIH0gZnJvbSAnLi9LYWx0dXJhVGh1bWJQYXJhbXMnO1xuaW1wb3J0IHsgS2FsdHVyYVRodW1ibmFpbFNlcnZlT3B0aW9ucyB9IGZyb20gJy4vS2FsdHVyYVRodW1ibmFpbFNlcnZlT3B0aW9ucyc7XG5pbXBvcnQgeyBLYWx0dXJhRmlsZVJlcXVlc3QsIEthbHR1cmFGaWxlUmVxdWVzdEFyZ3MgfSBmcm9tICcuLi9rYWx0dXJhLWZpbGUtcmVxdWVzdCc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgVGh1bWJBc3NldFNlcnZlQWN0aW9uQXJncyAgZXh0ZW5kcyBLYWx0dXJhRmlsZVJlcXVlc3RBcmdzIHtcbiAgICB0aHVtYkFzc2V0SWQgOiBzdHJpbmc7XG5cdHZlcnNpb24/IDogbnVtYmVyO1xuXHR0aHVtYlBhcmFtcz8gOiBLYWx0dXJhVGh1bWJQYXJhbXM7XG5cdG9wdGlvbnM/IDogS2FsdHVyYVRodW1ibmFpbFNlcnZlT3B0aW9ucztcbn1cblxuLyoqXG4gKiBCdWlsZCByZXF1ZXN0IHBheWxvYWQgZm9yIHNlcnZpY2UgJ3RodW1iQXNzZXQnIGFjdGlvbiAnc2VydmUnLlxuICpcbiAqIFVzYWdlOiBTZXJ2ZXMgdGh1bWJuYWlsIGJ5IGl0cyBpZFxuICpcbiAqIFNlcnZlciByZXNwb25zZSB0eXBlOiAgICAgICAgIHsgdXJsOiBzdHJpbmcgfVxuICogU2VydmVyIGZhaWx1cmUgcmVzcG9uc2UgdHlwZTogS2FsdHVyYUFQSUV4Y2VwdGlvblxuICovXG5leHBvcnQgY2xhc3MgVGh1bWJBc3NldFNlcnZlQWN0aW9uIGV4dGVuZHMgS2FsdHVyYUZpbGVSZXF1ZXN0IHtcblxuICAgIHRodW1iQXNzZXRJZCA6IHN0cmluZztcblx0dmVyc2lvbiA6IG51bWJlcjtcblx0dGh1bWJQYXJhbXMgOiBLYWx0dXJhVGh1bWJQYXJhbXM7XG5cdG9wdGlvbnMgOiBLYWx0dXJhVGh1bWJuYWlsU2VydmVPcHRpb25zO1xuXG4gICAgY29uc3RydWN0b3IoZGF0YSA6IFRodW1iQXNzZXRTZXJ2ZUFjdGlvbkFyZ3MpXG4gICAge1xuICAgICAgICBzdXBlcihkYXRhKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2dldE1ldGFkYXRhKCkgOiBLYWx0dXJhT2JqZWN0TWV0YWRhdGFcbiAgICB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLl9nZXRNZXRhZGF0YSgpO1xuICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgcmVzdWx0LnByb3BlcnRpZXMsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VydmljZSA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICd0aHVtYmFzc2V0JyB9LFxuXHRcdFx0XHRhY3Rpb24gOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnc2VydmUnIH0sXG5cdFx0XHRcdHRodW1iQXNzZXRJZCA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHR2ZXJzaW9uIDogeyB0eXBlIDogJ24nIH0sXG5cdFx0XHRcdHRodW1iUGFyYW1zIDogeyB0eXBlIDogJ28nLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhVGh1bWJQYXJhbXMsIHN1YlR5cGUgOiAnS2FsdHVyYVRodW1iUGFyYW1zJyB9LFxuXHRcdFx0XHRvcHRpb25zIDogeyB0eXBlIDogJ28nLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhVGh1bWJuYWlsU2VydmVPcHRpb25zLCBzdWJUeXBlIDogJ0thbHR1cmFUaHVtYm5haWxTZXJ2ZU9wdGlvbnMnIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbiJdfQ==