/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
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
export class KalturaAssetParams extends KalturaObjectBase {
    /**
     * @param {?=} data
     */
    constructor(data) {
        super(data);
        if (typeof this.requiredPermissions === 'undefined')
            this.requiredPermissions = [];
    }
    /**
     * @return {?}
     */
    _getMetadata() {
        /** @type {?} */
        const result = super._getMetadata();
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
    }
}
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUFzc2V0UGFyYW1zLmpzIiwic291cmNlUm9vdCI6Im5nOi8va2FsdHVyYS1uZ3gtY2xpZW50LyIsInNvdXJjZXMiOlsibGliL2FwaS90eXBlcy9LYWx0dXJhQXNzZXRQYXJhbXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUNBLE9BQU8sRUFBeUIsbUJBQW1CLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUNwRixPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUNsRSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDaEQsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDbEUsT0FBTyxFQUFFLGlCQUFpQixFQUF5QixNQUFNLHdCQUF3QixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBZ0JsRixNQUFNLHlCQUEwQixTQUFRLGlCQUFpQjs7OztJQWdCckQsWUFBWSxJQUE4QjtRQUV0QyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDWixFQUFFLENBQUMsQ0FBQyxPQUFPLElBQUksQ0FBQyxtQkFBbUIsS0FBSyxXQUFXLENBQUM7WUFBQyxJQUFJLENBQUMsbUJBQW1CLEdBQUcsRUFBRSxDQUFDO0tBQ3RGOzs7O0lBRVMsWUFBWTs7UUFFbEIsTUFBTSxNQUFNLEdBQUcsS0FBSyxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxNQUFNLENBQ1QsTUFBTSxDQUFDLFVBQVUsRUFDakI7WUFDSSxVQUFVLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyxvQkFBb0IsRUFBRTtZQUN2RSxFQUFFLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLFFBQVEsRUFBRyxJQUFJLEVBQUU7WUFDcEMsU0FBUyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUMxQixJQUFJLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3JCLFVBQVUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDM0IsV0FBVyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUM1QixTQUFTLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLFFBQVEsRUFBRyxJQUFJLEVBQUU7WUFDM0MsZUFBZSxFQUFHLEVBQUUsSUFBSSxFQUFHLElBQUksRUFBRSxRQUFRLEVBQUcsSUFBSSxFQUFFLGtCQUFrQixFQUFHLHNCQUFzQixFQUFFLE9BQU8sRUFBRyx3QkFBd0IsRUFBRTtZQUNuSSxJQUFJLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3JCLG1CQUFtQixFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxrQkFBa0IsRUFBRyxhQUFhLEVBQUUsT0FBTyxFQUFHLGVBQWUsRUFBRTtZQUNuRyw0QkFBNEIsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDN0MsdUJBQXVCLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3hDLGVBQWUsRUFBRyxFQUFFLElBQUksRUFBRyxJQUFJLEVBQUUsa0JBQWtCLEVBQUcsc0JBQXNCLEVBQUUsT0FBTyxFQUFHLHdCQUF3QixFQUFFO1lBQ2xILG9CQUFvQixFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtTQUM1QixDQUNKLENBQUM7UUFDRixNQUFNLENBQUMsTUFBTSxDQUFDO0tBQ2pCO0NBQ0o7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUQsbUJBQW1CLENBQUMsb0JBQW9CLENBQUMsR0FBRyxrQkFBa0IsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgS2FsdHVyYU9iamVjdE1ldGFkYXRhLCB0eXBlc01hcHBpbmdTdG9yYWdlIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5pbXBvcnQgeyBLYWx0dXJhTnVsbGFibGVCb29sZWFuIH0gZnJvbSAnLi9LYWx0dXJhTnVsbGFibGVCb29sZWFuJztcbmltcG9ydCB7IEthbHR1cmFTdHJpbmcgfSBmcm9tICcuL0thbHR1cmFTdHJpbmcnO1xuaW1wb3J0IHsgS2FsdHVyYU1lZGlhUGFyc2VyVHlwZSB9IGZyb20gJy4vS2FsdHVyYU1lZGlhUGFyc2VyVHlwZSc7XG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0QmFzZSwgS2FsdHVyYU9iamVjdEJhc2VBcmdzIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgS2FsdHVyYUFzc2V0UGFyYW1zQXJncyAgZXh0ZW5kcyBLYWx0dXJhT2JqZWN0QmFzZUFyZ3Mge1xuICAgIHBhcnRuZXJJZD8gOiBudW1iZXI7XG5cdG5hbWU/IDogc3RyaW5nO1xuXHRzeXN0ZW1OYW1lPyA6IHN0cmluZztcblx0ZGVzY3JpcHRpb24/IDogc3RyaW5nO1xuXHR0YWdzPyA6IHN0cmluZztcblx0cmVxdWlyZWRQZXJtaXNzaW9ucz8gOiBLYWx0dXJhU3RyaW5nW107XG5cdHNvdXJjZVJlbW90ZVN0b3JhZ2VQcm9maWxlSWQ/IDogbnVtYmVyO1xuXHRyZW1vdGVTdG9yYWdlUHJvZmlsZUlkcz8gOiBudW1iZXI7XG5cdG1lZGlhUGFyc2VyVHlwZT8gOiBLYWx0dXJhTWVkaWFQYXJzZXJUeXBlO1xuXHRzb3VyY2VBc3NldFBhcmFtc0lkcz8gOiBzdHJpbmc7XG59XG5cblxuZXhwb3J0IGNsYXNzIEthbHR1cmFBc3NldFBhcmFtcyBleHRlbmRzIEthbHR1cmFPYmplY3RCYXNlIHtcblxuICAgIHJlYWRvbmx5IGlkIDogbnVtYmVyO1xuXHRwYXJ0bmVySWQgOiBudW1iZXI7XG5cdG5hbWUgOiBzdHJpbmc7XG5cdHN5c3RlbU5hbWUgOiBzdHJpbmc7XG5cdGRlc2NyaXB0aW9uIDogc3RyaW5nO1xuXHRyZWFkb25seSBjcmVhdGVkQXQgOiBEYXRlO1xuXHRyZWFkb25seSBpc1N5c3RlbURlZmF1bHQgOiBLYWx0dXJhTnVsbGFibGVCb29sZWFuO1xuXHR0YWdzIDogc3RyaW5nO1xuXHRyZXF1aXJlZFBlcm1pc3Npb25zIDogS2FsdHVyYVN0cmluZ1tdO1xuXHRzb3VyY2VSZW1vdGVTdG9yYWdlUHJvZmlsZUlkIDogbnVtYmVyO1xuXHRyZW1vdGVTdG9yYWdlUHJvZmlsZUlkcyA6IG51bWJlcjtcblx0bWVkaWFQYXJzZXJUeXBlIDogS2FsdHVyYU1lZGlhUGFyc2VyVHlwZTtcblx0c291cmNlQXNzZXRQYXJhbXNJZHMgOiBzdHJpbmc7XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhPyA6IEthbHR1cmFBc3NldFBhcmFtc0FyZ3MpXG4gICAge1xuICAgICAgICBzdXBlcihkYXRhKTtcbiAgICAgICAgaWYgKHR5cGVvZiB0aGlzLnJlcXVpcmVkUGVybWlzc2lvbnMgPT09ICd1bmRlZmluZWQnKSB0aGlzLnJlcXVpcmVkUGVybWlzc2lvbnMgPSBbXTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2dldE1ldGFkYXRhKCkgOiBLYWx0dXJhT2JqZWN0TWV0YWRhdGFcbiAgICB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLl9nZXRNZXRhZGF0YSgpO1xuICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgcmVzdWx0LnByb3BlcnRpZXMsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgb2JqZWN0VHlwZSA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdLYWx0dXJhQXNzZXRQYXJhbXMnIH0sXG5cdFx0XHRcdGlkIDogeyB0eXBlIDogJ24nLCByZWFkT25seSA6IHRydWUgfSxcblx0XHRcdFx0cGFydG5lcklkIDogeyB0eXBlIDogJ24nIH0sXG5cdFx0XHRcdG5hbWUgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0c3lzdGVtTmFtZSA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRkZXNjcmlwdGlvbiA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRjcmVhdGVkQXQgOiB7IHR5cGUgOiAnZCcsIHJlYWRPbmx5IDogdHJ1ZSB9LFxuXHRcdFx0XHRpc1N5c3RlbURlZmF1bHQgOiB7IHR5cGUgOiAnZW4nLCByZWFkT25seSA6IHRydWUsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFOdWxsYWJsZUJvb2xlYW4sIHN1YlR5cGUgOiAnS2FsdHVyYU51bGxhYmxlQm9vbGVhbicgfSxcblx0XHRcdFx0dGFncyA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRyZXF1aXJlZFBlcm1pc3Npb25zIDogeyB0eXBlIDogJ2EnLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhU3RyaW5nLCBzdWJUeXBlIDogJ0thbHR1cmFTdHJpbmcnIH0sXG5cdFx0XHRcdHNvdXJjZVJlbW90ZVN0b3JhZ2VQcm9maWxlSWQgOiB7IHR5cGUgOiAnbicgfSxcblx0XHRcdFx0cmVtb3RlU3RvcmFnZVByb2ZpbGVJZHMgOiB7IHR5cGUgOiAnbicgfSxcblx0XHRcdFx0bWVkaWFQYXJzZXJUeXBlIDogeyB0eXBlIDogJ2VzJywgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYU1lZGlhUGFyc2VyVHlwZSwgc3ViVHlwZSA6ICdLYWx0dXJhTWVkaWFQYXJzZXJUeXBlJyB9LFxuXHRcdFx0XHRzb3VyY2VBc3NldFBhcmFtc0lkcyA6IHsgdHlwZSA6ICdzJyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuXG50eXBlc01hcHBpbmdTdG9yYWdlWydLYWx0dXJhQXNzZXRQYXJhbXMnXSA9IEthbHR1cmFBc3NldFBhcmFtczsiXX0=