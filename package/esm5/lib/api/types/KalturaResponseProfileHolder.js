/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaBaseResponseProfile } from './KalturaBaseResponseProfile';
/**
 * @record
 */
export function KalturaResponseProfileHolderArgs() { }
/** @type {?|undefined} */
KalturaResponseProfileHolderArgs.prototype.id;
/** @type {?|undefined} */
KalturaResponseProfileHolderArgs.prototype.systemName;
var KalturaResponseProfileHolder = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaResponseProfileHolder, _super);
    function KalturaResponseProfileHolder(data) {
        return _super.call(this, data) || this;
    }
    /**
     * @return {?}
     */
    KalturaResponseProfileHolder.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaResponseProfileHolder' },
            id: { type: 'n' },
            systemName: { type: 's' }
        });
        return result;
    };
    return KalturaResponseProfileHolder;
}(KalturaBaseResponseProfile));
export { KalturaResponseProfileHolder };
if (false) {
    /** @type {?} */
    KalturaResponseProfileHolder.prototype.id;
    /** @type {?} */
    KalturaResponseProfileHolder.prototype.systemName;
}
typesMappingStorage['KalturaResponseProfileHolder'] = KalturaResponseProfileHolder;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYVJlc3BvbnNlUHJvZmlsZUhvbGRlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2thbHR1cmEtbmd4LWNsaWVudC8iLCJzb3VyY2VzIjpbImxpYi9hcGkvdHlwZXMvS2FsdHVyYVJlc3BvbnNlUHJvZmlsZUhvbGRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLE9BQU8sRUFBeUIsbUJBQW1CLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUNwRixPQUFPLEVBQUUsMEJBQTBCLEVBQWtDLE1BQU0sOEJBQThCLENBQUM7Ozs7Ozs7OztBQVExRyxJQUFBO0lBQWtELHdEQUEwQjtJQUt4RSxzQ0FBWSxJQUF3QztlQUVoRCxrQkFBTSxJQUFJLENBQUM7S0FDZDs7OztJQUVTLG1EQUFZOzs7SUFBdEI7O1FBRUksSUFBTSxNQUFNLEdBQUcsaUJBQU0sWUFBWSxXQUFFLENBQUM7UUFDcEMsTUFBTSxDQUFDLE1BQU0sQ0FDVCxNQUFNLENBQUMsVUFBVSxFQUNqQjtZQUNJLFVBQVUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLDhCQUE4QixFQUFFO1lBQ2pGLEVBQUUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDbkIsVUFBVSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtTQUNsQixDQUNKLENBQUM7UUFDRixNQUFNLENBQUMsTUFBTSxDQUFDO0tBQ2pCO3VDQWhDTDtFQVVrRCwwQkFBMEIsRUF1QjNFLENBQUE7QUF2QkQsd0NBdUJDOzs7Ozs7O0FBRUQsbUJBQW1CLENBQUMsOEJBQThCLENBQUMsR0FBRyw0QkFBNEIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgS2FsdHVyYU9iamVjdE1ldGFkYXRhLCB0eXBlc01hcHBpbmdTdG9yYWdlIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5pbXBvcnQgeyBLYWx0dXJhQmFzZVJlc3BvbnNlUHJvZmlsZSwgS2FsdHVyYUJhc2VSZXNwb25zZVByb2ZpbGVBcmdzIH0gZnJvbSAnLi9LYWx0dXJhQmFzZVJlc3BvbnNlUHJvZmlsZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgS2FsdHVyYVJlc3BvbnNlUHJvZmlsZUhvbGRlckFyZ3MgIGV4dGVuZHMgS2FsdHVyYUJhc2VSZXNwb25zZVByb2ZpbGVBcmdzIHtcbiAgICBpZD8gOiBudW1iZXI7XG5cdHN5c3RlbU5hbWU/IDogc3RyaW5nO1xufVxuXG5cbmV4cG9ydCBjbGFzcyBLYWx0dXJhUmVzcG9uc2VQcm9maWxlSG9sZGVyIGV4dGVuZHMgS2FsdHVyYUJhc2VSZXNwb25zZVByb2ZpbGUge1xuXG4gICAgaWQgOiBudW1iZXI7XG5cdHN5c3RlbU5hbWUgOiBzdHJpbmc7XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhPyA6IEthbHR1cmFSZXNwb25zZVByb2ZpbGVIb2xkZXJBcmdzKVxuICAgIHtcbiAgICAgICAgc3VwZXIoZGF0YSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9nZXRNZXRhZGF0YSgpIDogS2FsdHVyYU9iamVjdE1ldGFkYXRhXG4gICAge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBzdXBlci5fZ2V0TWV0YWRhdGEoKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHJlc3VsdC5wcm9wZXJ0aWVzLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG9iamVjdFR5cGUgOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnS2FsdHVyYVJlc3BvbnNlUHJvZmlsZUhvbGRlcicgfSxcblx0XHRcdFx0aWQgOiB7IHR5cGUgOiAnbicgfSxcblx0XHRcdFx0c3lzdGVtTmFtZSA6IHsgdHlwZSA6ICdzJyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuXG50eXBlc01hcHBpbmdTdG9yYWdlWydLYWx0dXJhUmVzcG9uc2VQcm9maWxlSG9sZGVyJ10gPSBLYWx0dXJhUmVzcG9uc2VQcm9maWxlSG9sZGVyOyJdfQ==