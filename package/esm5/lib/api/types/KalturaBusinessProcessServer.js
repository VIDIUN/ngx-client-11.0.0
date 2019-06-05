/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaBusinessProcessServerStatus } from './KalturaBusinessProcessServerStatus';
import { KalturaBusinessProcessProvider } from './KalturaBusinessProcessProvider';
import { KalturaObjectBase } from '../kaltura-object-base';
/**
 * @record
 */
export function KalturaBusinessProcessServerArgs() { }
/** @type {?|undefined} */
KalturaBusinessProcessServerArgs.prototype.name;
/** @type {?|undefined} */
KalturaBusinessProcessServerArgs.prototype.systemName;
/** @type {?|undefined} */
KalturaBusinessProcessServerArgs.prototype.description;
/** @type {?|undefined} */
KalturaBusinessProcessServerArgs.prototype.dc;
var KalturaBusinessProcessServer = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaBusinessProcessServer, _super);
    function KalturaBusinessProcessServer(data) {
        return _super.call(this, data) || this;
    }
    /**
     * @return {?}
     */
    KalturaBusinessProcessServer.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaBusinessProcessServer' },
            id: { type: 'n', readOnly: true },
            createdAt: { type: 'd', readOnly: true },
            updatedAt: { type: 'd', readOnly: true },
            partnerId: { type: 'n', readOnly: true },
            name: { type: 's' },
            systemName: { type: 's' },
            description: { type: 's' },
            status: { type: 'es', readOnly: true, subTypeConstructor: KalturaBusinessProcessServerStatus, subType: 'KalturaBusinessProcessServerStatus' },
            type: { type: 'es', readOnly: true, subTypeConstructor: KalturaBusinessProcessProvider, subType: 'KalturaBusinessProcessProvider' },
            dc: { type: 'n' }
        });
        return result;
    };
    return KalturaBusinessProcessServer;
}(KalturaObjectBase));
export { KalturaBusinessProcessServer };
if (false) {
    /** @type {?} */
    KalturaBusinessProcessServer.prototype.id;
    /** @type {?} */
    KalturaBusinessProcessServer.prototype.createdAt;
    /** @type {?} */
    KalturaBusinessProcessServer.prototype.updatedAt;
    /** @type {?} */
    KalturaBusinessProcessServer.prototype.partnerId;
    /** @type {?} */
    KalturaBusinessProcessServer.prototype.name;
    /** @type {?} */
    KalturaBusinessProcessServer.prototype.systemName;
    /** @type {?} */
    KalturaBusinessProcessServer.prototype.description;
    /** @type {?} */
    KalturaBusinessProcessServer.prototype.status;
    /** @type {?} */
    KalturaBusinessProcessServer.prototype.type;
    /** @type {?} */
    KalturaBusinessProcessServer.prototype.dc;
}
typesMappingStorage['KalturaBusinessProcessServer'] = KalturaBusinessProcessServer;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUJ1c2luZXNzUHJvY2Vzc1NlcnZlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2thbHR1cmEtbmd4LWNsaWVudC8iLCJzb3VyY2VzIjpbImxpYi9hcGkvdHlwZXMvS2FsdHVyYUJ1c2luZXNzUHJvY2Vzc1NlcnZlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLE9BQU8sRUFBeUIsbUJBQW1CLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUNwRixPQUFPLEVBQUUsa0NBQWtDLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUMxRixPQUFPLEVBQUUsOEJBQThCLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUNsRixPQUFPLEVBQUUsaUJBQWlCLEVBQXlCLE1BQU0sd0JBQXdCLENBQUM7Ozs7Ozs7Ozs7Ozs7QUFVbEYsSUFBQTtJQUFrRCx3REFBaUI7SUFhL0Qsc0NBQVksSUFBd0M7ZUFFaEQsa0JBQU0sSUFBSSxDQUFDO0tBQ2Q7Ozs7SUFFUyxtREFBWTs7O0lBQXRCOztRQUVJLElBQU0sTUFBTSxHQUFHLGlCQUFNLFlBQVksV0FBRSxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxNQUFNLENBQ1QsTUFBTSxDQUFDLFVBQVUsRUFDakI7WUFDSSxVQUFVLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyw4QkFBOEIsRUFBRTtZQUNqRixFQUFFLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLFFBQVEsRUFBRyxJQUFJLEVBQUU7WUFDcEMsU0FBUyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxRQUFRLEVBQUcsSUFBSSxFQUFFO1lBQzNDLFNBQVMsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsUUFBUSxFQUFHLElBQUksRUFBRTtZQUMzQyxTQUFTLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLFFBQVEsRUFBRyxJQUFJLEVBQUU7WUFDM0MsSUFBSSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUNyQixVQUFVLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQzNCLFdBQVcsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDNUIsTUFBTSxFQUFHLEVBQUUsSUFBSSxFQUFHLElBQUksRUFBRSxRQUFRLEVBQUcsSUFBSSxFQUFFLGtCQUFrQixFQUFHLGtDQUFrQyxFQUFFLE9BQU8sRUFBRyxvQ0FBb0MsRUFBRTtZQUNsSixJQUFJLEVBQUcsRUFBRSxJQUFJLEVBQUcsSUFBSSxFQUFFLFFBQVEsRUFBRyxJQUFJLEVBQUUsa0JBQWtCLEVBQUcsOEJBQThCLEVBQUUsT0FBTyxFQUFHLGdDQUFnQyxFQUFFO1lBQ3hJLEVBQUUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7U0FDVixDQUNKLENBQUM7UUFDRixNQUFNLENBQUMsTUFBTSxDQUFDO0tBQ2pCO3VDQXBETDtFQWNrRCxpQkFBaUIsRUF1Q2xFLENBQUE7QUF2Q0Qsd0NBdUNDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVELG1CQUFtQixDQUFDLDhCQUE4QixDQUFDLEdBQUcsNEJBQTRCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IEthbHR1cmFPYmplY3RNZXRhZGF0YSwgdHlwZXNNYXBwaW5nU3RvcmFnZSB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuaW1wb3J0IHsgS2FsdHVyYUJ1c2luZXNzUHJvY2Vzc1NlcnZlclN0YXR1cyB9IGZyb20gJy4vS2FsdHVyYUJ1c2luZXNzUHJvY2Vzc1NlcnZlclN0YXR1cyc7XG5pbXBvcnQgeyBLYWx0dXJhQnVzaW5lc3NQcm9jZXNzUHJvdmlkZXIgfSBmcm9tICcuL0thbHR1cmFCdXNpbmVzc1Byb2Nlc3NQcm92aWRlcic7XG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0QmFzZSwgS2FsdHVyYU9iamVjdEJhc2VBcmdzIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgS2FsdHVyYUJ1c2luZXNzUHJvY2Vzc1NlcnZlckFyZ3MgIGV4dGVuZHMgS2FsdHVyYU9iamVjdEJhc2VBcmdzIHtcbiAgICBuYW1lPyA6IHN0cmluZztcblx0c3lzdGVtTmFtZT8gOiBzdHJpbmc7XG5cdGRlc2NyaXB0aW9uPyA6IHN0cmluZztcblx0ZGM/IDogbnVtYmVyO1xufVxuXG5cbmV4cG9ydCBjbGFzcyBLYWx0dXJhQnVzaW5lc3NQcm9jZXNzU2VydmVyIGV4dGVuZHMgS2FsdHVyYU9iamVjdEJhc2Uge1xuXG4gICAgcmVhZG9ubHkgaWQgOiBudW1iZXI7XG5cdHJlYWRvbmx5IGNyZWF0ZWRBdCA6IERhdGU7XG5cdHJlYWRvbmx5IHVwZGF0ZWRBdCA6IERhdGU7XG5cdHJlYWRvbmx5IHBhcnRuZXJJZCA6IG51bWJlcjtcblx0bmFtZSA6IHN0cmluZztcblx0c3lzdGVtTmFtZSA6IHN0cmluZztcblx0ZGVzY3JpcHRpb24gOiBzdHJpbmc7XG5cdHJlYWRvbmx5IHN0YXR1cyA6IEthbHR1cmFCdXNpbmVzc1Byb2Nlc3NTZXJ2ZXJTdGF0dXM7XG5cdHJlYWRvbmx5IHR5cGUgOiBLYWx0dXJhQnVzaW5lc3NQcm9jZXNzUHJvdmlkZXI7XG5cdGRjIDogbnVtYmVyO1xuXG4gICAgY29uc3RydWN0b3IoZGF0YT8gOiBLYWx0dXJhQnVzaW5lc3NQcm9jZXNzU2VydmVyQXJncylcbiAgICB7XG4gICAgICAgIHN1cGVyKGRhdGEpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfZ2V0TWV0YWRhdGEoKSA6IEthbHR1cmFPYmplY3RNZXRhZGF0YVxuICAgIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gc3VwZXIuX2dldE1ldGFkYXRhKCk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICByZXN1bHQucHJvcGVydGllcyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBvYmplY3RUeXBlIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ0thbHR1cmFCdXNpbmVzc1Byb2Nlc3NTZXJ2ZXInIH0sXG5cdFx0XHRcdGlkIDogeyB0eXBlIDogJ24nLCByZWFkT25seSA6IHRydWUgfSxcblx0XHRcdFx0Y3JlYXRlZEF0IDogeyB0eXBlIDogJ2QnLCByZWFkT25seSA6IHRydWUgfSxcblx0XHRcdFx0dXBkYXRlZEF0IDogeyB0eXBlIDogJ2QnLCByZWFkT25seSA6IHRydWUgfSxcblx0XHRcdFx0cGFydG5lcklkIDogeyB0eXBlIDogJ24nLCByZWFkT25seSA6IHRydWUgfSxcblx0XHRcdFx0bmFtZSA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRzeXN0ZW1OYW1lIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdGRlc2NyaXB0aW9uIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdHN0YXR1cyA6IHsgdHlwZSA6ICdlcycsIHJlYWRPbmx5IDogdHJ1ZSwgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYUJ1c2luZXNzUHJvY2Vzc1NlcnZlclN0YXR1cywgc3ViVHlwZSA6ICdLYWx0dXJhQnVzaW5lc3NQcm9jZXNzU2VydmVyU3RhdHVzJyB9LFxuXHRcdFx0XHR0eXBlIDogeyB0eXBlIDogJ2VzJywgcmVhZE9ubHkgOiB0cnVlLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhQnVzaW5lc3NQcm9jZXNzUHJvdmlkZXIsIHN1YlR5cGUgOiAnS2FsdHVyYUJ1c2luZXNzUHJvY2Vzc1Byb3ZpZGVyJyB9LFxuXHRcdFx0XHRkYyA6IHsgdHlwZSA6ICduJyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuXG50eXBlc01hcHBpbmdTdG9yYWdlWydLYWx0dXJhQnVzaW5lc3NQcm9jZXNzU2VydmVyJ10gPSBLYWx0dXJhQnVzaW5lc3NQcm9jZXNzU2VydmVyOyJdfQ==