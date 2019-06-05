/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { KalturaFileRequest } from '../kaltura-file-request';
/**
 * @record
 */
export function DataServeActionArgs() { }
/** @type {?} */
DataServeActionArgs.prototype.entryId;
/** @type {?|undefined} */
DataServeActionArgs.prototype.version;
/** @type {?|undefined} */
DataServeActionArgs.prototype.forceProxy;
/**
 * Build request payload for service 'data' action 'serve'.
 *
 * Usage: serve action returan the file from dataContent field
 *
 * Server response type:         { url: string }
 * Server failure response type: KalturaAPIException
 */
var /**
 * Build request payload for service 'data' action 'serve'.
 *
 * Usage: serve action returan the file from dataContent field
 *
 * Server response type:         { url: string }
 * Server failure response type: KalturaAPIException
 */
DataServeAction = /** @class */ (function (_super) {
    tslib_1.__extends(DataServeAction, _super);
    function DataServeAction(data) {
        var _this = _super.call(this, data) || this;
        if (typeof _this.version === 'undefined')
            _this.version = -1;
        if (typeof _this.forceProxy === 'undefined')
            _this.forceProxy = false;
        return _this;
    }
    /**
     * @return {?}
     */
    DataServeAction.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            service: { type: 'c', default: 'data' },
            action: { type: 'c', default: 'serve' },
            entryId: { type: 's' },
            version: { type: 'n' },
            forceProxy: { type: 'b' }
        });
        return result;
    };
    return DataServeAction;
}(KalturaFileRequest));
/**
 * Build request payload for service 'data' action 'serve'.
 *
 * Usage: serve action returan the file from dataContent field
 *
 * Server response type:         { url: string }
 * Server failure response type: KalturaAPIException
 */
export { DataServeAction };
if (false) {
    /** @type {?} */
    DataServeAction.prototype.entryId;
    /** @type {?} */
    DataServeAction.prototype.version;
    /** @type {?} */
    DataServeAction.prototype.forceProxy;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRGF0YVNlcnZlQWN0aW9uLmpzIiwic291cmNlUm9vdCI6Im5nOi8va2FsdHVyYS1uZ3gtY2xpZW50LyIsInNvdXJjZXMiOlsibGliL2FwaS90eXBlcy9EYXRhU2VydmVBY3Rpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFJQSxPQUFPLEVBQUUsa0JBQWtCLEVBQTBCLE1BQU0seUJBQXlCLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFnQnJGOzs7Ozs7OztBQUFBO0lBQXFDLDJDQUFrQjtJQU1uRCx5QkFBWSxJQUEwQjtRQUF0QyxZQUVJLGtCQUFNLElBQUksQ0FBQyxTQUdkO1FBRkcsRUFBRSxDQUFDLENBQUMsT0FBTyxLQUFJLENBQUMsT0FBTyxLQUFLLFdBQVcsQ0FBQztZQUFDLEtBQUksQ0FBQyxPQUFPLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDakUsRUFBRSxDQUFDLENBQUMsT0FBTyxLQUFJLENBQUMsVUFBVSxLQUFLLFdBQVcsQ0FBQztZQUFDLEtBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDOztLQUNqRTs7OztJQUVTLHNDQUFZOzs7SUFBdEI7O1FBRUksSUFBTSxNQUFNLEdBQUcsaUJBQU0sWUFBWSxXQUFFLENBQUM7UUFDcEMsTUFBTSxDQUFDLE1BQU0sQ0FDVCxNQUFNLENBQUMsVUFBVSxFQUNqQjtZQUNJLE9BQU8sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLE1BQU0sRUFBRTtZQUN0RCxNQUFNLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyxPQUFPLEVBQUU7WUFDMUMsT0FBTyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUN4QixPQUFPLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3hCLFVBQVUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7U0FDbEIsQ0FDSixDQUFDO1FBQ0YsTUFBTSxDQUFDLE1BQU0sQ0FBQztLQUNqQjswQkEvQ0w7RUFvQnFDLGtCQUFrQixFQTRCdEQsQ0FBQTs7Ozs7Ozs7O0FBNUJELDJCQTRCQyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgS2FsdHVyYU9iamVjdE1ldGFkYXRhIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5cblxuaW1wb3J0IHsgS2FsdHVyYUZpbGVSZXF1ZXN0LCBLYWx0dXJhRmlsZVJlcXVlc3RBcmdzIH0gZnJvbSAnLi4va2FsdHVyYS1maWxlLXJlcXVlc3QnO1xuXG5leHBvcnQgaW50ZXJmYWNlIERhdGFTZXJ2ZUFjdGlvbkFyZ3MgIGV4dGVuZHMgS2FsdHVyYUZpbGVSZXF1ZXN0QXJncyB7XG4gICAgZW50cnlJZCA6IHN0cmluZztcblx0dmVyc2lvbj8gOiBudW1iZXI7XG5cdGZvcmNlUHJveHk/IDogYm9vbGVhbjtcbn1cblxuLyoqXG4gKiBCdWlsZCByZXF1ZXN0IHBheWxvYWQgZm9yIHNlcnZpY2UgJ2RhdGEnIGFjdGlvbiAnc2VydmUnLlxuICpcbiAqIFVzYWdlOiBzZXJ2ZSBhY3Rpb24gcmV0dXJhbiB0aGUgZmlsZSBmcm9tIGRhdGFDb250ZW50IGZpZWxkXG4gKlxuICogU2VydmVyIHJlc3BvbnNlIHR5cGU6ICAgICAgICAgeyB1cmw6IHN0cmluZyB9XG4gKiBTZXJ2ZXIgZmFpbHVyZSByZXNwb25zZSB0eXBlOiBLYWx0dXJhQVBJRXhjZXB0aW9uXG4gKi9cbmV4cG9ydCBjbGFzcyBEYXRhU2VydmVBY3Rpb24gZXh0ZW5kcyBLYWx0dXJhRmlsZVJlcXVlc3Qge1xuXG4gICAgZW50cnlJZCA6IHN0cmluZztcblx0dmVyc2lvbiA6IG51bWJlcjtcblx0Zm9yY2VQcm94eSA6IGJvb2xlYW47XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhIDogRGF0YVNlcnZlQWN0aW9uQXJncylcbiAgICB7XG4gICAgICAgIHN1cGVyKGRhdGEpO1xuICAgICAgICBpZiAodHlwZW9mIHRoaXMudmVyc2lvbiA9PT0gJ3VuZGVmaW5lZCcpIHRoaXMudmVyc2lvbiA9IC0xO1xuXHRcdGlmICh0eXBlb2YgdGhpcy5mb3JjZVByb3h5ID09PSAndW5kZWZpbmVkJykgdGhpcy5mb3JjZVByb3h5ID0gZmFsc2U7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9nZXRNZXRhZGF0YSgpIDogS2FsdHVyYU9iamVjdE1ldGFkYXRhXG4gICAge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBzdXBlci5fZ2V0TWV0YWRhdGEoKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHJlc3VsdC5wcm9wZXJ0aWVzLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlcnZpY2UgOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnZGF0YScgfSxcblx0XHRcdFx0YWN0aW9uIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ3NlcnZlJyB9LFxuXHRcdFx0XHRlbnRyeUlkIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdHZlcnNpb24gOiB7IHR5cGUgOiAnbicgfSxcblx0XHRcdFx0Zm9yY2VQcm94eSA6IHsgdHlwZSA6ICdiJyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuXG4iXX0=