/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaAccessControlContextTypeHolder } from './KalturaAccessControlContextTypeHolder';
import { KalturaKeyValue } from './KalturaKeyValue';
import { KalturaObjectBase } from '../kaltura-object-base';
/**
 * @record
 */
export function KalturaAccessControlScopeArgs() { }
/** @type {?|undefined} */
KalturaAccessControlScopeArgs.prototype.referrer;
/** @type {?|undefined} */
KalturaAccessControlScopeArgs.prototype.ip;
/** @type {?|undefined} */
KalturaAccessControlScopeArgs.prototype.ks;
/** @type {?|undefined} */
KalturaAccessControlScopeArgs.prototype.userAgent;
/** @type {?|undefined} */
KalturaAccessControlScopeArgs.prototype.time;
/** @type {?|undefined} */
KalturaAccessControlScopeArgs.prototype.contexts;
/** @type {?|undefined} */
KalturaAccessControlScopeArgs.prototype.hashes;
var KalturaAccessControlScope = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaAccessControlScope, _super);
    function KalturaAccessControlScope(data) {
        var _this = _super.call(this, data) || this;
        if (typeof _this.contexts === 'undefined')
            _this.contexts = [];
        if (typeof _this.hashes === 'undefined')
            _this.hashes = [];
        return _this;
    }
    /**
     * @return {?}
     */
    KalturaAccessControlScope.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaAccessControlScope' },
            referrer: { type: 's' },
            ip: { type: 's' },
            ks: { type: 's' },
            userAgent: { type: 's' },
            time: { type: 'n' },
            contexts: { type: 'a', subTypeConstructor: KalturaAccessControlContextTypeHolder, subType: 'KalturaAccessControlContextTypeHolder' },
            hashes: { type: 'a', subTypeConstructor: KalturaKeyValue, subType: 'KalturaKeyValue' }
        });
        return result;
    };
    return KalturaAccessControlScope;
}(KalturaObjectBase));
export { KalturaAccessControlScope };
if (false) {
    /** @type {?} */
    KalturaAccessControlScope.prototype.referrer;
    /** @type {?} */
    KalturaAccessControlScope.prototype.ip;
    /** @type {?} */
    KalturaAccessControlScope.prototype.ks;
    /** @type {?} */
    KalturaAccessControlScope.prototype.userAgent;
    /** @type {?} */
    KalturaAccessControlScope.prototype.time;
    /** @type {?} */
    KalturaAccessControlScope.prototype.contexts;
    /** @type {?} */
    KalturaAccessControlScope.prototype.hashes;
}
typesMappingStorage['KalturaAccessControlScope'] = KalturaAccessControlScope;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUFjY2Vzc0NvbnRyb2xTY29wZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2thbHR1cmEtbmd4LWNsaWVudC8iLCJzb3VyY2VzIjpbImxpYi9hcGkvdHlwZXMvS2FsdHVyYUFjY2Vzc0NvbnRyb2xTY29wZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLE9BQU8sRUFBeUIsbUJBQW1CLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUNwRixPQUFPLEVBQUUscUNBQXFDLEVBQUUsTUFBTSx5Q0FBeUMsQ0FBQztBQUNoRyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDcEQsT0FBTyxFQUFFLGlCQUFpQixFQUF5QixNQUFNLHdCQUF3QixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBYWxGLElBQUE7SUFBK0MscURBQWlCO0lBVTVELG1DQUFZLElBQXFDO1FBQWpELFlBRUksa0JBQU0sSUFBSSxDQUFDLFNBR2Q7UUFGRyxFQUFFLENBQUMsQ0FBQyxPQUFPLEtBQUksQ0FBQyxRQUFRLEtBQUssV0FBVyxDQUFDO1lBQUMsS0FBSSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUM7UUFDbkUsRUFBRSxDQUFDLENBQUMsT0FBTyxLQUFJLENBQUMsTUFBTSxLQUFLLFdBQVcsQ0FBQztZQUFDLEtBQUksQ0FBQyxNQUFNLEdBQUcsRUFBRSxDQUFDOztLQUN0RDs7OztJQUVTLGdEQUFZOzs7SUFBdEI7O1FBRUksSUFBTSxNQUFNLEdBQUcsaUJBQU0sWUFBWSxXQUFFLENBQUM7UUFDcEMsTUFBTSxDQUFDLE1BQU0sQ0FDVCxNQUFNLENBQUMsVUFBVSxFQUNqQjtZQUNJLFVBQVUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLDJCQUEyQixFQUFFO1lBQzlFLFFBQVEsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDekIsRUFBRSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUNuQixFQUFFLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ25CLFNBQVMsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDMUIsSUFBSSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUNyQixRQUFRLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLGtCQUFrQixFQUFHLHFDQUFxQyxFQUFFLE9BQU8sRUFBRyx1Q0FBdUMsRUFBRTtZQUN4SSxNQUFNLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLGtCQUFrQixFQUFHLGVBQWUsRUFBRSxPQUFPLEVBQUcsaUJBQWlCLEVBQUU7U0FDakYsQ0FDSixDQUFDO1FBQ0YsTUFBTSxDQUFDLE1BQU0sQ0FBQztLQUNqQjtvQ0FuREw7RUFpQitDLGlCQUFpQixFQW1DL0QsQ0FBQTtBQW5DRCxxQ0FtQ0M7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUQsbUJBQW1CLENBQUMsMkJBQTJCLENBQUMsR0FBRyx5QkFBeUIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgS2FsdHVyYU9iamVjdE1ldGFkYXRhLCB0eXBlc01hcHBpbmdTdG9yYWdlIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5pbXBvcnQgeyBLYWx0dXJhQWNjZXNzQ29udHJvbENvbnRleHRUeXBlSG9sZGVyIH0gZnJvbSAnLi9LYWx0dXJhQWNjZXNzQ29udHJvbENvbnRleHRUeXBlSG9sZGVyJztcbmltcG9ydCB7IEthbHR1cmFLZXlWYWx1ZSB9IGZyb20gJy4vS2FsdHVyYUtleVZhbHVlJztcbmltcG9ydCB7IEthbHR1cmFPYmplY3RCYXNlLCBLYWx0dXJhT2JqZWN0QmFzZUFyZ3MgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcblxuZXhwb3J0IGludGVyZmFjZSBLYWx0dXJhQWNjZXNzQ29udHJvbFNjb3BlQXJncyAgZXh0ZW5kcyBLYWx0dXJhT2JqZWN0QmFzZUFyZ3Mge1xuICAgIHJlZmVycmVyPyA6IHN0cmluZztcblx0aXA/IDogc3RyaW5nO1xuXHRrcz8gOiBzdHJpbmc7XG5cdHVzZXJBZ2VudD8gOiBzdHJpbmc7XG5cdHRpbWU/IDogbnVtYmVyO1xuXHRjb250ZXh0cz8gOiBLYWx0dXJhQWNjZXNzQ29udHJvbENvbnRleHRUeXBlSG9sZGVyW107XG5cdGhhc2hlcz8gOiBLYWx0dXJhS2V5VmFsdWVbXTtcbn1cblxuXG5leHBvcnQgY2xhc3MgS2FsdHVyYUFjY2Vzc0NvbnRyb2xTY29wZSBleHRlbmRzIEthbHR1cmFPYmplY3RCYXNlIHtcblxuICAgIHJlZmVycmVyIDogc3RyaW5nO1xuXHRpcCA6IHN0cmluZztcblx0a3MgOiBzdHJpbmc7XG5cdHVzZXJBZ2VudCA6IHN0cmluZztcblx0dGltZSA6IG51bWJlcjtcblx0Y29udGV4dHMgOiBLYWx0dXJhQWNjZXNzQ29udHJvbENvbnRleHRUeXBlSG9sZGVyW107XG5cdGhhc2hlcyA6IEthbHR1cmFLZXlWYWx1ZVtdO1xuXG4gICAgY29uc3RydWN0b3IoZGF0YT8gOiBLYWx0dXJhQWNjZXNzQ29udHJvbFNjb3BlQXJncylcbiAgICB7XG4gICAgICAgIHN1cGVyKGRhdGEpO1xuICAgICAgICBpZiAodHlwZW9mIHRoaXMuY29udGV4dHMgPT09ICd1bmRlZmluZWQnKSB0aGlzLmNvbnRleHRzID0gW107XG5cdFx0aWYgKHR5cGVvZiB0aGlzLmhhc2hlcyA9PT0gJ3VuZGVmaW5lZCcpIHRoaXMuaGFzaGVzID0gW107XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9nZXRNZXRhZGF0YSgpIDogS2FsdHVyYU9iamVjdE1ldGFkYXRhXG4gICAge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBzdXBlci5fZ2V0TWV0YWRhdGEoKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHJlc3VsdC5wcm9wZXJ0aWVzLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG9iamVjdFR5cGUgOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnS2FsdHVyYUFjY2Vzc0NvbnRyb2xTY29wZScgfSxcblx0XHRcdFx0cmVmZXJyZXIgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0aXAgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0a3MgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0dXNlckFnZW50IDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdHRpbWUgOiB7IHR5cGUgOiAnbicgfSxcblx0XHRcdFx0Y29udGV4dHMgOiB7IHR5cGUgOiAnYScsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFBY2Nlc3NDb250cm9sQ29udGV4dFR5cGVIb2xkZXIsIHN1YlR5cGUgOiAnS2FsdHVyYUFjY2Vzc0NvbnRyb2xDb250ZXh0VHlwZUhvbGRlcicgfSxcblx0XHRcdFx0aGFzaGVzIDogeyB0eXBlIDogJ2EnLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhS2V5VmFsdWUsIHN1YlR5cGUgOiAnS2FsdHVyYUtleVZhbHVlJyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuXG50eXBlc01hcHBpbmdTdG9yYWdlWydLYWx0dXJhQWNjZXNzQ29udHJvbFNjb3BlJ10gPSBLYWx0dXJhQWNjZXNzQ29udHJvbFNjb3BlOyJdfQ==