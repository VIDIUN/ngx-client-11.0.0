/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaConferenceRoomStatus } from './KalturaConferenceRoomStatus';
import { KalturaEntryServerNode } from './KalturaEntryServerNode';
/**
 * @record
 */
export function KalturaConferenceEntryServerNodeArgs() { }
var KalturaConferenceEntryServerNode = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaConferenceEntryServerNode, _super);
    function KalturaConferenceEntryServerNode(data) {
        return _super.call(this, data) || this;
    }
    /**
     * @return {?}
     */
    KalturaConferenceEntryServerNode.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaConferenceEntryServerNode' },
            confRoomStatus: { type: 'en', readOnly: true, subTypeConstructor: KalturaConferenceRoomStatus, subType: 'KalturaConferenceRoomStatus' },
            registered: { type: 'n', readOnly: true }
        });
        return result;
    };
    return KalturaConferenceEntryServerNode;
}(KalturaEntryServerNode));
export { KalturaConferenceEntryServerNode };
if (false) {
    /** @type {?} */
    KalturaConferenceEntryServerNode.prototype.confRoomStatus;
    /** @type {?} */
    KalturaConferenceEntryServerNode.prototype.registered;
}
typesMappingStorage['KalturaConferenceEntryServerNode'] = KalturaConferenceEntryServerNode;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUNvbmZlcmVuY2VFbnRyeVNlcnZlck5vZGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9rYWx0dXJhLW5neC1jbGllbnQvIiwic291cmNlcyI6WyJsaWIvYXBpL3R5cGVzL0thbHR1cmFDb25mZXJlbmNlRW50cnlTZXJ2ZXJOb2RlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0EsT0FBTyxFQUF5QixtQkFBbUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3BGLE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBQzVFLE9BQU8sRUFBRSxzQkFBc0IsRUFBOEIsTUFBTSwwQkFBMEIsQ0FBQzs7Ozs7QUFPOUYsSUFBQTtJQUFzRCw0REFBc0I7SUFLeEUsMENBQVksSUFBNEM7ZUFFcEQsa0JBQU0sSUFBSSxDQUFDO0tBQ2Q7Ozs7SUFFUyx1REFBWTs7O0lBQXRCOztRQUVJLElBQU0sTUFBTSxHQUFHLGlCQUFNLFlBQVksV0FBRSxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxNQUFNLENBQ1QsTUFBTSxDQUFDLFVBQVUsRUFDakI7WUFDSSxVQUFVLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyxrQ0FBa0MsRUFBRTtZQUNyRixjQUFjLEVBQUcsRUFBRSxJQUFJLEVBQUcsSUFBSSxFQUFFLFFBQVEsRUFBRyxJQUFJLEVBQUUsa0JBQWtCLEVBQUcsMkJBQTJCLEVBQUUsT0FBTyxFQUFHLDZCQUE2QixFQUFFO1lBQzVJLFVBQVUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsUUFBUSxFQUFHLElBQUksRUFBRTtTQUNuQyxDQUNKLENBQUM7UUFDRixNQUFNLENBQUMsTUFBTSxDQUFDO0tBQ2pCOzJDQWhDTDtFQVVzRCxzQkFBc0IsRUF1QjNFLENBQUE7QUF2QkQsNENBdUJDOzs7Ozs7O0FBRUQsbUJBQW1CLENBQUMsa0NBQWtDLENBQUMsR0FBRyxnQ0FBZ0MsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgS2FsdHVyYU9iamVjdE1ldGFkYXRhLCB0eXBlc01hcHBpbmdTdG9yYWdlIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5pbXBvcnQgeyBLYWx0dXJhQ29uZmVyZW5jZVJvb21TdGF0dXMgfSBmcm9tICcuL0thbHR1cmFDb25mZXJlbmNlUm9vbVN0YXR1cyc7XG5pbXBvcnQgeyBLYWx0dXJhRW50cnlTZXJ2ZXJOb2RlLCBLYWx0dXJhRW50cnlTZXJ2ZXJOb2RlQXJncyB9IGZyb20gJy4vS2FsdHVyYUVudHJ5U2VydmVyTm9kZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgS2FsdHVyYUNvbmZlcmVuY2VFbnRyeVNlcnZlck5vZGVBcmdzICBleHRlbmRzIEthbHR1cmFFbnRyeVNlcnZlck5vZGVBcmdzIHtcbiAgICBcbn1cblxuXG5leHBvcnQgY2xhc3MgS2FsdHVyYUNvbmZlcmVuY2VFbnRyeVNlcnZlck5vZGUgZXh0ZW5kcyBLYWx0dXJhRW50cnlTZXJ2ZXJOb2RlIHtcblxuICAgIHJlYWRvbmx5IGNvbmZSb29tU3RhdHVzIDogS2FsdHVyYUNvbmZlcmVuY2VSb29tU3RhdHVzO1xuXHRyZWFkb25seSByZWdpc3RlcmVkIDogbnVtYmVyO1xuXG4gICAgY29uc3RydWN0b3IoZGF0YT8gOiBLYWx0dXJhQ29uZmVyZW5jZUVudHJ5U2VydmVyTm9kZUFyZ3MpXG4gICAge1xuICAgICAgICBzdXBlcihkYXRhKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2dldE1ldGFkYXRhKCkgOiBLYWx0dXJhT2JqZWN0TWV0YWRhdGFcbiAgICB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLl9nZXRNZXRhZGF0YSgpO1xuICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgcmVzdWx0LnByb3BlcnRpZXMsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgb2JqZWN0VHlwZSA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdLYWx0dXJhQ29uZmVyZW5jZUVudHJ5U2VydmVyTm9kZScgfSxcblx0XHRcdFx0Y29uZlJvb21TdGF0dXMgOiB7IHR5cGUgOiAnZW4nLCByZWFkT25seSA6IHRydWUsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFDb25mZXJlbmNlUm9vbVN0YXR1cywgc3ViVHlwZSA6ICdLYWx0dXJhQ29uZmVyZW5jZVJvb21TdGF0dXMnIH0sXG5cdFx0XHRcdHJlZ2lzdGVyZWQgOiB7IHR5cGUgOiAnbicsIHJlYWRPbmx5IDogdHJ1ZSB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuXG50eXBlc01hcHBpbmdTdG9yYWdlWydLYWx0dXJhQ29uZmVyZW5jZUVudHJ5U2VydmVyTm9kZSddID0gS2FsdHVyYUNvbmZlcmVuY2VFbnRyeVNlcnZlck5vZGU7Il19