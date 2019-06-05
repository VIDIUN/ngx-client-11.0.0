/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaServerNodeStatus } from './KalturaServerNodeStatus';
import { KalturaServerNodeType } from './KalturaServerNodeType';
import { KalturaObjectBase } from '../kaltura-object-base';
/**
 * @record
 */
export function KalturaServerNodeArgs() { }
/** @type {?|undefined} */
KalturaServerNodeArgs.prototype.name;
/** @type {?|undefined} */
KalturaServerNodeArgs.prototype.systemName;
/** @type {?|undefined} */
KalturaServerNodeArgs.prototype.description;
/** @type {?|undefined} */
KalturaServerNodeArgs.prototype.hostName;
/** @type {?|undefined} */
KalturaServerNodeArgs.prototype.tags;
/** @type {?|undefined} */
KalturaServerNodeArgs.prototype.parentId;
var KalturaServerNode = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaServerNode, _super);
    function KalturaServerNode(data) {
        return _super.call(this, data) || this;
    }
    /**
     * @return {?}
     */
    KalturaServerNode.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaServerNode' },
            id: { type: 'n', readOnly: true },
            partnerId: { type: 'n', readOnly: true },
            createdAt: { type: 'd', readOnly: true },
            updatedAt: { type: 'd', readOnly: true },
            heartbeatTime: { type: 'd', readOnly: true },
            name: { type: 's' },
            systemName: { type: 's' },
            description: { type: 's' },
            hostName: { type: 's' },
            status: { type: 'en', readOnly: true, subTypeConstructor: KalturaServerNodeStatus, subType: 'KalturaServerNodeStatus' },
            type: { type: 'es', readOnly: true, subTypeConstructor: KalturaServerNodeType, subType: 'KalturaServerNodeType' },
            tags: { type: 's' },
            dc: { type: 'n', readOnly: true },
            parentId: { type: 's' }
        });
        return result;
    };
    return KalturaServerNode;
}(KalturaObjectBase));
export { KalturaServerNode };
if (false) {
    /** @type {?} */
    KalturaServerNode.prototype.id;
    /** @type {?} */
    KalturaServerNode.prototype.partnerId;
    /** @type {?} */
    KalturaServerNode.prototype.createdAt;
    /** @type {?} */
    KalturaServerNode.prototype.updatedAt;
    /** @type {?} */
    KalturaServerNode.prototype.heartbeatTime;
    /** @type {?} */
    KalturaServerNode.prototype.name;
    /** @type {?} */
    KalturaServerNode.prototype.systemName;
    /** @type {?} */
    KalturaServerNode.prototype.description;
    /** @type {?} */
    KalturaServerNode.prototype.hostName;
    /** @type {?} */
    KalturaServerNode.prototype.status;
    /** @type {?} */
    KalturaServerNode.prototype.type;
    /** @type {?} */
    KalturaServerNode.prototype.tags;
    /** @type {?} */
    KalturaServerNode.prototype.dc;
    /** @type {?} */
    KalturaServerNode.prototype.parentId;
}
typesMappingStorage['KalturaServerNode'] = KalturaServerNode;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYVNlcnZlck5vZGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9rYWx0dXJhLW5neC1jbGllbnQvIiwic291cmNlcyI6WyJsaWIvYXBpL3R5cGVzL0thbHR1cmFTZXJ2ZXJOb2RlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0EsT0FBTyxFQUF5QixtQkFBbUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3BGLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQ3BFLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ2hFLE9BQU8sRUFBRSxpQkFBaUIsRUFBeUIsTUFBTSx3QkFBd0IsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFZbEYsSUFBQTtJQUF1Qyw2Q0FBaUI7SUFpQnBELDJCQUFZLElBQTZCO2VBRXJDLGtCQUFNLElBQUksQ0FBQztLQUNkOzs7O0lBRVMsd0NBQVk7OztJQUF0Qjs7UUFFSSxJQUFNLE1BQU0sR0FBRyxpQkFBTSxZQUFZLFdBQUUsQ0FBQztRQUNwQyxNQUFNLENBQUMsTUFBTSxDQUNULE1BQU0sQ0FBQyxVQUFVLEVBQ2pCO1lBQ0ksVUFBVSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsbUJBQW1CLEVBQUU7WUFDdEUsRUFBRSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxRQUFRLEVBQUcsSUFBSSxFQUFFO1lBQ3BDLFNBQVMsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsUUFBUSxFQUFHLElBQUksRUFBRTtZQUMzQyxTQUFTLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLFFBQVEsRUFBRyxJQUFJLEVBQUU7WUFDM0MsU0FBUyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxRQUFRLEVBQUcsSUFBSSxFQUFFO1lBQzNDLGFBQWEsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsUUFBUSxFQUFHLElBQUksRUFBRTtZQUMvQyxJQUFJLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3JCLFVBQVUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDM0IsV0FBVyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUM1QixRQUFRLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3pCLE1BQU0sRUFBRyxFQUFFLElBQUksRUFBRyxJQUFJLEVBQUUsUUFBUSxFQUFHLElBQUksRUFBRSxrQkFBa0IsRUFBRyx1QkFBdUIsRUFBRSxPQUFPLEVBQUcseUJBQXlCLEVBQUU7WUFDNUgsSUFBSSxFQUFHLEVBQUUsSUFBSSxFQUFHLElBQUksRUFBRSxRQUFRLEVBQUcsSUFBSSxFQUFFLGtCQUFrQixFQUFHLHFCQUFxQixFQUFFLE9BQU8sRUFBRyx1QkFBdUIsRUFBRTtZQUN0SCxJQUFJLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3JCLEVBQUUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsUUFBUSxFQUFHLElBQUksRUFBRTtZQUNwQyxRQUFRLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1NBQ2hCLENBQ0osQ0FBQztRQUNGLE1BQU0sQ0FBQyxNQUFNLENBQUM7S0FDakI7NEJBOURMO0VBZ0J1QyxpQkFBaUIsRUErQ3ZELENBQUE7QUEvQ0QsNkJBK0NDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUQsbUJBQW1CLENBQUMsbUJBQW1CLENBQUMsR0FBRyxpQkFBaUIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgS2FsdHVyYU9iamVjdE1ldGFkYXRhLCB0eXBlc01hcHBpbmdTdG9yYWdlIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5pbXBvcnQgeyBLYWx0dXJhU2VydmVyTm9kZVN0YXR1cyB9IGZyb20gJy4vS2FsdHVyYVNlcnZlck5vZGVTdGF0dXMnO1xuaW1wb3J0IHsgS2FsdHVyYVNlcnZlck5vZGVUeXBlIH0gZnJvbSAnLi9LYWx0dXJhU2VydmVyTm9kZVR5cGUnO1xuaW1wb3J0IHsgS2FsdHVyYU9iamVjdEJhc2UsIEthbHR1cmFPYmplY3RCYXNlQXJncyB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEthbHR1cmFTZXJ2ZXJOb2RlQXJncyAgZXh0ZW5kcyBLYWx0dXJhT2JqZWN0QmFzZUFyZ3Mge1xuICAgIG5hbWU/IDogc3RyaW5nO1xuXHRzeXN0ZW1OYW1lPyA6IHN0cmluZztcblx0ZGVzY3JpcHRpb24/IDogc3RyaW5nO1xuXHRob3N0TmFtZT8gOiBzdHJpbmc7XG5cdHRhZ3M/IDogc3RyaW5nO1xuXHRwYXJlbnRJZD8gOiBzdHJpbmc7XG59XG5cblxuZXhwb3J0IGNsYXNzIEthbHR1cmFTZXJ2ZXJOb2RlIGV4dGVuZHMgS2FsdHVyYU9iamVjdEJhc2Uge1xuXG4gICAgcmVhZG9ubHkgaWQgOiBudW1iZXI7XG5cdHJlYWRvbmx5IHBhcnRuZXJJZCA6IG51bWJlcjtcblx0cmVhZG9ubHkgY3JlYXRlZEF0IDogRGF0ZTtcblx0cmVhZG9ubHkgdXBkYXRlZEF0IDogRGF0ZTtcblx0cmVhZG9ubHkgaGVhcnRiZWF0VGltZSA6IERhdGU7XG5cdG5hbWUgOiBzdHJpbmc7XG5cdHN5c3RlbU5hbWUgOiBzdHJpbmc7XG5cdGRlc2NyaXB0aW9uIDogc3RyaW5nO1xuXHRob3N0TmFtZSA6IHN0cmluZztcblx0cmVhZG9ubHkgc3RhdHVzIDogS2FsdHVyYVNlcnZlck5vZGVTdGF0dXM7XG5cdHJlYWRvbmx5IHR5cGUgOiBLYWx0dXJhU2VydmVyTm9kZVR5cGU7XG5cdHRhZ3MgOiBzdHJpbmc7XG5cdHJlYWRvbmx5IGRjIDogbnVtYmVyO1xuXHRwYXJlbnRJZCA6IHN0cmluZztcblxuICAgIGNvbnN0cnVjdG9yKGRhdGE/IDogS2FsdHVyYVNlcnZlck5vZGVBcmdzKVxuICAgIHtcbiAgICAgICAgc3VwZXIoZGF0YSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9nZXRNZXRhZGF0YSgpIDogS2FsdHVyYU9iamVjdE1ldGFkYXRhXG4gICAge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBzdXBlci5fZ2V0TWV0YWRhdGEoKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHJlc3VsdC5wcm9wZXJ0aWVzLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG9iamVjdFR5cGUgOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnS2FsdHVyYVNlcnZlck5vZGUnIH0sXG5cdFx0XHRcdGlkIDogeyB0eXBlIDogJ24nLCByZWFkT25seSA6IHRydWUgfSxcblx0XHRcdFx0cGFydG5lcklkIDogeyB0eXBlIDogJ24nLCByZWFkT25seSA6IHRydWUgfSxcblx0XHRcdFx0Y3JlYXRlZEF0IDogeyB0eXBlIDogJ2QnLCByZWFkT25seSA6IHRydWUgfSxcblx0XHRcdFx0dXBkYXRlZEF0IDogeyB0eXBlIDogJ2QnLCByZWFkT25seSA6IHRydWUgfSxcblx0XHRcdFx0aGVhcnRiZWF0VGltZSA6IHsgdHlwZSA6ICdkJywgcmVhZE9ubHkgOiB0cnVlIH0sXG5cdFx0XHRcdG5hbWUgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0c3lzdGVtTmFtZSA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRkZXNjcmlwdGlvbiA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRob3N0TmFtZSA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRzdGF0dXMgOiB7IHR5cGUgOiAnZW4nLCByZWFkT25seSA6IHRydWUsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFTZXJ2ZXJOb2RlU3RhdHVzLCBzdWJUeXBlIDogJ0thbHR1cmFTZXJ2ZXJOb2RlU3RhdHVzJyB9LFxuXHRcdFx0XHR0eXBlIDogeyB0eXBlIDogJ2VzJywgcmVhZE9ubHkgOiB0cnVlLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhU2VydmVyTm9kZVR5cGUsIHN1YlR5cGUgOiAnS2FsdHVyYVNlcnZlck5vZGVUeXBlJyB9LFxuXHRcdFx0XHR0YWdzIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdGRjIDogeyB0eXBlIDogJ24nLCByZWFkT25seSA6IHRydWUgfSxcblx0XHRcdFx0cGFyZW50SWQgOiB7IHR5cGUgOiAncycgfVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cblxudHlwZXNNYXBwaW5nU3RvcmFnZVsnS2FsdHVyYVNlcnZlck5vZGUnXSA9IEthbHR1cmFTZXJ2ZXJOb2RlOyJdfQ==