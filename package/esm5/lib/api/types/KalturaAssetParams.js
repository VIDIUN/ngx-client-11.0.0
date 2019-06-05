/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaNullableBoolean } from './KalturaNullableBoolean';
import { KalturaString } from './KalturaString';
import { KalturaMediaParserType } from './KalturaMediaParserType';
import { KalturaObjectBase } from '../kaltura-object-base';
/**
 * @record
 */
export function KalturaAssetParamsArgs() { }
/** @type {?|undefined} */
KalturaAssetParamsArgs.prototype.partnerId;
/** @type {?|undefined} */
KalturaAssetParamsArgs.prototype.name;
/** @type {?|undefined} */
KalturaAssetParamsArgs.prototype.systemName;
/** @type {?|undefined} */
KalturaAssetParamsArgs.prototype.description;
/** @type {?|undefined} */
KalturaAssetParamsArgs.prototype.tags;
/** @type {?|undefined} */
KalturaAssetParamsArgs.prototype.requiredPermissions;
/** @type {?|undefined} */
KalturaAssetParamsArgs.prototype.sourceRemoteStorageProfileId;
/** @type {?|undefined} */
KalturaAssetParamsArgs.prototype.remoteStorageProfileIds;
/** @type {?|undefined} */
KalturaAssetParamsArgs.prototype.mediaParserType;
/** @type {?|undefined} */
KalturaAssetParamsArgs.prototype.sourceAssetParamsIds;
var KalturaAssetParams = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaAssetParams, _super);
    function KalturaAssetParams(data) {
        var _this = _super.call(this, data) || this;
        if (typeof _this.requiredPermissions === 'undefined')
            _this.requiredPermissions = [];
        return _this;
    }
    /**
     * @return {?}
     */
    KalturaAssetParams.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaAssetParams' },
            id: { type: 'n', readOnly: true },
            partnerId: { type: 'n' },
            name: { type: 's' },
            systemName: { type: 's' },
            description: { type: 's' },
            createdAt: { type: 'd', readOnly: true },
            isSystemDefault: { type: 'en', readOnly: true, subTypeConstructor: KalturaNullableBoolean, subType: 'KalturaNullableBoolean' },
            tags: { type: 's' },
            requiredPermissions: { type: 'a', subTypeConstructor: KalturaString, subType: 'KalturaString' },
            sourceRemoteStorageProfileId: { type: 'n' },
            remoteStorageProfileIds: { type: 'n' },
            mediaParserType: { type: 'es', subTypeConstructor: KalturaMediaParserType, subType: 'KalturaMediaParserType' },
            sourceAssetParamsIds: { type: 's' }
        });
        return result;
    };
    return KalturaAssetParams;
}(KalturaObjectBase));
export { KalturaAssetParams };
if (false) {
    /** @type {?} */
    KalturaAssetParams.prototype.id;
    /** @type {?} */
    KalturaAssetParams.prototype.partnerId;
    /** @type {?} */
    KalturaAssetParams.prototype.name;
    /** @type {?} */
    KalturaAssetParams.prototype.systemName;
    /** @type {?} */
    KalturaAssetParams.prototype.description;
    /** @type {?} */
    KalturaAssetParams.prototype.createdAt;
    /** @type {?} */
    KalturaAssetParams.prototype.isSystemDefault;
    /** @type {?} */
    KalturaAssetParams.prototype.tags;
    /** @type {?} */
    KalturaAssetParams.prototype.requiredPermissions;
    /** @type {?} */
    KalturaAssetParams.prototype.sourceRemoteStorageProfileId;
    /** @type {?} */
    KalturaAssetParams.prototype.remoteStorageProfileIds;
    /** @type {?} */
    KalturaAssetParams.prototype.mediaParserType;
    /** @type {?} */
    KalturaAssetParams.prototype.sourceAssetParamsIds;
}
typesMappingStorage['KalturaAssetParams'] = KalturaAssetParams;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUFzc2V0UGFyYW1zLmpzIiwic291cmNlUm9vdCI6Im5nOi8va2FsdHVyYS1uZ3gtY2xpZW50LyIsInNvdXJjZXMiOlsibGliL2FwaS90eXBlcy9LYWx0dXJhQXNzZXRQYXJhbXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSxPQUFPLEVBQXlCLG1CQUFtQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDcEYsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDbEUsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ2hELE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQ2xFLE9BQU8sRUFBRSxpQkFBaUIsRUFBeUIsTUFBTSx3QkFBd0IsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWdCbEYsSUFBQTtJQUF3Qyw4Q0FBaUI7SUFnQnJELDRCQUFZLElBQThCO1FBQTFDLFlBRUksa0JBQU0sSUFBSSxDQUFDLFNBRWQ7UUFERyxFQUFFLENBQUMsQ0FBQyxPQUFPLEtBQUksQ0FBQyxtQkFBbUIsS0FBSyxXQUFXLENBQUM7WUFBQyxLQUFJLENBQUMsbUJBQW1CLEdBQUcsRUFBRSxDQUFDOztLQUN0Rjs7OztJQUVTLHlDQUFZOzs7SUFBdEI7O1FBRUksSUFBTSxNQUFNLEdBQUcsaUJBQU0sWUFBWSxXQUFFLENBQUM7UUFDcEMsTUFBTSxDQUFDLE1BQU0sQ0FDVCxNQUFNLENBQUMsVUFBVSxFQUNqQjtZQUNJLFVBQVUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLG9CQUFvQixFQUFFO1lBQ3ZFLEVBQUUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsUUFBUSxFQUFHLElBQUksRUFBRTtZQUNwQyxTQUFTLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQzFCLElBQUksRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDckIsVUFBVSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUMzQixXQUFXLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQzVCLFNBQVMsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsUUFBUSxFQUFHLElBQUksRUFBRTtZQUMzQyxlQUFlLEVBQUcsRUFBRSxJQUFJLEVBQUcsSUFBSSxFQUFFLFFBQVEsRUFBRyxJQUFJLEVBQUUsa0JBQWtCLEVBQUcsc0JBQXNCLEVBQUUsT0FBTyxFQUFHLHdCQUF3QixFQUFFO1lBQ25JLElBQUksRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDckIsbUJBQW1CLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLGtCQUFrQixFQUFHLGFBQWEsRUFBRSxPQUFPLEVBQUcsZUFBZSxFQUFFO1lBQ25HLDRCQUE0QixFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUM3Qyx1QkFBdUIsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDeEMsZUFBZSxFQUFHLEVBQUUsSUFBSSxFQUFHLElBQUksRUFBRSxrQkFBa0IsRUFBRyxzQkFBc0IsRUFBRSxPQUFPLEVBQUcsd0JBQXdCLEVBQUU7WUFDbEgsb0JBQW9CLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1NBQzVCLENBQ0osQ0FBQztRQUNGLE1BQU0sQ0FBQyxNQUFNLENBQUM7S0FDakI7NkJBbEVMO0VBcUJ3QyxpQkFBaUIsRUE4Q3hELENBQUE7QUE5Q0QsOEJBOENDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVELG1CQUFtQixDQUFDLG9CQUFvQixDQUFDLEdBQUcsa0JBQWtCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IEthbHR1cmFPYmplY3RNZXRhZGF0YSwgdHlwZXNNYXBwaW5nU3RvcmFnZSB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuaW1wb3J0IHsgS2FsdHVyYU51bGxhYmxlQm9vbGVhbiB9IGZyb20gJy4vS2FsdHVyYU51bGxhYmxlQm9vbGVhbic7XG5pbXBvcnQgeyBLYWx0dXJhU3RyaW5nIH0gZnJvbSAnLi9LYWx0dXJhU3RyaW5nJztcbmltcG9ydCB7IEthbHR1cmFNZWRpYVBhcnNlclR5cGUgfSBmcm9tICcuL0thbHR1cmFNZWRpYVBhcnNlclR5cGUnO1xuaW1wb3J0IHsgS2FsdHVyYU9iamVjdEJhc2UsIEthbHR1cmFPYmplY3RCYXNlQXJncyB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEthbHR1cmFBc3NldFBhcmFtc0FyZ3MgIGV4dGVuZHMgS2FsdHVyYU9iamVjdEJhc2VBcmdzIHtcbiAgICBwYXJ0bmVySWQ/IDogbnVtYmVyO1xuXHRuYW1lPyA6IHN0cmluZztcblx0c3lzdGVtTmFtZT8gOiBzdHJpbmc7XG5cdGRlc2NyaXB0aW9uPyA6IHN0cmluZztcblx0dGFncz8gOiBzdHJpbmc7XG5cdHJlcXVpcmVkUGVybWlzc2lvbnM/IDogS2FsdHVyYVN0cmluZ1tdO1xuXHRzb3VyY2VSZW1vdGVTdG9yYWdlUHJvZmlsZUlkPyA6IG51bWJlcjtcblx0cmVtb3RlU3RvcmFnZVByb2ZpbGVJZHM/IDogbnVtYmVyO1xuXHRtZWRpYVBhcnNlclR5cGU/IDogS2FsdHVyYU1lZGlhUGFyc2VyVHlwZTtcblx0c291cmNlQXNzZXRQYXJhbXNJZHM/IDogc3RyaW5nO1xufVxuXG5cbmV4cG9ydCBjbGFzcyBLYWx0dXJhQXNzZXRQYXJhbXMgZXh0ZW5kcyBLYWx0dXJhT2JqZWN0QmFzZSB7XG5cbiAgICByZWFkb25seSBpZCA6IG51bWJlcjtcblx0cGFydG5lcklkIDogbnVtYmVyO1xuXHRuYW1lIDogc3RyaW5nO1xuXHRzeXN0ZW1OYW1lIDogc3RyaW5nO1xuXHRkZXNjcmlwdGlvbiA6IHN0cmluZztcblx0cmVhZG9ubHkgY3JlYXRlZEF0IDogRGF0ZTtcblx0cmVhZG9ubHkgaXNTeXN0ZW1EZWZhdWx0IDogS2FsdHVyYU51bGxhYmxlQm9vbGVhbjtcblx0dGFncyA6IHN0cmluZztcblx0cmVxdWlyZWRQZXJtaXNzaW9ucyA6IEthbHR1cmFTdHJpbmdbXTtcblx0c291cmNlUmVtb3RlU3RvcmFnZVByb2ZpbGVJZCA6IG51bWJlcjtcblx0cmVtb3RlU3RvcmFnZVByb2ZpbGVJZHMgOiBudW1iZXI7XG5cdG1lZGlhUGFyc2VyVHlwZSA6IEthbHR1cmFNZWRpYVBhcnNlclR5cGU7XG5cdHNvdXJjZUFzc2V0UGFyYW1zSWRzIDogc3RyaW5nO1xuXG4gICAgY29uc3RydWN0b3IoZGF0YT8gOiBLYWx0dXJhQXNzZXRQYXJhbXNBcmdzKVxuICAgIHtcbiAgICAgICAgc3VwZXIoZGF0YSk7XG4gICAgICAgIGlmICh0eXBlb2YgdGhpcy5yZXF1aXJlZFBlcm1pc3Npb25zID09PSAndW5kZWZpbmVkJykgdGhpcy5yZXF1aXJlZFBlcm1pc3Npb25zID0gW107XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9nZXRNZXRhZGF0YSgpIDogS2FsdHVyYU9iamVjdE1ldGFkYXRhXG4gICAge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBzdXBlci5fZ2V0TWV0YWRhdGEoKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHJlc3VsdC5wcm9wZXJ0aWVzLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG9iamVjdFR5cGUgOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnS2FsdHVyYUFzc2V0UGFyYW1zJyB9LFxuXHRcdFx0XHRpZCA6IHsgdHlwZSA6ICduJywgcmVhZE9ubHkgOiB0cnVlIH0sXG5cdFx0XHRcdHBhcnRuZXJJZCA6IHsgdHlwZSA6ICduJyB9LFxuXHRcdFx0XHRuYW1lIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdHN5c3RlbU5hbWUgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0ZGVzY3JpcHRpb24gOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0Y3JlYXRlZEF0IDogeyB0eXBlIDogJ2QnLCByZWFkT25seSA6IHRydWUgfSxcblx0XHRcdFx0aXNTeXN0ZW1EZWZhdWx0IDogeyB0eXBlIDogJ2VuJywgcmVhZE9ubHkgOiB0cnVlLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhTnVsbGFibGVCb29sZWFuLCBzdWJUeXBlIDogJ0thbHR1cmFOdWxsYWJsZUJvb2xlYW4nIH0sXG5cdFx0XHRcdHRhZ3MgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0cmVxdWlyZWRQZXJtaXNzaW9ucyA6IHsgdHlwZSA6ICdhJywgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYVN0cmluZywgc3ViVHlwZSA6ICdLYWx0dXJhU3RyaW5nJyB9LFxuXHRcdFx0XHRzb3VyY2VSZW1vdGVTdG9yYWdlUHJvZmlsZUlkIDogeyB0eXBlIDogJ24nIH0sXG5cdFx0XHRcdHJlbW90ZVN0b3JhZ2VQcm9maWxlSWRzIDogeyB0eXBlIDogJ24nIH0sXG5cdFx0XHRcdG1lZGlhUGFyc2VyVHlwZSA6IHsgdHlwZSA6ICdlcycsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFNZWRpYVBhcnNlclR5cGUsIHN1YlR5cGUgOiAnS2FsdHVyYU1lZGlhUGFyc2VyVHlwZScgfSxcblx0XHRcdFx0c291cmNlQXNzZXRQYXJhbXNJZHMgOiB7IHR5cGUgOiAncycgfVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cblxudHlwZXNNYXBwaW5nU3RvcmFnZVsnS2FsdHVyYUFzc2V0UGFyYW1zJ10gPSBLYWx0dXJhQXNzZXRQYXJhbXM7Il19